// Pulled from github.com/iamqasimali (public, non-fork repos).
export interface Repo {
  name: string;
  label: string;
  stack: string;
  description: string;
  url: string;
  stars: number;
  tone: "ink" | "studio" | "mint";
}

export const repos: Repo[] = [
  {
    name: "MCP Servers",
    label: "Open source",
    stack: "JavaScript • MCP • Claude",
    description:
      "A collection of Model Context Protocol servers that let Claude work with your databases, Git repos, APIs, Docker containers and dev tools.",
    url: "https://github.com/iamqasimali/MCP-Servers-for-Full-Stack-Development",
    stars: 6,
    tone: "ink",
  },
  {
    name: "Sales-Agent",
    label: "AI platform",
    stack: "Rails • OpenAI / Gemini • Docker",
    description:
      "Sales automation on Rails and LLMs: lead prioritisation, AI-written follow-ups, customer insights and CRM sync, shipped with Docker and GitHub Actions.",
    url: "https://github.com/iamqasimali/Sales-Agent",
    stars: 5,
    tone: "studio",
  },
  {
    name: "BeaverGuard",
    label: "Security",
    stack: "JavaScript • CLI",
    description:
      "A scanner that detects BeaverTail malware indicators from the Lazarus Group's fake job-interview campaign targeting developers.",
    url: "https://github.com/iamqasimali/beaverguard",
    stars: 2,
    tone: "mint",
  },
];

export const moreRepos = [
  {
    name: "dotclaude",
    stack: "Shell",
    description: "Portable .claude folder that turns Claude Code into a stack-aware teammate.",
    url: "https://github.com/iamqasimali/dotclaude",
  },
  {
    name: "LittleLens",
    stack: "TypeScript • Mobile",
    description: "Ad-free barcode scanner for health, child safety, Halal status and ownership.",
    url: "https://github.com/iamqasimali/little-lens",
  },
  {
    name: "Dev-vault",
    stack: "React • Netlify • MongoDB",
    description: "Securely store developer credentials and resources with serverless functions.",
    url: "https://github.com/iamqasimali/Dev-vault",
  },
];
