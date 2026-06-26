export type Project = {
  slug: string;
  title: string;
  icon: string;

  rarity: string;
  status: string;

  description: string;
  longDescription: string;

  stack: string[];
  features: string[];
  lessons: string[];

  github?: string;
  website?: string;

  coverImage?: string;
  screenshots?: string[];
};

export const projects: Project[] = [
  {
    slug: "parent-ai-agent",

    title: "Parent AI Agent",

    icon: "🤖",

    rarity: "Legendary",

    status: "In Progress",

    description:
      "AI-powered parenting assistant for vaccine tracking, reminders and insights.",

    longDescription:
      "A React Native application that helps parents manage vaccination schedules, reminders, inventory management, child milestones and AI-powered parenting guidance using OpenAI.",

    stack: [
      "React Native",
      "Expo",
      "Supabase",
      "GraphQL",
      "Apollo Client",
      "OpenAI",
      "TypeScript",
    ],

    features: [
      "Child Profiles",
      "Vaccination Tracking",
      "AI Assistant",
      "Inventory Tracking",
      "OCR Vaccine Chart Upload",
      "Notifications",
    ],

    lessons: [
      "GraphQL Architecture",
      "Mobile Performance",
      "Prompt Engineering",
      "Supabase Storage",
      "OpenAI Vision",
    ],

    github: "https://github.com/SIMRAN88",

    website: "#",
  },

  {
    slug: "interview-copilot",

    title: "Interview Copilot",

    icon: "🎯",

    rarity: "Epic",

    status: "Completed",

    description:
      "AI interview assistant that helps engineers prepare for frontend and AI interviews.",

    longDescription:
      "An AI-powered interview preparation platform that generates interview questions, evaluates answers, provides feedback and helps engineers improve communication and technical problem solving.",

    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "OpenAI",
      "Tailwind CSS",
    ],

    features: [
      "Mock Interviews",
      "AI Feedback",
      "Behavioral Questions",
      "Coding Guidance",
      "Progress Tracking",
    ],

    lessons: [
      "Prompt Engineering",
      "Streaming Responses",
      "Conversation Design",
      "LLM UX",
    ],

    github: "https://github.com/SIMRAN88",

    website: "#",
  },

  {
    slug: "humanizer-ai",

    title: "Humanizer AI",

    icon: "✍️",

    rarity: "Rare",

    status: "Completed",

    description:
      "Transforms AI-generated content into natural, human-like writing.",

    longDescription:
      "A web application that rewrites AI-generated text into natural, engaging and human-like content with multiple writing tones while preserving the original meaning.",

    stack: [
      "Next.js",
      "TypeScript",
      "OpenAI",
      "Tailwind CSS",
      "Prompt Engineering",
    ],

    features: [
      "Text Humanization",
      "Multiple Writing Styles",
      "Tone Selection",
      "Copy & Export",
      "Real-time Generation",
    ],

    lessons: [
      "Advanced Prompt Engineering",
      "LLM Output Evaluation",
      "UI Performance",
      "AI UX",
    ],

    github: "https://github.com/SIMRAN88",

    website: "#",
  },

  {
    slug: "coviassist",

    title: "CoviAssist",

    icon: "💉",

    rarity: "Epic",

    status: "Completed",

    description:
      "COVID-19 vaccination assistant for registration, tracking and certificate management.",

    longDescription:
      "A healthcare-focused application that simplified vaccination scheduling, appointment management and vaccination status tracking while providing a smooth user experience.",

    stack: [
      "React",
      "JavaScript",
      "REST APIs",
      "Material UI",
    ],

    features: [
      "Vaccination Registration",
      "Appointment Tracking",
      "Certificate Status",
      "Dashboard",
      "Responsive UI",
    ],

    lessons: [
      "Healthcare Workflows",
      "API Integration",
      "Large Scale UI",
    ],

    github: "https://github.com/SIMRAN88",

    website: "#",
  },

  {
    slug: "connect-four",

    title: "Connect Four",

    icon: "🎮",

    rarity: "Rare",

    status: "Completed",

    description:
      "Classic Connect Four game built with modern frontend technologies.",

    longDescription:
      "A browser-based implementation of Connect Four featuring smooth animations, game state management, winner detection and a responsive UI.",

    stack: [
      "React",
      "TypeScript",
      "CSS",
    ],

    features: [
      "Two Player Mode",
      "Winner Detection",
      "Responsive Layout",
      "Animated Gameplay",
      "Restart Game",
    ],

    lessons: [
      "Game Logic",
      "State Management",
      "Component Design",
    ],

    github: "https://github.com/SIMRAN88",

    website: "#",
  },
];