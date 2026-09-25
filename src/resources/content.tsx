import {
  About,
  Blog,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";

import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Rupa Yeshvitha",
  lastName: "Karedla",
  name: "Rupa Yeshvitha Karedla",
  role: "Cybersecurity Student & Aspiring Security Analyst",
  avatar: "/images/avatar.jpg",
  email: "karedlateshi@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Telugu", "Hindi"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Writing about cybersecurity, technology, and projects.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Rupakaredla",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/rupa-yeshvitha-karedla-4159b2289/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} — Cybersecurity Portfolio`,
  description: `Portfolio of ${person.name}, a Cybersecurity student and aspiring security analyst.`,
  headline: <>Building secure systems through technology and innovation</>,

  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured Project</strong>
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Undershell
        </Text>
      </Row>
    ),
    href: "/work/undershell",
  },

  subline: (
    <>
      I'm {person.firstName}, a {person.role.toLowerCase()} from India.
      <br />
      I work across cybersecurity, AI-driven security, embedded systems,
      and full-stack technologies.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Hyderabad, Telangana`,

  tableOfContent: {
    display: true,
    subItems: false,
  },

  avatar: {
    display: true,
  },

  calendar: {
    display: false,
    link: "https://cal.com",
  },

  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} is a Cybersecurity student pursuing a B.Tech in
        Computer Science Engineering with a specialization in Cyber Security
        at Malla Reddy University, Telangana.
        <br />
        <br />
        With a strong academic record and hands-on experience across
        penetration testing, networking, security monitoring, AI-driven
        security, embedded systems, and application development, she is
        interested in building practical technologies that address real-world
        security challenges.
      </>
    ),
  },

  work: {
    display: true,
    title: "Projects & Experience",
    experiences: [
      {
        company: "Undershell",
        timeframe: "Sep 2025 - Present",
        role: "Project Developer",
        achievements: [
          <>
            Built a women's safety application providing SOS alerts, live
            location tracking, signal-less SMS, and voice-recognition-triggered
            emergency alerts.
          </>,
          <>
            Worked across React Native, Node.js, Firebase, MongoDB, GSM,
            ESP32, and voice recognition technologies.
          </>,
        ],
        images: [],
      },

      {
        company: "NDRA-PII",
        timeframe: "Jan 2026 - Present",
        role: "AI & Data Research Contributor",
        achievements: [
          <>
            Curated and preprocessed labelled datasets for an AI-based
            personally identifiable information detection system.
          </>,
          <>
            Supported benchmarking and validation of PII detection across
            unstructured documents using NLP-based data processing.
          </>,
        ],
        images: [],
      },

      {
        company: "Agentic AI Defence Swarms (AADS)",
        timeframe: "Nov 2025 - Present",
        role: "Cybersecurity & AI Project Lead",
        achievements: [
          <>
            Led coordination and planning for an AI-driven autonomous cyber
            defense system.
          </>,
          <>
            Contributed to SIEM pipeline development and IDS/IPS integration,
            using Python, Docker, and Kubernetes.
          </>,
          <>
            Coordinated stakeholder documentation and project planning.
          </>,
        ],
        images: [],
      },

      {
        company: "OuroMini",
        timeframe: "Oct 2025 - Dec 2025",
        role: "Project Coordinator",
        achievements: [
          <>
            Managed an ESP32-based wireless research platform from planning
            through expo delivery.
          </>,
          <>
            Worked with Wi-Fi, BLE, web dashboards, embedded logging,
            budgeting, timelines, compliance, and technical documentation.
          </>,
        ],
        images: [],
      },
    ],
  },

  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Malla Reddy University, Telangana",
        description: (
          <>
            B.Tech in Computer Science Engineering (Cyber Security)
            <br />
            2023 - 2027 · CGPA: 9.0
          </>
        ),
      },
      {
        name: "Sri Chaitanya Jr Kalasala, Telangana",
        description: (
          <>
            Higher Secondary Education — MPC
            <br />
            2021 - 2023 · CGPA: 9.7
          </>
        ),
      },
      {
        name: "Vidyanjali High School, Telangana",
        description: (
          <>
            Secondary Education — CBSE
            <br />
            2021 · CGPA: 9.4
          </>
        ),
      },
    ],
  },

  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Cybersecurity",
        description: (
          <>
            Penetration testing, networking fundamentals, incident response,
            threat intelligence, compliance and governance, and cloud security.
          </>
        ),
        tags: [
          {
            name: "Penetration Testing",
            icon: "shield",
          },
          {
            name: "Wireshark",
            icon: "terminal",
          },
          {
            name: "TryHackMe",
            icon: "shield",
          },
          {
            name: "Threat Intelligence",
            icon: "shield",
          },
        ],
        images: [],
      },

      {
        title: "Programming & Development",
        description: (
          <>
            Python, HTML, CSS, JavaScript, SQL, MongoDB, Firebase, and
            full-stack application development.
          </>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "SQL",
            icon: "database",
          },
          {
            name: "MongoDB",
            icon: "database",
          },
        ],
        images: [],
      },

      {
        title: "Cloud & Infrastructure",
        description: (
          <>
            Experience with containerized development and infrastructure
            technologies including Docker and Kubernetes.
          </>
        ),
        tags: [
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "Kubernetes",
            icon: "kubernetes",
          },
        ],
        images: [],
      },

      {
        title: "AI & Data",
        description: (
          <>
            Experience with NLP data processing, dataset curation,
            validation, and visualization using modern data tools.
          </>
        ),
        tags: [
          {
            name: "NLP",
            icon: "brain",
          },
          {
            name: "spaCy",
            icon: "python",
          },
          {
            name: "Tableau",
            icon: "chart",
          },
          {
            name: "Power BI",
            icon: "chart",
          },
        ],
        images: [],
      },

      {
        title: "Certifications",
        description: (
          <>
            eJPT Certification (Ongoing) · Deloitte Cyber Job Simulation ·
            ISC2 Pre-Course Certification · Cisco Introduction to
            Cybersecurity · Telstra Fundamentals of Cybersecurity · Google
            Cybersecurity Analyst Certificate.
          </>
        ),
        tags: [
          {
            name: "eJPT (Ongoing)",
            icon: "certificate",
          },
          {
            name: "Deloitte Cyber Job Simulation",
            icon: "certificate",
          },
          {
            name: "ISC2 Pre-Course",
            icon: "certificate",
          },
          {
            name: "Cisco Cybersecurity",
            icon: "certificate",
          },
          {
            name: "Telstra Cybersecurity",
            icon: "certificate",
          },
          {
            name: "Google Cybersecurity Analyst",
            icon: "certificate",
          },
        ],
        images: [],
      },

      {
        title: "Achievements",
        description: (
          <>
            <strong>President, Entrepreneurship Club</strong> — Dept. of
            Cybersecurity: Led a 40+ member club promoting innovation and
            startup culture; organized workshops, pitch events, and speaker
            sessions across departments.
            <br />
            <br />
            <strong>Winning Team, Hyderabad's Biggest Hackathon</strong> by
            Knowvation Learnings: Secured 1st place among 200+ teams with an
            innovative IoT-based project, recognized for creativity,
            scalability, and impact.
          </>
        ),
        tags: [
          {
            name: "Club President",
            icon: "trophy",
          },
          {
            name: "Hackathon Winner",
            icon: "trophy",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about cybersecurity and technology...",
  description: `Technical writing and project insights from ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Cybersecurity, AI, embedded systems, and software projects by ${person.name}`,
};

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
};

