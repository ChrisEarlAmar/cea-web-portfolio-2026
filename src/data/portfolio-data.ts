export const personalInfo = {
  name: "Chris Earl Amar",
  title: "Fullstack Web Developer",
  tagline: "Building scalable back-office systems and modern web applications",
  location: "Philippines",
  email: "chrisearl.amar@example.com",
  github: "https://github.com/ChrisEarlAmar",
  linkedin: "https://www.linkedin.com/in/chris-earl-amar-945a7a226/",
  resume: "/assets/pdf/CEA-CV.pdf",
};

export const experience = [
  {
    id: 1,
    company: "DecoArts Marketing / CitiHardware",
    role: "Fullstack Web Developer",
    period: "Feb 2024 – Present",
    description: "Developed and maintained enterprise web applications for retail operations across 120+ stores.",
    highlights: [
      "Built accounting report generators integrated with Oracle ERP systems",
      "Developed REST APIs using Laravel and React for internal tools",
      "Maintained and enhanced survey tool used by 120+ stores nationwide",
      "Implemented PDF export functionality, real-time updates via WebSockets, access control, and advanced filtering",
    ],
    technologies: ["Laravel", "React", "Oracle", "MySQL", "WebSockets", "REST APIs"],
  },
];

export const projects = [
  {
    id: 1,
    title: "MVP Survey Tool",
    description: "A real-time survey management system deployed across 120+ retail locations. Features include live data synchronization, role-based access control, and external system integration.",
    technologies: ["Laravel", "React", "WebSockets", "Material UI", "MySQL"],
    highlights: ["Real-time updates", "Multi-store deployment", "External system integration"],
    github: "https://github.com/ChrisEarlAmar/cea-mvp-survey",
    video: "/sample-video.mp4",
    demo: null,
    image: null,
  },
  {
    id: 2,
    title: "Batch Manager",
    description: "A Python-based desktop utility for managing batch scripts and streamlining development workflows. Improves developer productivity by automating repetitive tasks.",
    technologies: ["Python", "Desktop Application", "Automation"],
    highlights: ["Script management", "Dev workflow automation", "Cross-platform"],
    github: "https://github.com/ChrisEarlAmar/cea-batch-manager",
    video: "/sample-video-2.mp4",
    demo: null,
    image: null,
  },
  {
    id: 3,
    title: "Quizey",
    description: "A web application that allows users to generate quizzes and share them with others. No authentication required - data is stored locally using IndexedDB. Quizzes can be shared using a custom .qzy file format.",
    technologies: ["React", "Vite", "Tailwind CSS", "Shadcn/ui", "Dexie.js", "IndexedDB"],
    highlights: ["Offline-first architecture", "Custom file format (.qzy)", "No cloud storage needed"],
    github: "https://github.com/ChrisEarlAmar/cea-quizey",
    video: "/sample-video-3.mp4",
    demo: null,
    image: null,
  },
];

export const skills = {
  frontend: [
    { name: "React", level: "Advanced", icon: "/react-icon.svg" },
    { name: "TypeScript", level: "Advanced", icon: "/typescript-icon.svg" },
    { name: "Tailwind CSS", level: "Advanced", icon: "/tailwind-icon.svg" },
    { name: "Material UI", level: "Advanced", icon: "/materialui-icon.svg" },
    { name: "Shadcn/ui", level: "Intermediate", icon: "/shadcn-icon.svg" },
    { name: "JavaScript", level: "Advanced", icon: "/javascript-icon.svg" },
  ],
  backend: [
    { name: "Laravel", level: "Advanced", icon: "/laravel-icon.svg" },
    { name: "PHP", level: "Advanced", icon: "/php-icon.svg" },
    { name: "REST APIs", level: "Advanced", icon: "/api-icon.svg" },
    { name: "WebSockets", level: "Intermediate", icon: "/websocket-icon.svg" },
  ],
  database: [
    { name: "MySQL", level: "Advanced", icon: "/mysql-icon.svg" },
    { name: "Oracle", level: "Intermediate", icon: "/oracle-icon.svg" },
  ],
  tools: [
    { name: "GitLab", level: "Advanced", icon: "/gitlab-icon.svg" },
    { name: "Vite", level: "Advanced", icon: "/vite-icon.svg" },
  ],
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];
