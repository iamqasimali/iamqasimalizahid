export interface Skill {
  name: string;
  level: number;
  years: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend Development",
    icon: "Server",
    color: "blue",
    skills: [
      { name: "Ruby on Rails", level: 95, years: 7 },
      { name: "Python/FastAPI", level: 80, years: 3 },
      { name: "Node.js/Express", level: 80, years: 3 },
      { name: "REST APIs", level: 95, years: 7 },
      { name: "GraphQL", level: 75, years: 2 },
    ],
  },
  {
    title: "Frontend Development",
    icon: "Layout",
    color: "purple",
    skills: [
      { name: "React.js", level: 90, years: 4 },
      { name: "Next.js", level: 80, years: 2 },
      { name: "TypeScript", level: 85, years: 3 },
      { name: "Tailwind CSS", level: 90, years: 3 },
      { name: "Vite", level: 85, years: 2 },
    ],
  },
  {
    title: "AI & Emerging Tech",
    icon: "Sparkles",
    color: "cyan",
    skills: [
      { name: "OpenAI/GPT APIs", level: 85, years: 2 },
      { name: "LangChain", level: 75, years: 1 },
      { name: "RAG Applications", level: 75, years: 1 },
      { name: "Claude/Anthropic", level: 80, years: 1 },
      { name: "AI Integration", level: 85, years: 2 },
    ],
  },
  {
    title: "Databases",
    icon: "Database",
    color: "green",
    skills: [
      { name: "PostgreSQL", level: 90, years: 7 },
      { name: "MongoDB", level: 80, years: 3 },
      { name: "Redis", level: 85, years: 4 },
      { name: "Pinecone/Vector DBs", level: 70, years: 1 },
      { name: "ElasticSearch", level: 75, years: 2 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "Cloud",
    color: "orange",
    skills: [
      { name: "AWS (EC2, S3, Lambda)", level: 85, years: 5 },
      { name: "Docker/Kubernetes", level: 80, years: 3 },
      { name: "CI/CD Pipelines", level: 80, years: 4 },
      { name: "Vercel/Netlify", level: 90, years: 4 },
      { name: "GitHub Actions", level: 85, years: 3 },
    ],
  },
  {
    title: "Tools & Testing",
    icon: "Wrench",
    color: "pink",
    skills: [
      { name: "Git/GitHub", level: 95, years: 7 },
      { name: "RSpec/Jest", level: 90, years: 5 },
      { name: "Sidekiq/BullMQ", level: 85, years: 5 },
      { name: "Stripe/Payments", level: 85, years: 4 },
      { name: "WebSockets", level: 80, years: 3 },
    ],
  },
];

export const techStack = [
  // Languages
  "Ruby",
  "Python",
  "JavaScript",
  "TypeScript",
  // Frameworks
  "Ruby on Rails",
  "React",
  "Next.js",
  "Node.js",
  "FastAPI",
  // AI & ML
  "OpenAI API",
  "LangChain",
  "Claude API",
  "RAG",
  "Vector DBs",
  // Databases
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Pinecone",
  "ElasticSearch",
  // Cloud & DevOps
  "AWS",
  "Docker",
  "Kubernetes",
  "Vercel",
  "GitHub Actions",
  // Tools
  "Git",
  "Sidekiq",
  "RSpec",
  "Jest",
  "Stripe",
  "WebSockets",
];
