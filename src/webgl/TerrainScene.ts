import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  PlaneGeometry,
  ShaderMaterial,
  Mesh,
  Color,
  Vector2,
  Vector3,
  Raycaster,
  Plane,
  Clock,
  DoubleSide,
  MathUtils,
  ColorManagement,
} from "three";
import { terrainVertex, terrainFragment } from "./shaders";

// This scene uses a single raw ShaderMaterial that writes final sRGB colours
// directly. Disabling colour management keeps Color(hex) values un-converted so
// the contour palette renders as authored.
ColorManagement.enabled = false;

/** Survey palette — cool luminous contours over near-black, one warm signal. */
export const PALETTE = {
  bg: "#05080b",
  contour: "#5fe6c4", // index (bold) contour — luminous mint
  contourMinor: "#1f5a55", // intermediate contour — dim teal
  low: "#0a2f3a", // low-elevation tint
  high: "#67e8c0", // high-elevation tint
  accent: "#ffb23e", // warm survey-scan signal
  cursor: "#ff6b3d", // localised cursor aura — hot coral, always contrasts the cool palette
};

const lerp = MathUtils.lerp;

interface CameraKey {
  pos: Vector3;
  look: Vector3;
}

export class TerrainScene {
  readonly supported: boolean;

  private renderer!: WebGLRenderer;
  private scene!: Scene;
  private camera!: PerspectiveCamera;
  private mesh!: Mesh;
  private material!: ShaderMaterial;
  private clock = new Clock();

  private raycaster = new Raycaster();
  private groundPlane = new Plane(new Vector3(0, 1, 0), 0);
  private ndc = new Vector2();
  private hitPoint = new Vector3();

  private mouseTarget = new Vector2(0, 0); // object-space cursor target
  private mouseWorld = new Vector2(0, 0);
  private parallaxTarget = new Vector2(0, 0); // -1..1 for camera drift
  private parallax = new Vector2(0, 0);
  private mouseStrengthTarget = 0;

  private scrollTarget = 0;
  private scroll = 0;
  private revealTarget = 0;
  private reveal = 0;

  private running = false;
  private rafId = 0;
  private reducedMotion: boolean;

  private camStart: CameraKey;
  private camEnd: CameraKey;
  private tmpPos = new Vector3();
  private tmpLook = new Vector3();

  constructor(canvas: HTMLCanvasElement) {
    this.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let ok = true;
    try {
      this.renderer = new WebGLRenderer({
        canvas,
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
      });
    } catch {
      ok = false;
    }
    this.supported = ok && !!this.renderer;

    if (!this.supported) {
      this.camStart = this.camEnd = { pos: new Vector3(), look: new Vector3() };
      return;
    }

    this.renderer.setClearColor(new Color(PALETTE.bg), 1);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.scene = new Scene();

    this.camera = new PerspectiveCamera(46, this.aspect(), 0.1, 600);
    this.camStart = { pos: new Vector3(0, 8.5, 20), look: new Vector3(0, 0.5, -8) };
    this.camEnd = { pos: new Vector3(0, 15, 23), look: new Vector3(0, -1.5, -14) };
    this.camera.position.copy(this.camStart.pos);
    this.camera.lookAt(this.camStart.look);

    // ground plane (rotated flat); object-space xy maps to world x / -z
    const isSmall = Math.min(window.innerWidth, window.innerHeight) < 760;
    const segments = isSmall ? 150 : 250;
    const geometry = new PlaneGeometry(140, 240, segments, Math.round(segments * 1.6));

    this.material = new ShaderMaterial({
      vertexShader: terrainVertex,
      fragmentShader: terrainFragment,
      side: DoubleSide,
      uniforms: {
        uTime: { value: 0 },
        uFlow: { value: 0 },
        uAmp: { value: 7.2 },
        uFreq: { value: 0.05 },
        uReveal: { value: 0 },
        uMouseWorld: { value: new Vector2(9999, 9999) },
        uMouseStrength: { value: 0 },
        uBg: { value: new Color(PALETTE.bg) },
        uContour: { value: new Color(PALETTE.contour) },
        uContourMinor: { value: new Color(PALETTE.contourMinor) },
        uLow: { value: new Color(PALETTE.low) },
        uHigh: { value: new Color(PALETTE.high) },
        uAccent: { value: new Color(PALETTE.accent) },
        uCursorColor: { value: new Color(PALETTE.cursor) },
        uMajorSpacing: { value: 1.15 },
        uMinorSpacing: { value: 0.23 },
        uScanPos: { value: -120 },
        uFogNear: { value: 14 },
        uFogFar: { value: 132 },
        uOpacity: { value: 1 },
      },
    });

    this.mesh = new Mesh(geometry, this.material);
    this.mesh.rotation.x = -Math.PI / 2;
    this.scene.add(this.mesh);

    this.resize();
    window.addEventListener("resize", this.resize, { passive: true });
    window.addEventListener("pointermove", this.onPointerMove, { passive: true });
    document.addEventListener("visibilitychange", this.onVisibility);
    canvas.addEventListener("webglcontextlost", this.onContextLost as EventListener);
    canvas.addEventListener("webglcontextrestored", this.onContextRestored as EventListener);
  }

  private onContextLost = (e: Event) => {
    // Allow the context to be restored instead of staying lost.
    e.preventDefault();
    this.stop();
  };

  private onContextRestored = () => {
    // three re-uploads GPU resources on the next render.
    this.resize();
    if (!document.hidden) this.start();
  };

  private aspect() {
    return window.innerWidth / Math.max(window.innerHeight, 1);
  }

  private resize = () => {
    if (!this.supported) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / Math.max(h, 1);
    this.camera.updateProjectionMatrix();
  };

  private onPointerMove = (e: PointerEvent) => {
    if (!this.supported) return;
    this.ndc.x = (e.clientX / window.innerWidth) * 2 - 1;
    this.ndc.y = -(e.clientY / window.innerHeight) * 2 + 1;
    this.parallaxTarget.set(this.ndc.x, this.ndc.y);

    this.raycaster.setFromCamera(this.ndc, this.camera);
    if (this.raycaster.ray.intersectPlane(this.groundPlane, this.hitPoint)) {
      this.mesh.worldToLocal(this.hitPoint);
      this.mouseTarget.set(this.hitPoint.x, this.hitPoint.y);
    }
    this.mouseStrengthTarget = this.reducedMotion ? 0 : 1.7;
  };

  private onVisibility = () => {
    if (document.hidden) this.stop();
    else this.start();
  };

  setScroll(p: number) {
    this.scrollTarget = MathUtils.clamp(p, 0, 1);
  }

  setReveal(v: number) {
    this.revealTarget = MathUtils.clamp(v, 0, 1);
  }

  /** Recolour the terrain palette from a base RGB (0–255). Drives the
   *  contour, high/low elevation tints and intermediate contours so the whole
   *  surface shifts hue together. The warm survey scan (uAccent) stays put. */
  setThemeRGB(r: number, g: number, b: number) {
    if (!this.supported) return;
    const u = this.material.uniforms;
    const nr = r / 255;
    const ng = g / 255;
    const nb = b / 255;
    u.uContour.value.setRGB(nr, ng, nb);
    u.uHigh.value.setRGB(Math.min(1, nr + 0.16), Math.min(1, ng + 0.16), Math.min(1, nb + 0.16));
    u.uLow.value.setRGB(nr * 0.18, ng * 0.32, nb * 0.34);
    u.uContourMinor.value.setRGB(nr * 0.34, ng * 0.42, nb * 0.42);
  }

  start() {
    if (!this.supported || this.running) return;
    this.running = true;
    this.clock.getDelta();
    this.loop();
  }

  stop() {
    this.running = false;
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }

  private loop = () => {
    if (!this.running) return;
    this.rafId = requestAnimationFrame(this.loop);
    this.render();
  };

  private render() {
    const dt = Math.min(this.clock.getDelta(), 0.05);
    const t = this.clock.elapsedTime;
    const u = this.material.uniforms;

    // eased state
    this.scroll = lerp(this.scroll, this.scrollTarget, 0.06);
    this.reveal = lerp(this.reveal, this.revealTarget, 0.05);
    u.uReveal.value = this.reveal;

    // terrain flow: gentle autonomous drift + scroll-driven travel
    const drift = this.reducedMotion ? 0 : t * 0.45;
    u.uFlow.value = drift + this.scroll * 26;
    u.uTime.value = this.reducedMotion ? 0 : t;

    // cursor swell
    this.mouseWorld.lerp(this.mouseTarget, 0.08);
    u.uMouseWorld.value.set(this.mouseWorld.x, this.mouseWorld.y);
    this.mouseStrengthTarget = lerp(this.mouseStrengthTarget, 0, dt * 0.6);
    u.uMouseStrength.value = lerp(u.uMouseStrength.value, this.mouseStrengthTarget, 0.08);

    // survey scan sweeps along terrain depth, looping
    const scanCycle = this.reducedMotion ? 0 : (t * 7) % 220;
    u.uScanPos.value = 95 - scanCycle;

    // camera path follows scroll, with subtle cursor parallax + idle sway
    this.parallax.lerp(this.parallaxTarget, 0.04);
    const sway = this.reducedMotion ? 0 : Math.sin(t * 0.25) * 0.5;

    this.tmpPos.lerpVectors(this.camStart.pos, this.camEnd.pos, this.scroll);
    this.tmpPos.x += this.parallax.x * 2.2 + sway;
    this.tmpPos.y += this.parallax.y * 1.1;
    this.camera.position.lerp(this.tmpPos, 0.1);

    this.tmpLook.lerpVectors(this.camStart.look, this.camEnd.look, this.scroll);
    this.tmpLook.x += this.parallax.x * 1.4;
    this.camera.lookAt(this.tmpLook);

    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    this.stop();
    window.removeEventListener("resize", this.resize);
    window.removeEventListener("pointermove", this.onPointerMove);
    document.removeEventListener("visibilitychange", this.onVisibility);
    if (this.supported) {
      const canvas = this.renderer.domElement;
      canvas.removeEventListener("webglcontextlost", this.onContextLost as EventListener);
      canvas.removeEventListener("webglcontextrestored", this.onContextRestored as EventListener);
      this.mesh.geometry.dispose();
      this.material.dispose();
      this.renderer.dispose();
    }
  }
}
