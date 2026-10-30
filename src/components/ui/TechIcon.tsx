import {
  siJekyll,
  siGithubpages,
  siClaude,
  siCloudflare,
  siCss,
  siDigitalocean,
  siDocker,
  siElasticsearch,
  siExpress,
  siFastapi,
  siFramer,
  siGithubactions,
  siGooglegemini,
  siGraphql,
  siHotwire,
  siHtml5,
  siJavascript,
  siJest,
  siLangchain,
  siModelcontextprotocol,
  siMongodb,
  siMysql,
  siNetlify,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siRedis,
  siRuby,
  siRubyonrails,
  siShadcnui,
  siSidekiq,
  siSocketdotio,
  siStripe,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVite,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";

// Tech name -> simple-icons export. Names not listed (or not in simple-icons) get a letter badge.
const iconMap: Record<string, SimpleIcon> = {
  "Ruby on Rails": siRubyonrails,
  Rails: siRubyonrails,
  React: siReact,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  Ruby: siRuby,
  Python: siPython,
  HTML5: siHtml5,
  CSS: siCss,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  "Node.js": siNodedotjs,
  "Next.js": siNextdotjs,
  "Tailwind CSS": siTailwindcss,
  Tailwind: siTailwindcss,
  Express: siExpress,
  FastAPI: siFastapi,
  GraphQL: siGraphql,
  MongoDB: siMongodb,
  Redis: siRedis,
  ElasticSearch: siElasticsearch,
  Sidekiq: siSidekiq,
  Vite: siVite,
  Hotwire: siHotwire,
  "Framer Motion": siFramer,
  "shadcn/ui": siShadcnui,
  Claude: siClaude,
  Gemini: siGooglegemini,
  LangChain: siLangchain,
  "MCP servers": siModelcontextprotocol,
  MCP: siModelcontextprotocol,
  Docker: siDocker,
  Netlify: siNetlify,
  DigitalOcean: siDigitalocean,
  "GitHub Actions": siGithubactions,
  Jest: siJest,
  Stripe: siStripe,
  WebSockets: siSocketdotio,
  Vercel: siVercel,
  Cloudflare: siCloudflare,
  Jekyll: siJekyll,
  "GitHub Pages": siGithubpages,
};

// Brand colours that are near-black render as ink so they work on light backgrounds.
const colorFor = (hex: string) => {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 40 ? "currentColor" : `#${hex}`;
};

// Badge colours for tools simple-icons doesn't carry.
const badgeColors: Record<string, string> = {
  AWS: "#FF9900",
  Heroku: "#430098",
  RSpec: "#CC342D",
  Twilio: "#F22F46",
  SendGrid: "#1A82E2",
  Kamal: "#0F1012",
  OpenAI: "#0F1012",
  Pinecone: "#0F1012",
  RAG: "#6CD5CB",
};

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

const TechIcon = ({ name, size = 18, className = "" }: TechIconProps) => {
  const icon = iconMap[name];

  if (!icon) {
    return (
      <span
        aria-hidden="true"
        style={{ width: size, height: size, fontSize: size * 0.55, background: badgeColors[name] ?? "#0F1012" }}
        className={`grid shrink-0 place-items-center rounded-[4px] font-semibold text-white ${className}`}
      >
        {name.charAt(0).toUpperCase()}
      </span>
    );
  }

  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={colorFor(icon.hex)}
      className={`shrink-0 ${className}`}
    >
      <path d={icon.path} />
    </svg>
  );
};

export default TechIcon;
