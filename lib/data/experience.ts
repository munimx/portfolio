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
    title: 'Full Stack Developer',
    company: 'Freelance',
    location: 'Remote',
    period: '2022 - Present',
    description: [
      'Developed AI-powered applications including semantic caching systems for LLMs and cross-platform PDF assistants',
      'Built real-time systems using Kafka, WebSocket, and modern web technologies',
      'Created Chrome extensions and automation tools for enhanced productivity',
      'Implemented responsive web applications with React, Next.js, and TypeScript',
    ],
    technologies: ['React', 'Next.js', 'Python', 'TypeScript', 'Node.js', 'AI/ML'],
  },
];

export const educationData = [
  {
    degree: 'Computer Science',
    institution: 'University',
    period: '2019 - 2023',
    description: 'Focus on Software Engineering, AI/ML, and Web Development',
  },
];
