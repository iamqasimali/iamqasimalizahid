export const profile = {
  name: "Qasim Ali Zahid",
  shortName: "Qasim.Z",
  role: "Senior Full Stack Engineer",
  roleSub: "& AI integrations",
  location: "Lahore, Pakistan",
  statement:
    "A full stack engineer from Pakistan, building Rails APIs, React dashboards and the AI features that sit on top of them.",
  email: "iamqasimalizahid@gmail.com",
  phone: "+92-3035570992",
  whatsapp: "https://wa.me/923035570992",
  linkedin: "https://www.linkedin.com/in/qasim-ali-zahid/",
  github: "https://github.com/iamqasimali",
  twitter: "https://x.com/QasimA6",
  company: { name: "QuickGem Solutions", url: "http://quickgemsolutions.com/" },
  education: {
    degree: "BS Computer Science",
    institution: "University of Sargodha",
    duration: "2015 – 2019",
  },
  about:
    "I've spent 7+ years shipping web products for startups and enterprises across healthcare, fintech, e-commerce and logistics. Most days that means Ruby on Rails on the backend, React and TypeScript on the front, and more and more, LLMs wired into the middle. I am Technical Lead at QuickGem Solutions and still write code every day.",
};

export const aboutHeadline = ["I build the backend,", "and wire in the AI."] as const;

export const aboutParagraphs = [
  `I'm ${profile.name}, a full stack engineer in ${profile.location}, working remotely. For the last 7+ years I have built web apps and APIs in Ruby on Rails, React and TypeScript.`,
  `Today I am Technical Lead at ${profile.company.name}, after two years as Principal Software Engineer. I own architecture, build Rails APIs and React front ends, and work with clients on delivery. Recent work includes EduHealth, a multi-tenant healthcare platform with video consultations, and ROAVI, a marketplace that connects travellers with local guides.`,
  `Before that I was Technical Lead at Infinikorn, and earlier Team Lead at Healthwire, where I shipped wallet, transaction, and payment features. I started at Techcreatix as a Ruby on Rails developer and left as a senior engineer. On the side I build MCP servers and AI tools, like a collection of MCP servers for full stack work and BeaverGuard, a malware scanner for developers.`,
];

export const stats = [
  { label: "Years shipping", value: "7+" },
  { label: "Projects delivered", value: "75+" },
  { label: "APIs built", value: "5000+" },
  { label: "Happy clients", value: "55+" },
];
