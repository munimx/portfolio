export interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'AI/ML' | 'Web App' | 'Tool' | 'Real-time';
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    title: 'Recallm',
    description:
      'Open-source Python semantic cache library for OpenAI-compatible chat calls with local embedding search.',
    longDescription:
      'Published Python package that wraps chat completion calls with in-process semantic caching. Includes strict/balanced/loose threshold profiles, namespace invalidation, sync/async support, and Redis or thread-safe in-memory backends.',
    technologies: [
      'Python',
      'ONNX Runtime',
      'FastEmbed',
      'SentenceTransformers',
      'Redis',
      'Prometheus',
      'Grafana',
    ],
    githubUrl: 'https://github.com/munimx/recallm',
    liveUrl: 'https://recallm.dev',
    category: 'AI/ML',
    featured: true,
  },
  {
    title: 'DocuChat',
    description:
      'Cross-platform desktop app for asking questions over PDFs using a retrieval-augmented chat workflow.',
    longDescription:
      'Desktop application built with Electron + React for PDF Q&A. Implements a retrieval pipeline with vector search, source citation, secure API key handling, and support for multiple model providers.',
    technologies: ['Electron', 'React', 'TypeScript', 'Node.js', 'LangChain', 'ChromaDB', 'SQLite'],
    githubUrl: 'https://github.com/munimx/DocuChat',
    category: 'AI/ML',
    featured: true,
  },
  {
    title: 'LLM Fine-Tuning & Deployment Pipeline',
    description:
      'Experimental fine-tuning pipeline for Llama 2 with LoRA/QLoRA and an evaluation workflow.',
    longDescription:
      'Built an end-to-end experimentation setup for fine-tuning and evaluating LLMs using LoRA/QLoRA with metrics tracking and deployment packaging.',
    technologies: ['PyTorch', 'Hugging Face', 'PEFT', 'MLflow', 'TorchServe'],
    githubUrl: 'https://github.com/munimx',
    category: 'AI/ML',
    featured: true,
  },
  {
    title: 'Real-time Webpage Screenshot Streaming',
    description:
      'Kafka-based demo that streams chart screenshots captured from a browser extension in near real time.',
    longDescription:
      'Demonstrates real-time event streaming by capturing screenshots through a Chrome extension and processing image events in a Kafka pipeline.',
    technologies: ['JavaScript', 'Kafka', 'Chrome Extension', 'Python', 'Docker'],
    githubUrl: 'https://github.com/munimx/Real-time-Webpage-Screenshot-Streaming-System',
    category: 'Real-time',
    featured: true,
  },
  {
    title: 'Folio',
    description: 'Offline-capable task app with optional push notifications and a performance-first PWA setup.',
    longDescription:
      'Progressive web app focused on reliability and fast interaction, including offline support and optional push notifications.',
    technologies: ['TypeScript', 'PWA', 'Service Workers', 'Web Push', 'CSS'],
    githubUrl: 'https://github.com/munimx/Folio',
    category: 'Web App',
    featured: false,
  },
  {
    title: 'JSON to Use Case Diagram',
    description:
      'Utility tool that converts JSON use case data into formatted HTML tables suitable for documentation workflows.',
    longDescription:
      'Supports single and batch objects with automatic table generation and clipboard-friendly output for report writing.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/munimx/JSON-to-UseCase-Diagram',
    liveUrl: 'https://json-to-usecase.netlify.app/',
    category: 'Tool',
    featured: false,
  },
  {
    title: 'Road Accident Hotspot Detection',
    description: 'ML prototype for identifying accident-prone zones with clustering-based analysis.',
    longDescription:
      'Explores K-Means clustering on road accident datasets to detect high-risk zones and support safety planning discussions.',
    technologies: ['Python', 'Machine Learning', 'K-Means', 'Data Analysis'],
    githubUrl: 'https://github.com/munimx/Road-Accident-Hotspot-Detection',
    category: 'AI/ML',
    featured: false,
  },
];

export const categories = ['All', 'AI/ML', 'Web App', 'Tool', 'Real-time'] as const;
