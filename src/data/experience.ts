export interface Experience {
  company: string;
  position: string;
  location: string;
  duration: string;
  type: string;
  summary: string;
  achievements: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: "QuickGem Solutions",
    summary:
      "Technical Lead since October 2026, and Principal Software Engineer since April 2024, building Rails, React, and MERN products with clients in Islamabad.",
    position: "Technical Lead",
    location: "Islamabad, Pakistan",
    duration: "Apr 2024 - Present",
    type: "Full-time",
    achievements: [
      "Technical Lead from October 2026, after serving as Principal Software Engineer from April 2024",
      "Developed scalable web applications using Ruby on Rails, React, and the MERN stack for clients' specific needs",
      "Collaborated closely with clients to ensure timely delivery of high-quality solutions",
      "Implemented responsive designs to enhance user experience and satisfaction",
      "Maintained clear communication with clients to address any issues promptly",
    ],
    tech: ["Ruby on Rails", "React", "Node.js", "MongoDB"],
  },
  {
    company: "Infinikorn",
    summary: "Technical Lead in Lahore from June 2026 to October 2026.",
    position: "Technical Lead",
    location: "Lahore, Pakistan",
    duration: "Jun 2026 - Oct 2026",
    type: "Full-time",
    achievements: [],
    tech: [],
  },
  {
    company: "Ozacloud",
    summary:
      "Senior Software Engineer on a London team, building Rails applications and PostgreSQL-backed REST APIs.",
    position: "Senior Software Engineer",
    location: "London, United Kingdom",
    duration: "Feb 2024 - Apr 2024",
    type: "Full-time",
    achievements: [
      "Designed and developed RESTful APIs for efficient data exchange",
      "Built and maintained web applications using Ruby on Rails",
      "Managed PostgreSQL databases, including schema design and query optimization",
    ],
    tech: ["Ruby on Rails", "PostgreSQL"],
  },
  {
    company: "Healthwire",
    summary:
      "Senior Software Engineer from November 2022, then Team Lead from February 2023, on wallet, transaction, and payment work for a Lahore healthcare platform.",
    position: "Team Lead",
    location: "Lahore, Pakistan",
    duration: "Nov 2022 - Apr 2024",
    type: "Full-time",
    achievements: [
      "Promoted from Senior Software Engineer to Team Lead in February 2023",
      "Developed and enhanced applications from the ground up and contributed to existing projects",
      "Led cross-functional teams on company initiatives",
      "Implemented agile methodologies to keep delivery on time",
      "Partnered with architects, designers, and developers on planning, development, testing, and maintenance",
      "Shipped wallet functionality, transactions, and payment gateway integration",
    ],
    tech: ["Ruby on Rails"],
  },
  {
    company: "Techcreatix",
    summary:
      "Ruby on Rails Developer from June 2019, then Senior Software Engineer from December 2021, building Rails and React applications in Lahore.",
    position: "Senior Software Engineer",
    location: "Lahore, Pakistan",
    duration: "Jun 2019 - Nov 2022",
    type: "Full-time",
    achievements: [
      "Led a team developing and maintaining web applications with Ruby on Rails and React",
      "Managed and optimized PostgreSQL and SQL databases",
      "Deployed applications on AWS and integrated SendGrid and Twilio",
      "Built and maintained Rails applications and RESTful APIs",
      "Integrated third-party services for payments, mail, SMS, and notifications",
    ],
    tech: ["Ruby on Rails", "React", "PostgreSQL", "AWS", "Twilio"],
  },
];
