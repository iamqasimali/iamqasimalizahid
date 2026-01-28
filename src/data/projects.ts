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
}

export const projects: Project[] = [
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
