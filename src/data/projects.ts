import spectraHome from "../assets/images/projects/spectracare-home.jpg";
import spectraFeatures from "../assets/images/projects/spectracare-features.jpg";
import spectraPricing from "../assets/images/projects/spectracare-pricing.jpg";
import spectraDashboard from "../assets/images/projects/spectracare-dashboard.jpg";
import spectraOrgs from "../assets/images/projects/spectracare-organizations.jpg";
import roaviHome from "../assets/images/projects/roavi-home.jpg";
import roaviExplore from "../assets/images/projects/roavi-explore.jpg";
import roaviCommunity from "../assets/images/projects/roavi-community.jpg";
import roaviProfile from "../assets/images/projects/roavi-profile.jpg";
import roaviBlog from "../assets/images/projects/roavi-blog.jpg";
import shepherdHome from "../assets/images/projects/shepherd-home.jpg";
import shepherdDestinations from "../assets/images/projects/shepherd-destinations.jpg";
import shepherdTrek from "../assets/images/projects/shepherd-trek.jpg";
import shepherdGallery from "../assets/images/projects/shepherd-gallery.jpg";
import shepherdBlog from "../assets/images/projects/shepherd-blog.jpg";
import goodvibesHome from "../assets/images/projects/goodvibes-home.jpg";
import goodvibesShop from "../assets/images/projects/goodvibes-shop.jpg";
import goodvibesFormula from "../assets/images/projects/goodvibes-formula.jpg";
import goodvibesCalculator from "../assets/images/projects/goodvibes-calculator.jpg";
import scandinavianHome from "../assets/images/projects/scandinavian-home.jpg";
import scandinavianOfferings from "../assets/images/projects/scandinavian-offerings.jpg";
import scandinavianProduct from "../assets/images/projects/scandinavian-product.jpg";
import scandinavianCiso from "../assets/images/projects/scandinavian-ciso.jpg";
import scandinavianContact from "../assets/images/projects/scandinavian-contact.jpg";
import skjohansenHome from "../assets/images/projects/skjohansen-home.jpg";
import skjohansenBlog from "../assets/images/projects/skjohansen-blog.jpg";
import skjohansenRadar from "../assets/images/projects/skjohansen-radar.jpg";
import skjohansenSkills from "../assets/images/projects/skjohansen-skills.jpg";
import skjohansenPost from "../assets/images/projects/skjohansen-post.jpg";
import agencyHome from "../assets/images/projects/agency-home.jpg";
import agencyModels from "../assets/images/projects/agency-models.jpg";
import agencyInfluencers from "../assets/images/projects/agency-influencers.jpg";
import agencyCreatives from "../assets/images/projects/agency-creatives.jpg";
import tlvcHome from "../assets/images/projects/tlvc-home.jpg";
import tlvcServices from "../assets/images/projects/tlvc-services.jpg";
import tlvcStories from "../assets/images/projects/tlvc-stories.jpg";
import tlvcApply from "../assets/images/projects/tlvc-apply.jpg";
import tlvcAbout from "../assets/images/projects/tlvc-about.jpg";
import intimeHome from "../assets/images/projects/intime-home.jpg";
import intimeFeatures from "../assets/images/projects/intime-features.jpg";
import intimeSection from "../assets/images/projects/intime-section.jpg";

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  role: string;
  highlights: string[];
  techStack: string[];
  color: string;
  url?: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    id: "eduhealth",
    name: "EduHealth",
    tagline: "Multi-Tenant Healthcare Platform",
    description:
      "Multi-tenant platform serving many clinics and domains, with a central prescription system that blocks duplicate medications, real-time chat and video consultations, and workflows built around patient safety and medical data integrity.",
    category: "Healthcare",
    role: "Full Stack Developer",
    highlights: [
      "Built a multi-tenant platform supporting multiple domains and clinics",
      "Developed a centralized prescription system to prevent duplicate medications",
      "Implemented real-time chat & video consultation (Agora integration)",
      "Designed a scalable Ruby on Rails backend with modular architecture",
      "Built a performant React (Vite) frontend with optimized UX",
      "Deployed on AWS with CI/CD pipelines",
      "Focused on patient management, doctor workflows, and medical data integrity",
    ],
    techStack: ["Ruby on Rails", "React", "Vite", "Agora", "AWS", "CI/CD"],
    color: "from-sky-500 to-teal-500",
    url: "https://spectracare.health/",
    images: [spectraHome, spectraDashboard, spectraOrgs, spectraFeatures, spectraPricing],
  },
  {
    id: "roavi",
    name: "ROAVI",
    tagline: "Connect Travelers with Local Guides",
    description:
      "Full-stack platform connecting travelers with local companions and guides while offering intelligent workforce analytics and optimization solutions.",
    category: "Travel Tech",
    role: "Full Stack Developer",
    highlights: [
      "Built responsive, mobile-first frontend using React, Vite, and Tailwind CSS",
      "Developed and maintained RESTful APIs with Ruby on Rails",
      "Integrated AWS S3 for secure file storage",
      "Implemented authentication using Devise and JWT",
      "Deployed on Heroku and Netlify for scalability",
    ],
    techStack: [
      "Ruby on Rails",
      "React",
      "Vite",
      "Tailwind CSS",
      "PostgreSQL",
      "AWS S3",
      "Heroku",
      "Netlify",
    ],
    color: "from-blue-500 to-cyan-500",
    url: "https://roavi.com/",
    images: [roaviHome, roaviExplore, roaviCommunity, roaviProfile, roaviBlog],
  },
  {
    id: "shepherd",
    name: "Shepherd Travels",
    tagline: "Treks & Tours in the Karakoram",
    description:
      "Booking site for a trekking company in Skardu and Gilgit-Baltistan: expeditions, treks, tours and safaris, a destination guide for each route, a photo gallery and a travel blog.",
    category: "Travel & Tourism",
    role: "Full Stack Developer",
    highlights: [
      "Built destination pages for every trek and route in Gilgit-Baltistan",
      "Added a photo gallery and a blog for travel guides",
      "WhatsApp contact for quick bookings",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    color: "from-green-600 to-emerald-500",
    url: "https://www.shepherdtravels.com/",
    images: [shepherdHome, shepherdDestinations, shepherdTrek, shepherdGallery, shepherdBlog],
  },
  {
    id: "goodvibes",
    name: "Good Vibes Pet Food",
    tagline: "Gently Cooked Dog Food, USA-Made",
    description:
      "E-commerce site for a California dog food brand: a shop with four formulas, product pages, a feeding calculator, recurring orders and a store locator.",
    category: "E-commerce",
    role: "Full Stack Developer",
    highlights: [
      "Built the shop and a page for each formula",
      "Feeding calculator that recommends daily portions",
      "Customer accounts with recurring deliveries",
      "Store locator for retail partners",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    color: "from-orange-500 to-amber-400",
    url: "https://goodvibespetfood-web.vercel.app/",
    images: [goodvibesHome, goodvibesShop, goodvibesFormula, goodvibesCalculator],
  },
  {
    id: "agencypics",
    name: "Agency.Pics",
    tagline: "Search Platform for Models & Creatives",
    description:
      "Global search platform for models, influencers and creatives, with filterable talent directories, verified profiles, service listings and a jobs board.",
    category: "Marketplace",
    role: "Full Stack Developer",
    highlights: [
      "Searchable directories for models, influencers and creatives",
      "Filters for location, category, gender and verified users",
      "Jobs board and service listings for agencies and brands",
    ],
    techStack: ["Ruby on Rails", "Hotwire", "React", "Cloudflare"],
    color: "from-lime-400 to-orange-500",
    url: "https://agency.pics/",
    images: [agencyHome, agencyModels, agencyInfluencers, agencyCreatives],
  },
  {
    id: "tlvc",
    name: "TLVC",
    tagline: "Visa & Immigration Consultancy",
    description:
      "Website for a visa and immigration consultancy in Pakistan: service pages for student, work and tourist visas, success stories, free assessment and consultation booking, and an online visa application form.",
    category: "Immigration Services",
    role: "Full Stack Developer",
    highlights: [
      "Service pages for each visa type",
      "Free assessment and consultation booking",
      "Online visa application form",
    ],
    techStack: ["React", "Vite", "Tailwind CSS", "Netlify"],
    color: "from-blue-600 to-sky-400",
    url: "https://tlvcpk.com/",
    images: [tlvcHome, tlvcServices, tlvcStories, tlvcApply, tlvcAbout],
  },
  {
    id: "scandinaviandev",
    name: "ScandinavianDev",
    tagline: "Security Consultancy, Sweden",
    description:
      "Website for a Swedish security consultancy, with a page for each of its five offerings (security engineering training, security champions, tabletop exercises, fractional CISO and due diligence) plus an about and contact page.",
    category: "Security Consulting",
    role: "Web Developer",
    highlights: [
      "Offerings overview and a page for each service",
      "Custom diagrams and illustrations for each offering",
      "Static site on GitHub Pages",
    ],
    techStack: ["Jekyll", "HTML5", "CSS", "GitHub Pages"],
    color: "from-blue-700 to-blue-500",
    url: "https://scandinavian.dev/",
    images: [scandinavianHome, scandinavianOfferings, scandinavianProduct, scandinavianCiso, scandinavianContact],
  },
  {
    id: "skjohansen",
    name: "Stephan Kaas Johansen",
    tagline: "Software, Security & AI Governance",
    description:
      "Personal site for a security advisor and teacher, with writing on AI governance and cybersecurity, a tech radar, and a skills page.",
    category: "Personal Brand",
    role: "Web Developer",
    highlights: [
      "Blog with topic filters",
      "Interactive tech radar",
      "Skills and engagements pages",
    ],
    techStack: ["Jekyll", "HTML5", "CSS", "GitHub Pages"],
    color: "from-orange-600 to-red-500",
    url: "https://skjohansen.com/",
    images: [skjohansenHome, skjohansenBlog, skjohansenRadar, skjohansenSkills, skjohansenPost],
  },
  {
    id: "intimegdt",
    name: "IntimeGDT",
    tagline: "Real-Time Data Marketplace",
    description:
      "Platform enabling users to discover, evaluate, and access diverse datasets for analytics, machine learning, and business intelligence.",
    category: "Data & Analytics",
    role: "Full Stack Developer",
    highlights: [
      "Developed frontend using React, Vite, and Tailwind CSS",
      "Built backend features using Ruby on Rails",
      "Integrated AWS S3 for secure data storage",
      "Configured SendGrid for email communications",
      "Deployed on Heroku ensuring scalability and reliability",
    ],
    techStack: [
      "Ruby on Rails",
      "React",
      "Vite",
      "Tailwind CSS",
      "AWS S3",
      "SendGrid",
      "Heroku",
    ],
    color: "from-purple-500 to-pink-500",
    url: "https://intime-copy.netlify.app/",
    images: [intimeHome, intimeFeatures, intimeSection],
  },
  {
    id: "bluebolivia",
    name: "BlueBolivia",
    tagline: "Multi-Currency Tracking Platform",
    description:
      "MERN stack platform designed to help users track and convert multiple currencies, with a focus on the Bolivian economy.",
    category: "Fintech",
    role: "Full Stack Developer (MERN)",
    highlights: [
      "Developed frontend using React and Tailwind CSS",
      "Built RESTful APIs with Node.js and Express",
      "Integrated Binance API for real-time currency data",
      "Created detailed charting and admin tools",
      "Deployed on DigitalOcean for reliable performance",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Binance API",
      "DigitalOcean",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "elitesentry",
    name: "Elite Sentry",
    tagline: "IT Monitoring & Observability",
    description:
      "Web-based monitoring and observability platform providing real-time insights into IT infrastructure, applications, and systems.",
    category: "DevOps",
    role: "Full Stack Developer",
    highlights: [
      "Built platform using Hugo for static site generation",
      "Styled with Tailwind CSS for responsive, modern UI",
      "Used Alpine.js for dynamic front-end interactivity",
      "Developed customizable dashboards for performance metrics",
      "Enabled system health monitoring across devices",
    ],
    techStack: ["Hugo", "Tailwind CSS", "Alpine.js", "JavaScript"],
    color: "from-orange-500 to-red-500",
  },
  {
    id: "healthwire",
    name: "Healthwire",
    tagline: "Digital Healthcare Platform",
    description:
      "B2C healthcare platform with Pharmacy, Orders, Wallets, and Appointment Booking modules - one of Pakistan's leading digital healthcare solutions.",
    category: "Healthcare",
    role: "Full Stack Developer",
    highlights: [
      "Developed responsive frontend using HTML, CSS, Bootstrap, and jQuery",
      "Built APIs to support mobile app features",
      "Implemented real-time booking and user management",
      "Deployed on DigitalOcean for scalability",
    ],
    techStack: [
      "Ruby on Rails",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "PostgreSQL",
      "DigitalOcean",
    ],
    color: "from-teal-500 to-cyan-500",
  },
  {
    id: "shiporacle",
    name: "ShipOracle",
    tagline: "International Shipping Directory",
    description:
      "Leading international shipping directory and B2B maritime network for seamless cargo shipping and international freight management.",
    category: "Logistics",
    role: "Backend Developer",
    highlights: [
      "Developed APIs using Ruby on Rails",
      "Implemented real-time chat features using ActionCable",
      "Utilized Sidekiq for background job processing",
      "Integrated email services for streamlined communication",
      "Hosted on AWS EC2 with S3 for secure file storage",
    ],
    techStack: [
      "Ruby on Rails",
      "ActionCable",
      "Sidekiq",
      "AWS EC2",
      "AWS S3",
      "PostgreSQL",
    ],
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: "quickcard",
    name: "Quickcard",
    tagline: "Fraud Protection Platform",
    description:
      "Platform designed to protect against cardholder fraud, reduce chargebacks, and improve visibility into chargeback cases.",
    category: "Fintech",
    role: "Full Stack Developer",
    highlights: [
      "Developed frontend using HTML, CSS, Bootstrap, and jQuery",
      "Integrated payment gateways for secure transactions",
      "Built reporting, disputes, withdrawals, and wallet features",
      "Implemented Cronjobs and Sidekiq for background processing",
      "Set up SendGrid for email communication",
    ],
    techStack: [
      "Ruby on Rails",
      "jQuery",
      "Bootstrap",
      "Stripe",
      "SendGrid",
      "Sidekiq",
    ],
    color: "from-rose-500 to-pink-500",
  },
];
