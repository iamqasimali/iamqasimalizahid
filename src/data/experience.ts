export interface Experience {
  company: string;
  position: string;
  location: string;
  duration: string;
  type: string;
  achievements: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: "QuickGemSolutions",
    position: "Senior Engineer",
    location: "Islamabad, Pakistan",
    duration: "April 2024 - Present",
    type: "Full-time",
    achievements: [
      "Led a team of developers, overseeing project delivery and providing training and mentorship",
      "Actively participated in architecture design discussions, contributing to scalable and maintainable system solutions",
      "Developed and maintained multiple RESTful APIs using Ruby on Rails",
      "Built dynamic and responsive user interfaces using React.js with TypeScript and Tailwind CSS",
      "Wrote and maintained comprehensive RSpec test suites ensuring code quality and reliability",
      "Developed and implemented KPIs transforming raw data into actionable business metrics",
    ],
    tech: ["Ruby on Rails", "React", "TypeScript", "PostgreSQL", "RSpec", "AWS"],
  },
  {
    company: "Ozacloud",
    position: "Senior Engineer",
    location: "London - Remote",
    duration: "Feb 2024 - April 2024",
    type: "Contract",
    achievements: [
      "Developed and maintained multiple RESTful APIs using Ruby on Rails",
      "Integrated third-party services for enhanced functionality",
      "Maintained comprehensive RSpec test coverage ensuring code quality",
    ],
    tech: ["Ruby on Rails", "RSpec", "Third-party APIs"],
  },
  {
    company: "Healthwire",
    position: "Software Engineer",
    location: "Lahore, Pakistan",
    duration: "Nov 2022 - Apr 2024",
    type: "Full-time",
    achievements: [
      "Successfully migrated a legacy Rails application to the latest stable release",
      "Developed REST APIs for Pakistan's leading digital healthcare platform",
      "Ensured code quality through comprehensive RSpec testing",
    ],
    tech: ["Ruby on Rails", "PostgreSQL", "RSpec", "AWS S3", "DigitalOcean"],
  },
  {
    company: "Techcreatix",
    position: "Software Engineer",
    location: "Lahore, Pakistan",
    duration: "Jun 2019 - Nov 2022",
    type: "Full-time",
    achievements: [
      "Built and maintained web applications using Ruby on Rails",
      "Developed RESTful APIs for seamless internal and external communication",
      "Integrated payment gateways, mailing, SMS, and notification services",
    ],
    tech: ["Ruby on Rails", "JavaScript", "MySQL", "Payment Gateways", "Twilio"],
  },
];
