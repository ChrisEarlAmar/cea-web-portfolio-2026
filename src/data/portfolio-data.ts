import mvpSurveyVideo from '../assets/mvp-survey.mp4'
import batchManagerVideo from '../assets/batch-manager.mp4'
import quizeyVideo from '../assets/quizey.mp4'
import reactIcon from '../assets/react-icon.svg'
import typescriptIcon from '../assets/typescript-icon.svg'
import tailwindIcon from '../assets/tailwind-icon.svg'
import materialuiIcon from '../assets/materialui-icon.svg'
import shadcnIcon from '../assets/shadcn-icon.svg'
import javascriptIcon from '../assets/javascript-icon.svg'
import laravelIcon from '../assets/laravel-icon.svg'
import phpIcon from '../assets/php-icon.svg'
import apiIcon from '../assets/api-icon.svg'
import websocketIcon from '../assets/websocket-icon.svg'
import mysqlIcon from '../assets/mysql-icon.svg'
import oracleIcon from '../assets/oracle-icon.svg'
import gitlabIcon from '../assets/gitlab-icon.svg'
import viteIcon from '../assets/vite-icon.svg'
import resume from '../assets/Chris Earl Amar - Resume.pdf'

export const personalInfo = {
  name: "Chris Earl Amar",
  title: "Fullstack Web Developer",
  tagline: "Building scalable back-office systems and modern web applications",
  location: "Philippines",
  email: "chrisearlamar@gmail.com",
  github: "https://github.com/ChrisEarlAmar",
  linkedin: "https://www.linkedin.com/in/chris-earl-amar-945a7a226/",
  resume: resume,
};

export const experience = [
  {
    id: 1,
    company: "DecoArts Marketing / CitiHardware",
    role: "Fullstack Systems Development Specialist",
    period: "Feb 2024 – Present",
    description: "Developed and maintained enterprise web applications for retail operations across 120+ stores.",
    highlights: [
      "Built accounting report generators integrated with Oracle ERP systems",
      "Developed REST APIs using Laravel and React for internal tools",
      "Maintained and enhanced survey tool used by 120+ stores nationwide",
      "Implemented PDF export functionality, real-time updates via WebSockets, access control, and advanced filtering",
    ],
    technologies: ["Laravel", "React", "Oracle SQL", "MySQL", "WebSockets", "REST APIs"],
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
    video: mvpSurveyVideo,
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
    video: batchManagerVideo,
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
    video: quizeyVideo,
    demo: null,
    image: null,
  },
];

export const skills = {
  frontend: [
    { name: "React", level: "Advanced", icon: reactIcon },
    { name: "TypeScript", level: "Advanced", icon: typescriptIcon },
    { name: "Tailwind CSS", level: "Advanced", icon: tailwindIcon },
    { name: "Material UI", level: "Advanced", icon: materialuiIcon },
    { name: "Shadcn/ui", level: "Intermediate", icon: shadcnIcon },
    { name: "JavaScript", level: "Advanced", icon: javascriptIcon },
  ],
  backend: [
    { name: "Laravel", level: "Advanced", icon: laravelIcon },
    { name: "PHP", level: "Advanced", icon: phpIcon },
    { name: "REST APIs", level: "Advanced", icon: apiIcon },
    { name: "WebSockets", level: "Intermediate", icon: websocketIcon },
  ],
  database: [
    { name: "MySQL", level: "Advanced", icon: mysqlIcon },
    { name: "Oracle", level: "Intermediate", icon: oracleIcon },
  ],
  tools: [
    { name: "GitLab", level: "Advanced", icon: gitlabIcon },
    { name: "Vite", level: "Advanced", icon: viteIcon },
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
