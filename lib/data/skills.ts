export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: 'AI / ML',
    skills: [
      { name: 'PyTorch' },
      { name: 'Hugging Face' },
      { name: 'LangChain' },
      { name: 'LlamaIndex' },
      { name: 'FastEmbed + ONNX' },
      { name: 'ChromaDB / FAISS' },
      { name: 'LoRA / QLoRA' },
    ],
  },
  {
    category: 'Backend Systems',
    skills: [
      { name: '.NET (C#)' },
      { name: 'Node.js / Express' },
      { name: 'FastAPI / Flask' },
      { name: 'REST + GraphQL APIs' },
      { name: 'WebSockets' },
      { name: 'PostgreSQL + Redis' },
      { name: 'Okta / Auth0 / JWT' },
    ],
  },
  {
    category: 'Frontend & Apps',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Electron' },
      { name: 'Tailwind CSS' },
      { name: 'Jest' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'AWS (EC2, S3, Lambda, ECS)' },
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'GitHub Actions' },
      { name: 'Prometheus + Grafana' },
      { name: 'RabbitMQ / Celery' },
    ],
  },
];
