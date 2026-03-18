export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export const experienceData: Experience[] = [
  {
    title: 'Machine Learning Engineer (Full-Stack AI Development)',
    company: 'Endshift',
    location: 'Lahore, Pakistan',
    period: 'May 2025 – October 2025',
    description: [
      'Architected a production RAG pipeline for natural-language-to-SQL workflows, serving 500+ queries daily with 98% uptime.',
      'Reduced Mistral-7B inference latency by 65% using batching, 4-bit quantization, and model optimization techniques.',
      'Implemented semantic search with vector embeddings using ChromaDB and prompt evaluation workflows.',
      'Built backend services in .NET (C#), including REST APIs and Okta SSO integration for enterprise authentication.',
      'Deployed ML services on AWS EC2 with Docker and Redis-backed caching/monitoring for performance tracking.',
    ],
    technologies: [
      'Python',
      '.NET (C#)',
      'REST APIs',
      'ChromaDB',
      'AWS EC2',
      'Docker',
      'Redis',
      'Okta SSO',
    ],
  },
];

export const educationData = [
  {
    degree: 'B.Sc. Computer Science',
    institution: 'University of Central Punjab, Lahore',
    period: 'Expected July 2026',
    description:
      'Relevant coursework: Machine Learning, Deep Learning, Data Structures, Algorithms, and Database Systems.',
  },
];
