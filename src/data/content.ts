/**
 * Canonical content for the portfolio — extracted from
 * portfolio-agent-extraction/. This is the single source of truth;
 * the DOM is rendered from these values.
 *
 * The "cartographic" fields (coord / elevation / sector) are decorative
 * survey-instrument chrome for the topographic theme.
 */

export interface Stat {
  value: string;
  label: string;
  detail: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export type SchematicKind = "deploy" | "cache" | "webhook";

export interface Project {
  index: string;
  id: string;
  title: string;
  kicker: string;
  subtitle: string;
  context: string;
  method: string;
  outcomes: string[];
  stack: string[];
  links: ProjectLink[];
  coord: string;
  elevation: string;
  schematic: SchematicKind;
  flagship?: boolean;
}

export interface ExperienceEntry {
  date: string;
  role: string;
  org: string;
  orgUrl?: string;
  location?: string;
  description: string;
  bullets?: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ContactRow {
  id: string;
  label: string;
  value: string;
  href: string;
  copy?: boolean;
}

export const profile = {
  name: "Munim Ahmad",
  initials: "MA",
  title: "Full-Stack AI Engineer",
  tagline: "Building systems that reason, remember, and respond.",
  lead: "I build production-grade AI and developer systems at the intersection of machine-learning infrastructure, full-stack engineering, and open-source tooling.",
  location: "Lahore, Pakistan",
  shortLocation: "Lahore, PK",
  // Real coordinates of Lahore — the survey origin.
  coordinates: { lat: "31.5204° N", lon: "74.3587° E" },
  status: "Available for work",
  email: "munimahmad2@gmail.com",
  github: "https://github.com/munimx",
  githubLabel: "github.com/munimx",
  linkedin: "https://linkedin.com/in/munimahmad",
  linkedinLabel: "linkedin.com/in/munimahmad",
  website: "https://munimahmad.me",
  resume: "https://munimahmad.me/munim-ahmad-resume.pdf",
};

export const stats: Stat[] = [
  { value: "3+", label: "Years Building", detail: "Shipping production AI systems end-to-end." },
  { value: "2", label: "Open-Source Libs", detail: "Published tools with a deployment focus." },
  { value: "7B+", label: "Params Fine-tuned", detail: "Hands-on adaptation & optimization." },
  { value: "65%", label: "Latency Reduced", detail: "Measured, pipeline-level optimization." },
];

export const projects: Project[] = [
  {
    index: "01",
    id: "liftoff",
    title: "Liftoff",
    kicker: "Deploy-as-a-Service",
    subtitle: "Push-to-deploy into the user's own DigitalOcean account — no lock-in, no black boxes.",
    context:
      "Developers want a Heroku/Railway-style push-to-deploy workflow without surrendering infrastructure ownership or scattering deployment state across scripts and cloud dashboards.",
    method:
      "Connect a GitHub repo + DigitalOcean token, receive push webhooks, build Docker images (Dockerfile-first, Nixpacks fallback), push to the user's DOCR, then run Pulumi to provision App Platform apps, managed databases, Spaces, env, domains, logs, and metrics.",
    outcomes: [
      "A git push becomes a live DigitalOcean App Platform URL.",
      "User-owned infrastructure: resources live in the user's own account via an encrypted, AES-256-GCM-stored DO token.",
      "Observable deployment state machine — pending → building → provisioning → deploying → success/failed.",
      "liftoff.yml config-as-code for build, runtime, env, secrets, database, storage, health checks & domains.",
    ],
    stack: [
      "TypeScript", "Next.js 14", "NestJS", "Pulumi", "Docker", "BullMQ",
      "Prisma", "Socket.io", "PostgreSQL", "Redis", "Turborepo", "GitHub Actions",
    ],
    links: [{ label: "GitHub", href: "https://github.com/Liftoff-Launchpad/liftoff" }],
    coord: "31.61° N / 74.39° E",
    elevation: "2,140m",
    schematic: "deploy",
    flagship: true,
  },
  {
    index: "02",
    id: "recallm",
    title: "Recallm",
    kicker: "Semantic Caching",
    subtitle: "Semantic cache for OpenAI-compatible clients — paraphrases hit the cache, not the bill.",
    context:
      "Exact-match caches miss paraphrased prompts, so repetitive intent still triggers full-price LLM calls even when the user's meaning is identical.",
    method:
      "Wrap completion calls once, compute local prompt embeddings with ONNX, then run a cosine-similarity lookup before forwarding misses to the provider. Strict / balanced / loose threshold profiles with context-hash safeguards, TTL, and namespace invalidation.",
    outcomes: [
      "Sub-10ms lookup overhead on CPU.",
      "In-process architecture — no external orchestration layer.",
      "40–70% cost savings potential for repetitive support / FAQ workloads.",
      "Sync + async, Redis & thread-safe in-memory backends, fail-open, Prometheus metrics.",
    ],
    stack: ["Python", "ONNX Runtime", "FastEmbed", "SentenceTransformers", "Redis", "Prometheus", "Grafana"],
    links: [
      { label: "recallm.dev", href: "https://recallm.dev" },
      { label: "GitHub", href: "https://github.com/munimx/recallm" },
    ],
    coord: "31.48° N / 74.32° E",
    elevation: "1,680m",
    schematic: "cache",
  },
  {
    index: "03",
    id: "snag",
    title: "Snag",
    kicker: "Webhook Inspector",
    subtitle: "Open-source webhook inspector with a CLI tunnel, replay, an SDK, and native MCP tooling for agents.",
    context:
      "Debugging webhooks is slow when provider payloads, local handlers, request history, replay steps, and AI-agent context are split across separate tools.",
    method:
      "Permanent token-based capture URLs normalize and persist incoming HTTP requests, broadcast live events over WebSockets, expose a Next.js console, forward traffic through a CLI tunnel, and ship SDK + MCP surfaces so coding agents can drive the whole loop.",
    outcomes: [
      "Real-time web console + searchable request history for captured traffic.",
      "CLI tunnel that forwards captured requests to localhost handlers.",
      "Replay, cURL copy, forwarding rules, retries & delivery logs for reproducible debugging.",
      "Native MCP server — agents create endpoints, wait for requests, inspect, replay & clean up.",
    ],
    stack: [
      "TypeScript", "Next.js 15", "React 19", "Fastify", "WebSockets", "Redis",
      "BullMQ", "Firestore", "Python", "MCP", "Vercel", "Fly.io",
    ],
    links: [
      { label: "Live console", href: "https://snag-web-five.vercel.app" },
      { label: "GitHub", href: "https://github.com/munimx/Snag" },
    ],
    coord: "31.55° N / 74.36° E",
    elevation: "1,420m",
    schematic: "webhook",
  },
];

export const about = {
  paragraphs: [
    "I build AI systems that are genuinely useful — not demos. My work sits at the intersection of machine-learning infrastructure and full-stack engineering, with a particular obsession for making LLMs faster, cheaper, and more reliable in production.",
    "At Endshift I shipped a RAG pipeline handling real traffic — optimizing Mistral-7B inference with semantic caching, cutting latency and cost. On the side I built Recallm, an open-source Python library for LLM semantic caching.",
    "I'm wrapping up my Computer Science degree at UCP in Lahore and actively looking for AI-engineering roles — especially involving LLM evaluation, RLHF, or production-scale inference systems.",
  ],
  facts: [
    { label: "Location", value: "Lahore, PK" },
    { label: "Status", value: "Available" },
    { label: "Focus", value: "RAG · LLM Optimization · Inference" },
    { label: "Email", value: profile.email },
  ],
};

export const experience: ExperienceEntry[] = [
  {
    date: "May 2025 — Oct 2025",
    role: "Machine Learning Engineer",
    org: "Endshift",
    location: "Lahore, Pakistan",
    description:
      "Full-stack AI development across the model and product surface — from inference optimization to enterprise backend.",
    bullets: [
      "Architected a production text-to-SQL RAG pipeline using local LLMs — 500+ queries/day at 98% uptime.",
      "Reduced Mistral-7B inference latency by 65% via advanced batching, 4-bit quantization & optimization.",
      "Implemented vector embeddings & semantic search with ChromaDB; designed evaluation-gated prompt workflows.",
      "Built scalable .NET (C#) backend services with REST APIs and Okta SSO; deployed on AWS EC2 with Docker + Redis.",
    ],
  },
  {
    date: "2022 — Present",
    role: "Open-Source Author",
    org: "Recallm",
    orgUrl: "https://recallm.dev",
    description:
      "Designed and published a Python semantic-cache library for LLMs with embedding-based similarity matching, Redis / in-memory storage, Prometheus metrics, and async support.",
  },
  {
    date: "2022 — July 2026",
    role: "BSc Computer Science",
    org: "University of Central Punjab",
    location: "Lahore",
    description:
      "Final semester. Focus areas: machine learning, deep learning, distributed systems, and software engineering.",
  },
];

export const skills: SkillGroup[] = [
  {
    category: "AI / ML",
    skills: ["PyTorch", "Hugging Face", "LangChain", "LlamaIndex", "FastEmbed + ONNX", "ChromaDB / FAISS", "LoRA / QLoRA"],
  },
  {
    category: "Backend Systems",
    skills: [".NET (C#)", "Node.js / Express", "FastAPI / Flask", "REST + GraphQL", "WebSockets", "PostgreSQL + Redis", "Okta / Auth0 / JWT"],
  },
  {
    category: "Frontend & Apps",
    skills: ["React", "Next.js", "TypeScript", "Electron", "Tailwind CSS", "Jest"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (EC2/S3/Lambda)", "Docker", "Kubernetes", "GitHub Actions", "Prometheus + Grafana", "RabbitMQ / Celery"],
  },
];

export const contactRows: ContactRow[] = [
  { id: "01", label: "Email", value: profile.email, href: `mailto:${profile.email}`, copy: true },
  { id: "02", label: "GitHub", value: profile.githubLabel, href: profile.github },
  { id: "03", label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin },
  { id: "04", label: "Location", value: profile.location, href: "#contact" },
];

export interface NavSection {
  id: string;
  index: string;
  label: string;
}

export const navSections: NavSection[] = [
  { id: "hero", index: "01", label: "Abstract" },
  { id: "work", index: "02", label: "Selected Work" },
  { id: "about", index: "03", label: "About" },
  { id: "experience", index: "04", label: "Traverse" },
  { id: "contact", index: "05", label: "Contact" },
];
