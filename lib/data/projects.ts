export interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'AI/ML' | 'Web App' | 'Tool' | 'Real-time' | 'Mobile';
  featured: boolean;
  stars?: number;
}

export const projectsData: Project[] = [
  {
    title: 'ReCallM',
    description: 'Semantic cache layer for LLM APIs — embed prompts locally, find near-matches, skip redundant LLM calls.',
    longDescription: 'A Python-based semantic caching system that reduces LLM API costs by embedding prompts locally and finding near-matches to skip redundant calls. Uses embeddings and vector similarity for intelligent caching.',
    technologies: ['Python', 'OpenAI', 'Embeddings', 'Semantic Search', 'LLMs'],
    githubUrl: 'https://github.com/munimx/recallm',
    category: 'AI/ML',
    featured: true,
    stars: 1,
  },
  {
    title: 'DocuChat',
    description: 'Cross-Platform AI PDF Assistant - Chat with your PDF documents using AI',
    longDescription: 'An Electron-based cross-platform application that allows users to interact with PDF documents using AI. Built with TypeScript for seamless desktop experience.',
    technologies: ['TypeScript', 'Electron', 'AI', 'PDF Processing', 'React'],
    githubUrl: 'https://github.com/munimx/DocuChat',
    category: 'AI/ML',
    featured: true,
    stars: 1,
  },
  {
    title: 'Folio',
    description: 'A beautiful, fast, offline-capable todo app with optional push notifications.',
    longDescription: 'Progressive Web App (PWA) todo application with offline capabilities, push notifications, and a clean, modern interface. Built with TypeScript and optimized for performance.',
    technologies: ['TypeScript', 'PWA', 'Service Workers', 'Push Notifications', 'CSS'],
    githubUrl: 'https://github.com/munimx/Folio',
    category: 'Web App',
    featured: true,
  },
  {
    title: 'Real-time Webpage Screenshot Streaming',
    description: 'Demo for Kafka by streaming screenshots of trading-view chart through a chrome extension',
    longDescription: 'A real-time system that streams webpage screenshots using Kafka. Built as a demonstration of event streaming architecture with a Chrome extension frontend.',
    technologies: ['JavaScript', 'Kafka', 'Chrome Extension', 'Python', 'Docker'],
    githubUrl: 'https://github.com/munimx/Real-time-Webpage-Screenshot-Streaming-System',
    category: 'Real-time',
    featured: true,
    stars: 1,
  },
  {
    title: 'JSON to UseCase Diagram',
    description: 'Web app to convert JSON use case data into formatted, Word-compatible HTML tables.',
    longDescription: 'A utility web app that converts JSON use case data into formatted HTML tables compatible with Word. Supports single or multiple objects with automatic table generation and clipboard copy.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/munimx/JSON-to-UseCase-Diagram',
    liveUrl: 'https://json-to-usecase.netlify.app/',
    category: 'Tool',
    featured: false,
    stars: 1,
  },
  {
    title: 'Campus Companion',
    description: 'Campus Companion app (made with the help of replit)',
    longDescription: 'A comprehensive campus management application built with TypeScript, providing tools and features for students and faculty.',
    technologies: ['TypeScript', 'React', 'CSS'],
    githubUrl: 'https://github.com/munimx/Campus-Companion',
    category: 'Web App',
    featured: false,
  },
  {
    title: 'Road Accident Hotspot Detection',
    description: 'Identify dangerous accident areas using clustering (K-Means).',
    longDescription: 'Machine learning project that identifies dangerous accident-prone areas using K-Means clustering algorithm. Helps in road safety analysis and planning.',
    technologies: ['Python', 'Machine Learning', 'K-Means', 'Data Analysis'],
    githubUrl: 'https://github.com/munimx/Road-Accident-Hotspot-Detection',
    category: 'AI/ML',
    featured: false,
  },
  {
    title: 'Splitwise CSV Uploader',
    description: 'Upload expenses to Splitwise from a CSV file.',
    longDescription: 'Python utility to batch upload expenses to Splitwise from CSV files, streamlining expense tracking and group payment management.',
    technologies: ['Python', 'API Integration', 'CSV'],
    githubUrl: 'https://github.com/munimx/splitwise-csv',
    category: 'Tool',
    featured: false,
  },
];

export const categories = ['All', 'AI/ML', 'Web App', 'Tool', 'Real-time', 'Mobile'] as const;
