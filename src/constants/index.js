// index.js
import { FaGithub, FaLinkedin } from "react-icons/fa6";
export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },
  {
    title: "DevOps & Cloud Solutions",
    description:
      "Deploying software shouldn't be a gamble. I automate infrastructure, enforce security, and leverage cloud platforms (AWS/Azure) to keep your app running smoothly—24/7, at any scale.",
    items: [
      {
        title: "CI/CD Pipelines",
        description: "(GitHub Actions, Docker, Kubernetes)",
      },
      {
        title: "Server Management ",
        description: "(Linux, Nginx, Load Balancing)",
      },
      {
        title: "Performance Tuning",
        description: "(Caching, Compression, Lighthouse 90+ Scores)",
      },
    ],
  },
  {
    title: "Security & Optimization",
    description:
      "Slow or hacked apps destroy trust. I harden security (XSS/SQLI protection, OAuth) and optimize bottlenecks so your app stays fast, safe, and scalable as you grow.",
    items: [
      {
        title: "Code Audits",
        description: "(Refactoring, Tech Debt Cleanup)",
      },
      {
        title: "Pen Testing",
        description: "(Vulnerability Assessments)",
      },
      {
        title: "SEO Tech Stack",
        description: "(SSR, Metadata, Structured Data)",
      },
    ],
  },
  {
    title: "Web & Mobile Apps",
    description:
      "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web and mobile apps (React Native/Flutter) that users love—bridging design and functionality seamlessly.",
    items: [
      {
        title: "Cross-Platform Apps",
        description: "(Single codebase for iOS/Android/Web)",
      },
      {
        title: "PWAs",
        description: "(Offline mode, Push Notifications)",
      },
      {
        title: "E-Commerce",
        description: "(Checkout flows, Payment Gateways, Inventory APIs)",
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "Invoice Generator",
    description:
      "A simple yet powerful full-stack web app to create and manage invoices effortlessly. Users can add client details, calculate totals instantly, and generate polished PDF invoices.",
    href: "",
    image: "/assets/projects/invoice-generator.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "JavaScript" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "PostgreSQL" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "Resume Bulilder",
    description:
      "A modern web app to craft, customize, and download professional resumes in seconds. Designed with a clean UI and real-time editing for a seamless user experience",
    href: "https://resumebuildertrailtaskmariselavm.netlify.app/",
    image: "/assets/projects/resume-builder.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Next.js 15" },
      { id: 2, name: "React 19" },
      { id: 3, name: "TypeScript" },
      { id: 4, name: "Tailwind CSS" },
      { id: 5, name: "Zustand" },
      { id: 6, name: "jsPDF" },
    ],
  },
  {
    id: 3,
    name: "ZIDIO Connect",
    description:
      "A job and internship management platform that bridges students and employers. Built with a robust Java backend to handle listings, applications, and user authentication securely.",
    href: "",
    image: "/assets/projects/zidio-connect.jpg",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Java" },
      { id: 2, name: "Spring Boot" },
      { id: 3, name: "MySQL" },
      { id: 4, name: "REST API" },
    ],
  },
];
export const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mariselvam-a-/",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/mariselvam-arumuganainar",
    icon: FaGithub,
  },
];
