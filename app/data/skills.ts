export interface Skill {
  id: string;
  icon: string;
  title: string;
  level: number;
  years: string;

  description: string;

  technologies: string[];
  projects: string[];
  achievements: string[];
}

export const skills: Skill[] = [
  {
    id: "frontend",
    icon: "⚛️",
    title: "Frontend Engineering",
    level: 95,
    years: "7+ Years",

    description:
      "Building scalable user experiences for enterprise products and millions of users.",

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "React Native",
      "Angular",
    ],

    projects: [
      "QuickBooks Advanced",
      "Intuit Enterprise Suite",
      "Analytics Dashboard",
      "Linking Tool",
    ],

    achievements: [
      "Reusable Component Systems",
      "Accessibility",
      "Performance Optimization",
      "Enterprise UI Architecture",
    ],
  },

  {
    id: "architecture",
    icon: "🏗️",
    title: "Architecture",
    level: 92,
    years: "5+ Years",

    description:
      "Designing scalable frontend platforms, integrations and reusable systems.",

    technologies: [
      "Module Federation",
      "Micro Frontends",
      "GraphQL",
      "Design Systems",
    ],

    projects: [
      "Multi Entity Platform",
      "Smart Setup",
      "Linking Tool 2.0",
    ],

    achievements: [
      "Platform Design",
      "Scalable Systems",
      "Technical Leadership",
      "System Design",
    ],
  },

  {
    id: "observability",
    icon: "📊",
    title: "Observability",
    level: 90,
    years: "4+ Years",

    description:
      "Tracking user behavior and measuring product impact through analytics.",

    technologies: [
      "Amplitude",
      "Splunk",
      "Monitoring",
      "Feature Flags",
    ],

    projects: [
      "Advanced Upgrader",
      "Auto Educational Tasks",
      "Performance Center",
    ],

    achievements: [
      "572k API Calls Tracked",
      "80% Support Reduction",
      "Dashboards",
      "Monitoring",
    ],
  },

  {
    id: "leadership",
    icon: "👑",
    title: "Leadership",
    level: 88,
    years: "5+ Years",

    description:
      "Driving engineering excellence through mentoring and collaboration.",

    technologies: [
      "Mentoring",
      "Reviews",
      "Architecture",
      "Communication",
    ],

    projects: [
      "Onboarding",
      "Cross Team Initiatives",
    ],

    achievements: [
      "Code Reviews",
      "Mentoring",
      "Technical Guidance",
      "Cross Functional Leadership",
    ],
  },

  {
    id: "ai",
    icon: "🤖",
    title: "AI Engineering",
    level: 82,
    years: "2+ Years",

    description:
      "Building AI-powered products and experimenting with LLMs and agents.",

    technologies: [
      "OpenAI",
      "Prompt Engineering",
      "Agents",
      "GenAI",
    ],

    projects: [
      "Parent AI Agent",
      "AI Dashboard Summary",
      "Prompt Engineering",
    ],

    achievements: [
      "GPT Integrations",
      "Agent Workflows",
      "AI UX",
      "Automation",
    ],
  },
];