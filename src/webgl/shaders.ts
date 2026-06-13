/**
 * GLSL for the topographic terrain.
 *
 * Vertex: fBm (5 octaves of 3D simplex noise) displaces a flat plane into
 * rolling terrain; an interactive gaussian bump follows the cursor.
 * Fragment: draws anti-aliased topographic contour isolines (bold index
 * contours + finer intermediate contours), a faint elevation-banded fill
 * with derivative-based shading, a sweeping survey scan, and distance fog
 * that dissolves the far terrain into the page background.
 */

// Ashima Arts / Stefan Gustavson 3D simplex noise — public domain.
const simplex = /* glsl */ `
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x,289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

float snoise(vec3 v){
  const vec2  C = vec2(1.0/6.0, 1.0/3.0);
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
  i = mod(i, 289.0);
  vec4 p = permute(permute(permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 1.0/7.0;
  vec3  ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
`;

export const terrainVertex = /* glsl */ `
precision highp float;

uniform float uTime;
uniform float uFlow;
uniform float uAmp;
uniform float uFreq;
uniform float uReveal;
uniform vec2  uMouseWorld;
uniform float uMouseStrength;

varying float vHeight;
varying vec3  vWorldPos;
varying float vFogDepth;
varying vec2  vObjXY;

${simplex}

float fbm(vec2 p){
  float value = 0.0;
  float amp = 0.5;
  float freq = 1.0;
  // slow vertical drift through the noise field keeps the surface alive
  float z = uTime * 0.035;
  for(int i = 0; i < 5; i++){
    value += amp * snoise(vec3(p * freq, z));
    freq *= 2.02;
    amp  *= 0.5;
    z    *= 1.7;
  }
  return value;
}

void main(){
  vec3 pos = position;
  vObjXY = pos.xy;

  // object-space xy maps to the world ground plane (mesh is rotated flat)
  vec2 samplePos = pos.xy * uFreq + vec2(0.0, uFlow);
  float h = fbm(samplePos);

  // gentle ridging emphasises peaks without spiking the valleys
  h = mix(h, 1.0 - abs(h), 0.35);

  float elevation = h * uAmp * uReveal;

  // interactive swell that follows the cursor across the terrain
  float d = distance(pos.xy, uMouseWorld);
  elevation += exp(-d * d * 0.018) * uMouseStrength;

  pos.z += elevation;

  vHeight = elevation;

  vec4 worldPos = modelMatrix * vec4(pos, 1.0);
  vWorldPos = worldPos.xyz;

  vec4 mvPos = viewMatrix * worldPos;
  vFogDepth = -mvPos.z;

  gl_Position = projectionMatrix * mvPos;
}
`;

export const terrainFragment = /* glsl */ `
precision highp float;

uniform vec3  uBg;
uniform vec3  uContour;
uniform vec3  uContourMinor;
uniform vec3  uLow;
uniform vec3  uHigh;
uniform vec3  uAccent;
uniform float uMajorSpacing;
uniform float uMinorSpacing;
uniform float uScanPos;
uniform float uFogNear;
uniform float uFogFar;
uniform float uReveal;
uniform float uOpacity;
uniform vec2  uMouseWorld;
uniform vec3  uCursorColor;

varying float vHeight;
varying vec3  vWorldPos;
varying float vFogDepth;
varying vec2  vObjXY;

// Anti-aliased contour line: returns ~1 on a line, ~0 between lines.
float contour(float value, float spacing){
  float f = value / spacing;
  float distToLine = abs(fract(f - 0.5) - 0.5);
  float w = fwidth(f);
  return 1.0 - smoothstep(0.0, w * 1.6, distToLine);
}

void main(){
  // derivative-based normal for a soft directional shade
  vec3 n = normalize(cross(dFdx(vWorldPos), dFdy(vWorldPos)));
  float light = clamp(dot(n, normalize(vec3(0.35, 0.55, 0.75))), 0.0, 1.0);

  // normalised elevation drives a faint banded fill
  float hn = clamp(vHeight * 0.12 + 0.5, 0.0, 1.0);
  vec3 fill = mix(uLow, uHigh, hn);
  fill *= 0.5 + 0.5 * light;

  vec3 col = uBg;
  col = mix(col, fill, 0.16);

  float minorLine = contour(vHeight, uMinorSpacing);
  float majorLine = contour(vHeight, uMajorSpacing);

  // intermediate (thin) contours
  col += uContourMinor * minorLine * 0.30;
  // index (bold) contours
  col += uContour * majorLine * 0.95;

  // a survey scan band sweeping across the terrain, charging the lines it crosses
  float scan = exp(-pow((vWorldPos.y - uScanPos) * 0.18, 2.0));
  col += uAccent * majorLine * scan * 1.1;
  col += uAccent * minorLine * scan * 0.35;
  col += uAccent * scan * 0.015;

  // localised colour change around the cursor (map only) — recolours the
  // contour lines toward the cursor colour with a soft surrounding glow
  float cd = distance(vObjXY, uMouseWorld);
  float aura = exp(-cd * cd * 0.012);
  col = mix(col, uCursorColor, aura * (majorLine * 0.95 + minorLine * 0.45));
  col += uCursorColor * aura * 0.05;

  // distance fog dissolves far terrain into the page background
  float fog = smoothstep(uFogNear, uFogFar, vFogDepth);
  col = mix(col, uBg, fog);

  // intro reveal fades the field up from the background
  col = mix(uBg, col, clamp(uReveal, 0.0, 1.0));

  gl_FragColor = vec4(col, uOpacity);
}
`;
