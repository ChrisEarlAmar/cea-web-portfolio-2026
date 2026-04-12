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
    github: null,
    demo: null,
    image: null,
  },
  {
    id: 2,
    title: "Batch Manager",
    description: "A Python-based desktop utility for managing batch scripts and streamlining development workflows. Improves developer productivity by automating repetitive tasks.",
    technologies: ["Python", "Desktop Application", "Automation"],
    highlights: ["Script management", "Dev workflow automation", "Cross-platform"],
    github: null,
    demo: null,
    image: null,
  },
  {
    id: 3,
    title: "Accounting Report Generator",
    description: "Oracle ERP-integrated reporting system for financial data processing and automated report generation.",
    technologies: ["Laravel", "Oracle ERP", "PDF Generation", "MySQL"],
    highlights: ["ERP integration", "Automated reporting", "PDF exports"],
    github: null,
    demo: null,
    image: null,
  },
];

export const skills = {
  frontend: [
    { name: "React", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "Material UI", level: "Advanced" },
    { name: "Shadcn/ui", level: "Intermediate" },
    { name: "JavaScript", level: "Advanced" },
  ],
  backend: [
    { name: "Laravel", level: "Advanced" },
    { name: "PHP", level: "Advanced" },
    { name: "REST APIs", level: "Advanced" },
    { name: "WebSockets", level: "Intermediate" },
  ],
  database: [
    { name: "MySQL", level: "Advanced" },
    { name: "Oracle", level: "Intermediate" },
  ],
  tools: [
    { name: "GitLab", level: "Advanced" },
    { name: "Vite", level: "Advanced" },
    // { name: "Figma", level: "Intermediate" },
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
