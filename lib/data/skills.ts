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
    category: 'Frontend',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'JavaScript' },
      { name: 'HTML/CSS' },
      { name: 'Vue.js' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js' },
      { name: 'Python' },
      { name: 'REST APIs' },
      { name: 'WebSocket' },
      { name: 'Express.js' },
    ],
  },
  {
    category: 'AI/ML',
    skills: [
      { name: 'LLMs' },
      { name: 'OpenAI' },
      { name: 'Embeddings' },
      { name: 'Semantic Search' },
      { name: 'RAG Systems' },
    ],
  },
  {
    category: 'Tools & Other',
    skills: [
      { name: 'Git' },
      { name: 'Docker' },
      { name: 'Kafka' },
      { name: 'Electron' },
      { name: 'Chrome Extensions' },
      { name: 'React Native' },
    ],
  },
];
