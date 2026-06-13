/**
 * Bespoke project visuals rendered as blueprint-style architecture diagrams:
 * hairline nodes connected by auto-routed orthogonal edges, styled to sit
 * quietly inside the survey panel (thin strokes, mono labels, the cycling
 * accent colour). One authored layout per project — real system architecture,
 * not a generic chart.
 */
import type { SchematicKind } from "../data/content";

type Side = "t" | "b" | "l" | "r";

interface ANode {
  id: string;
  cx: number; // centre x
  y: number; // top y
  w: number;
  label: string;
  sub?: string;
  accent?: boolean;
}
interface AEdge {
  from: string;
  to: string;
  fromSide: Side;
  toSide: Side;
  label?: string;
  dashed?: boolean;
}
interface Diagram {
  w: number;
  h: number;
  nodes: ANode[];
  edges: AEdge[];
}

const NH = 42; // node height
const VB_W = 560;
const VB_H = 360;

const DIAGRAMS: Record<SchematicKind, Diagram> = {
  // Liftoff — push-to-deploy control plane (vertical spine + live-URL tap)
  deploy: {
    w: VB_W,
    h: VB_H,
    nodes: [
      { id: "gh", cx: 200, y: 10, w: 196, label: "GitHub", sub: "git push · webhook" },
      { id: "api", cx: 200, y: 82, w: 196, label: "Liftoff API", sub: "NestJS · BullMQ" },
      { id: "build", cx: 200, y: 154, w: 196, label: "Build → DOCR", sub: "Docker · Nixpacks" },
      { id: "pulumi", cx: 200, y: 226, w: 196, label: "Pulumi", sub: "infra-as-code" },
      { id: "do", cx: 200, y: 298, w: 196, label: "DigitalOcean", sub: "App Platform · PG · Redis" },
      { id: "live", cx: 470, y: 298, w: 120, label: "Live URL", accent: true },
    ],
    edges: [
      { from: "gh", to: "api", fromSide: "b", toSide: "t", label: "HMAC" },
      { from: "api", to: "build", fromSide: "b", toSide: "t", label: "dispatch" },
      { from: "build", to: "pulumi", fromSide: "b", toSide: "t", label: "image" },
      { from: "pulumi", to: "do", fromSide: "b", toSide: "t", label: "provision" },
      { from: "do", to: "live", fromSide: "r", toSide: "l" },
    ],
  },

  // Recallm — intercept, embed, similarity branch, rejoin
  cache: {
    w: VB_W,
    h: VB_H,
    nodes: [
      { id: "client", cx: 200, y: 10, w: 200, label: "Client", sub: "chat completion" },
      { id: "recallm", cx: 200, y: 82, w: 200, label: "Recallm", sub: "embed · ONNX", accent: true },
      { id: "match", cx: 200, y: 154, w: 200, label: "Cosine match", sub: "threshold profiles" },
      { id: "hit", cx: 96, y: 240, w: 150, label: "Cache hit", sub: "Redis / memory" },
      { id: "miss", cx: 304, y: 240, w: 160, label: "LLM provider", sub: "on miss" },
      { id: "resp", cx: 200, y: 312, w: 200, label: "Response", sub: "≤ 10ms on hit" },
    ],
    edges: [
      { from: "client", to: "recallm", fromSide: "b", toSide: "t" },
      { from: "recallm", to: "match", fromSide: "b", toSide: "t" },
      { from: "match", to: "hit", fromSide: "b", toSide: "t", label: "hit" },
      { from: "match", to: "miss", fromSide: "b", toSide: "t", label: "miss" },
      { from: "hit", to: "resp", fromSide: "b", toSide: "t" },
      { from: "miss", to: "resp", fromSide: "b", toSide: "t" },
    ],
  },

  // Snag — capture server fanning out to consumers
  webhook: {
    w: VB_W,
    h: VB_H,
    nodes: [
      { id: "provider", cx: 200, y: 10, w: 200, label: "Provider", sub: "webhook POST" },
      { id: "capture", cx: 200, y: 82, w: 200, label: "Capture server", sub: "Fastify · /h/:token", accent: true },
      { id: "ws", cx: 200, y: 154, w: 200, label: "WS hub + store", sub: "Redis · Firestore" },
      { id: "console", cx: 84, y: 256, w: 150, label: "Web console", sub: "live feed" },
      { id: "cli", cx: 280, y: 256, w: 150, label: "CLI tunnel", sub: "→ localhost" },
      { id: "mcp", cx: 474, y: 256, w: 150, label: "SDK · MCP", sub: "agents" },
    ],
    edges: [
      { from: "provider", to: "capture", fromSide: "b", toSide: "t", label: "POST" },
      { from: "capture", to: "ws", fromSide: "b", toSide: "t" },
      { from: "ws", to: "console", fromSide: "b", toSide: "t" },
      { from: "ws", to: "cli", fromSide: "b", toSide: "t" },
      { from: "ws", to: "mcp", fromSide: "b", toSide: "t" },
    ],
  },
};

function anchor(n: ANode, side: Side) {
  const x = n.cx - n.w / 2;
  switch (side) {
    case "t": return { x: n.cx, y: n.y };
    case "b": return { x: n.cx, y: n.y + NH };
    case "l": return { x, y: n.y + NH / 2 };
    case "r": return { x: x + n.w, y: n.y + NH / 2 };
  }
}

/** Orthogonal elbow connector between two anchors. */
function route(a: { x: number; y: number }, as: Side, b: { x: number; y: number }, bs: Side) {
  const f = (n: number) => n.toFixed(1);
  if (as === "b" && bs === "t") {
    const my = (a.y + b.y) / 2;
    return `M${f(a.x)} ${f(a.y)} L${f(a.x)} ${f(my)} L${f(b.x)} ${f(my)} L${f(b.x)} ${f(b.y)}`;
  }
  if ((as === "r" && bs === "l") || (as === "l" && bs === "r")) {
    const mx = (a.x + b.x) / 2;
    return `M${f(a.x)} ${f(a.y)} L${f(mx)} ${f(a.y)} L${f(mx)} ${f(b.y)} L${f(b.x)} ${f(b.y)}`;
  }
  if (as === "l" && bs === "l") {
    const ox = Math.min(a.x, b.x) - 26;
    return `M${f(a.x)} ${f(a.y)} L${f(ox)} ${f(a.y)} L${f(ox)} ${f(b.y)} L${f(b.x)} ${f(b.y)}`;
  }
  if (as === "r" && bs === "r") {
    const ox = Math.max(a.x, b.x) + 26;
    return `M${f(a.x)} ${f(a.y)} L${f(ox)} ${f(a.y)} L${f(ox)} ${f(b.y)} L${f(b.x)} ${f(b.y)}`;
  }
  return `M${f(a.x)} ${f(a.y)} L${f(b.x)} ${f(b.y)}`;
}

function midpoint(a: { x: number; y: number }, b: { x: number; y: number }) {
  return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
}

export function schematic(kind: SchematicKind, id: string): string {
  const d = DIAGRAMS[kind];
  const byId = new Map(d.nodes.map((n) => [n.id, n]));
  const arrowId = `arr-${id}`;

  // faint blueprint dot-grid behind the diagram
  const dots: string[] = [];
  for (let gx = 24; gx < d.w; gx += 32) {
    for (let gy = 18; gy < d.h; gy += 32) {
      dots.push(`<circle class="arch-grid" cx="${gx}" cy="${gy}" r="0.8" />`);
    }
  }

  const edges = d.edges
    .map((e) => {
      const fn = byId.get(e.from)!;
      const tn = byId.get(e.to)!;
      const a = anchor(fn, e.fromSide);
      const b = anchor(tn, e.toSide);
      const path = route(a, e.fromSide, b, e.toSide);
      const lbl = e.label
        ? (() => {
            const m = midpoint(a, b);
            return `<text class="arch-elabel" x="${(m.x + 7).toFixed(1)}" y="${(m.y - 4).toFixed(1)}">${e.label}</text>`;
          })()
        : "";
      return `<path class="arch-edge${e.dashed ? " arch-edge--dashed" : ""}" d="${path}" pathLength="1" marker-end="url(#${arrowId})" />${lbl}`;
    })
    .join("");

  const nodes = d.nodes
    .map((n) => {
      const x = n.cx - n.w / 2;
      const labelY = n.sub ? n.y + 18 : n.y + NH / 2 + 4;
      const sub = n.sub
        ? `<text class="arch-sub" x="${n.cx}" y="${n.y + 32}">${n.sub}</text>`
        : "";
      return `
        <g class="arch-node${n.accent ? " arch-node--accent" : ""}">
          <rect class="arch-box" x="${x}" y="${n.y}" width="${n.w}" height="${NH}" rx="3" />
          <text class="arch-label" x="${n.cx}" y="${labelY}">${n.label}</text>
          ${sub}
        </g>`;
    })
    .join("");

  return `
  <svg class="schematic" viewBox="0 0 ${d.w} ${d.h}" role="img" aria-label="System architecture diagram" preserveAspectRatio="xMidYMid meet">
    <defs>
      <marker id="${arrowId}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path class="arch-arrow" d="M1 1 L9 5 L1 9 z" />
      </marker>
    </defs>
    <text class="arch-axis" x="22" y="16">ARCHITECTURE</text>
    <text class="arch-axis arch-axis-r" x="${d.w - 22}" y="16">${d.nodes.length} NODES</text>
    <g class="arch-grid-g">${dots.join("")}</g>
    ${edges}
    ${nodes}
  </svg>`;
}
