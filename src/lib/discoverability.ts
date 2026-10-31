import seo from "../data/seo.json";
import {
  aboutHeadline,
  aboutParagraphs,
  experiences,
  faqs,
  mainSkills,
  moreRepos,
  profile,
  projects,
  repos,
  services,
  skillGroups,
  spokenLanguages,
  stats,
} from "../data";

export const siteUrl = seo.siteUrl.replace(/\/$/, "");

const INDEX_ROBOTS = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
const NOINDEX_ROBOTS = "noindex, follow";

export type PageMeta = {
  title: string;
  description: string;
  ogType: "website" | "profile" | "article";
  robots: string;
  markdownPath: string | null;
};

type LinkItem = { href: string; label: string; note?: string };
type Node =
  | { h: 1 | 2 | 3; text: string; id?: string }
  | { p: string }
  | { ul: string[] }
  | { links: LinkItem[] };

const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;

export const abs = (path: string) => {
  if (/^(https?:|mailto:|tel:)/i.test(path)) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalized === "/" ? "/" : normalized}`;
};

export const projectPath = (id: string) => `/projects/${id}`;

export const markdownPathFor = (path: string) => (path === "/" ? "/index.md" : `${path}.md`);

const projectFromPath = (path: string) => {
  const id = /^\/projects\/([a-z0-9-]+)$/.exec(path)?.[1];
  return id ? projects.find((project) => project.id === id) : undefined;
};

export const indexablePaths = () => ["/", "/projects", "/about", ...projects.map((project) => projectPath(project.id))];

const isIndexable = (path: string) => indexablePaths().includes(path);

const clip = (text: string, max = 160) => {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 80 ? lastSpace : cut.length).trimEnd()}…`;
};

const esc = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const liveProjects = () => projects.filter((project) => project.images?.length);
const otherProjects = () => projects.filter((project) => !project.images?.length);

const educationLine = `${profile.education.degree}, ${profile.education.institution} (${profile.education.duration}).`;

const contactLinks = (): LinkItem[] => [
  { href: `mailto:${profile.email}`, label: profile.email, note: "Email" },
  { href: `tel:${profile.phone}`, label: profile.phone, note: "Phone" },
  { href: profile.whatsapp, label: "WhatsApp" },
  { href: profile.github, label: "GitHub" },
  { href: profile.linkedin, label: "LinkedIn" },
  { href: profile.twitter, label: "X" },
  { href: "/resume.pdf", label: "Resume (PDF)" },
];

const projectLinks = (items: typeof projects): LinkItem[] =>
  items.map((project) => ({
    href: projectPath(project.id),
    label: project.name,
    note: project.url ? `${project.tagline}. Live site: ${project.url}` : project.tagline,
  }));

const repoLinks = (): LinkItem[] =>
  [...repos, ...moreRepos].map((repo) => ({
    href: repo.url,
    label: repo.name,
    note: repo.description,
  }));

export const metaFor = (path: string): PageMeta => {
  if (path === "/" || path === "/projects" || path === "/about") {
    const route = seo.routes[path];
    return {
      title: route.title,
      description: route.description,
      ogType: path === "/about" ? "profile" : "website",
      robots: INDEX_ROBOTS,
      markdownPath: markdownPathFor(path),
    };
  }

  const project = projectFromPath(path);
  if (project) {
    const detail =
      project.description.length >= 120
        ? project.description
        : `${project.description} ${project.role}, using ${project.techStack.slice(0, 5).join(", ")}.`;
    return {
      title: `${project.name} — ${project.tagline} | ${profile.name}`,
      description: clip(detail),
      ogType: "article",
      robots: INDEX_ROBOTS,
      markdownPath: markdownPathFor(path),
    };
  }

  return {
    title: `Page not found | ${profile.name}`,
    description: `That address is not on ${profile.name}'s portfolio.`,
    ogType: "website",
    robots: NOINDEX_ROBOTS,
    markdownPath: null,
  };
};

const homeNodes = (): Node[] => [
  { h: 1, text: profile.name, id: "home" },
  { p: `${profile.role} ${profile.roleSub}. Based in ${profile.location}. Working remotely.` },
  { p: profile.statement },
  { p: profile.about },
  { ul: stats.map((stat) => `${stat.value} ${stat.label}`) },
  { h: 2, text: "Things I Build", id: "open-source" },
  {
    p: "Open-source tools from my GitHub: AI servers, automation and security tooling other developers use.",
  },
  { links: repoLinks() },
  { h: 2, text: "Selected Works", id: "projects" },
  { p: "Products I've built for clients in healthcare, travel, data, fintech and logistics." },
  {
    links: [
      ...projectLinks(projects.slice(0, 4)),
      { href: "/projects", label: `All ${projects.length} projects` },
    ],
  },
  { h: 2, text: "Best Services", id: "services" },
  { p: "Freelance and contract work, scoped up front and built in small steps you can review." },
  ...services.flatMap((service) => [
    { h: 3 as const, text: service.title },
    { p: service.description },
    { p: service.tags.join(", ") },
  ]),
  { h: 2, text: "5000+ APIs Shipped", id: "skills" },
  {
    p: "Built for startups and enterprises in Pakistan, the UK and the US with the same small, dependable set of tools.",
  },
  { p: `Main skills: ${mainSkills.map((skill) => `${skill.name} (${skill.note})`).join(", ")}.` },
  ...skillGroups.flatMap((group) => [
    { h: 3 as const, text: group.title },
    { p: group.items.join(", ") },
  ]),
  { p: `Spoken languages: ${spokenLanguages}.` },
  { h: 2, text: "Experience", id: "experience" },
  { p: "Five companies, seven years, mostly Rails and React." },
  ...experiences.flatMap((job) => [
    { h: 3 as const, text: job.company },
    { p: `${job.position} · ${job.location} · ${job.duration} · ${job.type}` },
    { p: job.summary },
  ]),
  { h: 2, text: "FAQ", id: "faq" },
  { p: "The questions people ask before we start." },
  ...faqs.flatMap((faq) => [
    { h: 3 as const, text: faq.q },
    { p: faq.a },
  ]),
  { h: 2, text: "Have any project idea in mind?", id: "contact" },
  { p: `${profile.location}. Replies within one working day.` },
  { links: contactLinks() },
];

const aboutNodes = (): Node[] => [
  { h: 1, text: aboutHeadline.join(" ") },
  ...aboutParagraphs.map((paragraph) => ({ p: paragraph })),
  { p: educationLine },
  { links: contactLinks() },
  { ul: stats.map((stat) => `${stat.value} ${stat.label}`) },
  { h: 2, text: "Experience", id: "experience" },
  { p: "Five companies, seven years, mostly Rails and React." },
  ...experiences.flatMap((job) => [
    { h: 3 as const, text: job.company },
    { p: `${job.position} · ${job.location} · ${job.duration} · ${job.type}` },
    { p: job.summary },
    ...(job.achievements.length ? [{ ul: job.achievements }] : []),
  ]),
  { h: 2, text: "Skills" },
  { p: "My main stack first, then everything else I work with." },
  { p: `Main skills: ${mainSkills.map((skill) => skill.name).join(", ")}.` },
  ...skillGroups.flatMap((group) => [
    { h: 3 as const, text: group.title },
    { p: group.items.join(", ") },
  ]),
  { p: `Spoken languages: ${spokenLanguages}.` },
];

const projectsNodes = (): Node[] => [
  { h: 1, text: "All Projects" },
  {
    p: `${liveProjects().length} live products, ${otherProjects().length} more client platforms and ${repos.length + moreRepos.length} open-source tools.`,
  },
  { h: 2, text: "Live products" },
  { p: "Platforms I built that you can open today." },
  { links: projectLinks(liveProjects()) },
  { h: 2, text: "Client work" },
  { p: "Platforms for clients in healthcare, data, fintech, DevOps and logistics." },
  { links: projectLinks(otherProjects()) },
  { h: 2, text: "Open source" },
  { p: "Tools I publish on GitHub for other developers." },
  { links: repoLinks() },
];

const projectNodes = (project: (typeof projects)[number]): Node[] => [
  { h: 1, text: project.name },
  { p: project.tagline },
  { p: project.description },
  { p: `Role: ${project.role}. Category: ${project.category}.` },
  { h: 2, text: "What I did" },
  { ul: project.highlights },
  { h: 2, text: "Stack" },
  { p: project.techStack.join(", ") },
  {
    links: [
      ...(project.url ? [{ href: project.url, label: `${project.name} live site` }] : []),
      { href: "/projects", label: "All projects" },
      { href: `mailto:${profile.email}`, label: "Hire Qasim", note: profile.email },
    ],
  },
];

const notFoundNodes = (): Node[] => [
  { h: 1, text: "Page not found" },
  { p: `That address is not on ${profile.name}'s portfolio.` },
  {
    links: [
      { href: "/", label: "Home" },
      { href: "/projects", label: "Projects" },
      { href: "/about", label: "About" },
      { href: `mailto:${profile.email}`, label: "Email" },
    ],
  },
];

const nodesFor = (path: string): Node[] => {
  if (path === "/") return homeNodes();
  if (path === "/about") return aboutNodes();
  if (path === "/projects") return projectsNodes();
  const project = projectFromPath(path);
  if (project) return projectNodes(project);
  return notFoundNodes();
};

const renderMarkdown = (nodes: Node[], path: string) => {
  const blocks = nodes.flatMap((node, index) => {
    const block = renderMarkdownNode(node);
    if (index !== 0 || !("h" in node)) return [block];
    const project = projectFromPath(path);
    const summary = project ? `${project.tagline}. ${project.category} work by ${profile.name}.` : metaFor(path).description;
    return [block, `> ${summary}`, `Canonical: ${abs(path)}`];
  });
  return `${blocks.join("\n\n")}\n`;
};

const renderMarkdownNode = (node: Node) => {
  if ("h" in node) return `${"#".repeat(node.h)} ${node.text}`;
  if ("p" in node) return node.p;
  if ("ul" in node) return node.ul.map((item) => `- ${item}`).join("\n");
  return node.links
    .map((link) => `- [${link.label}](${abs(link.href)})${link.note ? `: ${link.note}` : ""}`)
    .join("\n");
};

const renderHtml = (node: Node) => {
  if ("h" in node) {
    const id = node.id ? ` id="${esc(node.id)}"` : "";
    const cls = node.h === 1 ? "display text-5xl font-medium" : node.h === 2 ? "display mt-10 text-3xl font-medium" : "mt-6 text-xl font-semibold";
    return `<h${node.h}${id} class="${cls}">${esc(node.text)}</h${node.h}>`;
  }
  if ("p" in node) return `<p class="max-w-2xl leading-relaxed">${esc(node.p)}</p>`;
  if ("ul" in node) {
    return `<ul class="list-disc space-y-1 pl-5">${node.ul.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>`;
  }
  const items = node.links
    .map((link) => {
      const note = link.note ? ` <span class="text-muted">— ${esc(link.note)}</span>` : "";
      return `<li><a class="underline" href="${esc(abs(link.href))}">${esc(link.label)}</a>${note}</li>`;
    })
    .join("");
  return `<ul class="space-y-1">${items}</ul>`;
};

const siteNav = () => {
  const items = [
    ["/", "Home"],
    ["/projects", "Projects"],
    ["/about", "About"],
    ["/#services", "Services"],
    ["/#faq", "FAQ"],
    ["/#contact", "Contact"],
    ["/llms.txt", "AI index"],
  ];
  const links = items
    .map(([href, label]) => `<li><a class="underline" href="${esc(abs(href))}">${label}</a></li>`)
    .join("");
  return `<nav aria-label="Site" class="mb-10 text-sm"><ul class="flex flex-wrap gap-x-4 gap-y-2">${links}</ul></nav>`;
};

export const markdownFor = (path: string) => (isIndexable(path) ? renderMarkdown(nodesFor(path), path) : null);

export const crawlHtml = (path: string) =>
  `${siteNav()}<article class="space-y-4">${nodesFor(path).map(renderHtml).join("")}</article>`;

export const llmsTxt = () => {
  const page = (path: "/" | "/projects" | "/about", label: string, note: string) =>
    `- [${label}](${abs(markdownPathFor(path))}): ${note}`;
  const projectLines = projects.map((project) => {
    const live = project.url ? ` Live: ${project.url}` : "";
    return `- [${project.name}](${abs(markdownPathFor(projectPath(project.id)))}): ${project.tagline}. ${project.category}.${live}`;
  });
  const repoLines = [...repos, ...moreRepos].map((repo) => `- [${repo.name}](${repo.url}): ${repo.description}`);

  return `# ${profile.name}

> ${seo.routes["/"].description}

${profile.name} (${profile.shortName}) is a ${profile.role.toLowerCase()} in ${profile.location}. ${profile.about} Available for remote full-time and freelance work. Replies within one working day.

Read the markdown mirrors below when you need a page without layout or scripts. ${abs("/llms-full.txt")} is every mirror in one file.

- Email: ${profile.email}
- Phone: ${profile.phone}
- WhatsApp: ${profile.whatsapp}
- GitHub: ${profile.github}
- LinkedIn: ${profile.linkedin}
- X: ${profile.twitter}
- Company: ${profile.company.name} (${profile.company.url})
- Resume: ${abs("/resume.pdf")}

## Pages

${page("/", "Home", "Overview, selected work, services, skills, experience and FAQ.")}
${page("/projects", "Projects", "Live products, other client platforms, and open-source tools.")}
${page("/about", "About", "Biography, education, employment history and skills.")}

## Projects

${projectLines.join("\n")}

## Open source

${repoLines.join("\n")}

## Optional

- [Full site text](${abs("/llms-full.txt")}): Every markdown page in one file.
- [Resume PDF](${abs("/resume.pdf")}): Downloadable CV.
`;
};

export const llmsFull = () => {
  const pages = indexablePaths().map((path) => markdownFor(path));
  return `# ${profile.name} — full site text

> Every markdown mirror on this site. The short index is ${abs("/llms.txt")}.

${pages.join("\n---\n\n")}
`;
};

export const robotsTxt = () => `# ${profile.name} — portfolio
# Agent index: ${abs("/llms.txt")}
# Full text: ${abs("/llms-full.txt")}
# https://contentsignals.org/

User-agent: *
Content-Signal: search=yes, ai-input=yes, ai-train=yes
Allow: /

Sitemap: ${abs("/sitemap.xml")}
`;

export const sitemapXml = () => {
  const today = new Date().toISOString().slice(0, 10);
  const urls = indexablePaths().map((path) => {
    const priority = path === "/" ? "1.0" : path === "/projects" || path === "/about" ? "0.8" : "0.6";
    return `  <url><loc>${esc(abs(path))}</loc><lastmod>${today}</lastmod><priority>${priority}</priority></url>`;
  });
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
};

const personNode = () => ({
  "@type": "Person",
  "@id": personId,
  name: profile.name,
  givenName: "Qasim Ali",
  familyName: "Zahid",
  alternateName: profile.shortName,
  jobTitle: profile.role,
  description: `${profile.about} Available for remote full-time and freelance work.`,
  url: `${siteUrl}/`,
  image: `${siteUrl}/og-image.jpg`,
  email: `mailto:${profile.email}`,
  telephone: "+923035570992",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  worksFor: {
    "@type": "Organization",
    name: profile.company.name,
    url: profile.company.url,
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: profile.education.institution,
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "degree",
    name: profile.education.degree,
    recognizedBy: {
      "@type": "CollegeOrUniversity",
      name: profile.education.institution,
    },
  },
  hasOccupation: {
    "@type": "Occupation",
    name: profile.role,
    description: "Ruby on Rails APIs, React and TypeScript apps, and AI integrations for remote teams.",
    skills: mainSkills.map((skill) => skill.name).join(", "),
  },
  knowsLanguage: [
    { "@type": "Language", name: "English", alternateName: "en" },
    { "@type": "Language", name: "Urdu", alternateName: "ur" },
  ],
  knowsAbout: [
    "Ruby on Rails",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Node.js",
    "Next.js",
    "AWS",
    "AI integration",
    "LLM",
    "Model Context Protocol",
    "RAG",
  ],
  sameAs: [profile.github, profile.linkedin, profile.twitter],
  contactPoint: {
    "@type": "ContactPoint",
    email: profile.email,
    telephone: "+923035570992",
    contactType: "professional",
    availableLanguage: ["English", "Urdu"],
    areaServed: "Worldwide",
  },
});

const websiteNode = () => ({
  "@type": "WebSite",
  "@id": websiteId,
  url: `${siteUrl}/`,
  name: seo.siteName,
  description: seo.routes["/"].description,
  inLanguage: "en",
  publisher: { "@id": personId },
});

const workNode = (project: (typeof projects)[number]) => {
  const path = projectPath(project.id);
  return {
    "@type": "CreativeWork",
    "@id": `${abs(path)}#work`,
    name: project.name,
    headline: project.tagline,
    description: project.description,
    url: abs(path),
    genre: project.category,
    keywords: project.techStack.join(", "),
    creator: { "@id": personId },
    mainEntityOfPage: abs(path),
    ...(project.url ? { sameAs: project.url } : {}),
  };
};

const breadcrumb = (path: string, items: { name: string; path: string }[]) => ({
  "@type": "BreadcrumbList",
  "@id": `${abs(path)}#breadcrumb`,
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: abs(item.path),
  })),
});

const pageNode = (path: string, type: string, crumb: boolean) => {
  const meta = metaFor(path);
  return {
    "@type": type,
    "@id": `${abs(path)}#webpage`,
    url: abs(path),
    name: meta.title,
    description: meta.description,
    isPartOf: { "@id": websiteId },
    about: { "@id": personId },
    inLanguage: "en",
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteUrl}/og-image.jpg`,
      width: 1200,
      height: 630,
    },
    ...(crumb ? { breadcrumb: { "@id": `${abs(path)}#breadcrumb` } } : {}),
  };
};

const projectList = (path: string, items: typeof projects) => ({
  "@type": "ItemList",
  "@id": `${abs(path)}#projects`,
  name: "Projects by Qasim Ali Zahid",
  numberOfItems: items.length,
  itemListElement: items.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: project.name,
    url: abs(projectPath(project.id)),
    item: { "@id": `${abs(projectPath(project.id))}#work` },
  })),
});

const sourceNodes = () =>
  [...repos, ...moreRepos].map((repo) => ({
    "@type": "SoftwareSourceCode",
    name: repo.name,
    description: repo.description,
    codeRepository: repo.url,
    url: repo.url,
    author: { "@id": personId },
    programmingLanguage: "stack" in repo ? repo.stack : undefined,
  }));

const graph = (...nodes: object[]) => ({
  "@context": "https://schema.org",
  "@graph": nodes,
});

export const jsonLdFor = (path: string) => {
  const person = personNode();
  const website = websiteNode();

  if (path === "/") {
    return graph(
      person,
      website,
      { ...pageNode(path, "WebPage", false), mainEntity: { "@id": personId } },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
      {
        "@type": "OfferCatalog",
        "@id": `${siteUrl}/#services`,
        name: "Services",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            provider: { "@id": personId },
            areaServed: "Worldwide",
          },
        })),
      },
      projectList(path, projects),
      ...projects.map(workNode),
      ...sourceNodes(),
    );
  }

  if (path === "/about") {
    return graph(
      person,
      website,
      { ...pageNode(path, "ProfilePage", true), mainEntity: { "@id": personId } },
      breadcrumb(path, [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]),
    );
  }

  if (path === "/projects") {
    return graph(
      person,
      website,
      { ...pageNode(path, "CollectionPage", true), mainEntity: { "@id": `${abs(path)}#projects` } },
      breadcrumb(path, [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
      ]),
      projectList(path, projects),
      ...projects.map(workNode),
      ...sourceNodes(),
    );
  }

  const project = projectFromPath(path);
  if (project) {
    const work = workNode(project);
    return graph(
      person,
      website,
      { ...pageNode(path, "WebPage", true), mainEntity: { "@id": work["@id"] } },
      breadcrumb(path, [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: project.name, path },
      ]),
      work,
    );
  }

  const meta = metaFor(path);
  return graph(website, {
    "@type": "WebPage",
    name: meta.title,
    description: meta.description,
    isPartOf: { "@id": websiteId },
    inLanguage: "en",
  });
};
