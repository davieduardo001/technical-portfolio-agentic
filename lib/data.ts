export const LINKS = {
  fiverr: "https://fiverr.com/s/yvKPKbb",
  linkedin: "https://www.linkedin.com/in/davi-eduardo-costa",
  github: "https://github.com/davieduardo001",
  whatsapp: "https://wa.me/5561992747373?text=Hello%20Davi!%20I%20saw%20your%20portfolio%20and%20I%27m%20interested%20in%20your%20profile.%20Can%20we%20talk%3F",
  email: "davieduardocosta.miranda@gmail.com",
  cv: "/cv/Davi_Eduardo_CV_EN.pdf",
};

export const BADGES = [
  { label: "AWS Certified", color: "green" },
  { label: "CSPO", color: "blue" },
  { label: "3+ Years GovTech", color: "blue" },
  { label: "1.2M+ Users Served", color: "blue" },
];

export const SKILLS = [
  {
    icon: "☁️",
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Linux", "Azure DevOps"],
  },
  {
    icon: "💻",
    category: "Development",
    items: ["Python", "FastAPI", "Next.js", "PostgreSQL", "REST APIs", "SQL", "Power Automate"],
  },
  {
    icon: "📋",
    category: "Product",
    items: [
      "Backlog Ownership",
      "Roadmap Definition",
      "OKRs",
      "Design Sprints",
      "Lean Inception",
      "Stakeholder Alignment",
      "Function Point Analysis",
    ],
  },
];

export const ACHIEVEMENTS = [
  { value: "1.2M+", label: "Professionals Served", sub: "National registry" },
  { value: "27", label: "Regional Councils Unified", sub: "Confea / Crea network" },
  { value: "25%", label: "Transparency Increase", sub: "BI Dashboards" },
  { value: "40%", label: "Friction Reduction", sub: "Automation" },
];

export const PROJECTS = [
  {
    title: "National Single Registry (RU)",
    client: "Confea / Crea-SP",
    role: "Technical Product Owner",
    stack: ["Azure DevOps", "REST APIs", "CI/CD"],
    description:
      "Unified 27 regional councils into a single national registry — managed full lifecycle from Lean Inception to MVP, with focus on data migration integrity and continuous uptime.",
    tags: ["GovTech", "API", "National Scale", "1.2M+ Users"],
  },
  {
    title: "VOTENET Internal Voting Platform",
    client: "Crea-SP",
    role: "Technical Product Owner",
    stack: ["Azure DevOps", "Agile", "Accessibility"],
    description:
      "Took ownership of a live voting platform and redesigned it for accessibility across all digital literacy levels — roadmap, UX improvements, sprint ceremonies, and delivery cadence.",
    tags: ["GovTech", "Accessibility", "Platform"],
  },
  {
    title: "AI-Assisted Contract Elicitation",
    client: "Hepta Tecnologia (internal)",
    role: "Technical Product Owner + Builder",
    stack: ["AI/LLM", "Python", "Agile"],
    description:
      "Replaced manual contract intake with AI-assisted structured data capture. Extended the same approach into VOTENET with an AI-supported reporting feature for councilors.",
    tags: ["AI", "Automation", "Internal Tools"],
  },
  {
    title: "Integrador Middleware API",
    client: "Crea-SP",
    role: "Technical Product Owner",
    stack: ["REST APIs", "Microservices", "CI/CD"],
    description:
      "Acting PO for a critical interoperability layer connecting Crea-SP's legacy core to third-party services — balancing technical feasibility with near-zero downtime requirements.",
    tags: ["API", "Middleware", "GovTech"],
  },
  {
    title: "Operational Observability Dashboards",
    client: "Crea-SP",
    role: "Technical Product Owner",
    stack: ["BI Dashboards", "Azure DevOps", "SQL"],
    description:
      "Used Design Sprints to map bottlenecks in contract workflows. Delivered automated dashboards replacing manual monitoring — increased transparency by 25%.",
    tags: ["BI", "Automation", "Data"],
  },
  {
    title: "Clinical Health Platform",
    client: "HealthTech Startup (NDA)",
    role: "Technical Product Lead + Engineer",
    stack: ["Next.js 14", "FastAPI", "PostgreSQL", "Fly.io", "Vercel"],
    description:
      "Built a digital health screening platform end-to-end as both PO and engineer — infrastructure, clinical workflow design, AI-assisted scoring, and PDF generation. NDA applies.",
    tags: ["HealthTech", "Full Stack", "AI", "0→1"],
    confidential: true,
  },
];

export const CERTIFICATIONS = {
  primary: [
    { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2024" },
    { name: "CSPO — Certified Scrum Product Owner", issuer: "Scrum Alliance", year: "2025" },
    { name: "CFPP — Certified Function Point Practitioner", issuer: "IFPUG", year: "2026" },
    { name: "DSPC™ — Design Sprint Professional", issuer: "CertiProf", year: "2025" },
    { name: "CLF® — Lean Inception Facilitator", issuer: "Lean Inception", year: "2025" },
    { name: "ISO 9001 — Quality Management", issuer: "SkillFront", year: "2025" },
  ],
  additional: [
    { name: "OKR Fundamentals", issuer: "CertiProf" },
    { name: "Kanban Essentials", issuer: "CertiProf" },
    { name: "Scrum Foundation (SFPC™ · SFC)", issuer: "CertiProf" },
  ],
};

export const SERVICES = [
  {
    title: "Technical PM Consulting",
    description:
      "API strategy, PRDs, roadmaps, backlog structuring. I bridge the gap between engineering and stakeholders so delivery actually happens.",
    cta: "Hire me on Fiverr",
    href: "https://fiverr.com/s/yvKPKbb",
    live: true,
  },
  {
    title: "DevOps & CI/CD Setup",
    description:
      "AWS infrastructure, Docker/Kubernetes deployment, automated CI/CD pipelines. From zero to deployed.",
    cta: "Coming soon",
    href: null,
    live: false,
  },
  {
    title: "Full Stack Development",
    description:
      "FastAPI + Next.js web applications. I own the full lifecycle — from API design to production deployment.",
    cta: "Coming soon",
    href: null,
    live: false,
  },
];
