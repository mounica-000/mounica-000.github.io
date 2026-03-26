export const personalInfo = {
  name: 'Mounica Paladugu',
  role: 'Software Engineer',
  tagline: 'Curious engineer who learns fast, builds quickly, and iterates until it works.',
  about: "I'm a curious software engineer who enjoys learning quickly and turning ideas into working software. I like breaking down complex problems, building practical solutions, and improving them through iteration. Most of my time is spent strengthening and revising my foundations in data structures, system design, and full-stack development while building projects to apply what I learn.",
  email: 'meismounica079@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mounica-paladugu',
  github: 'https://www.github.com/mounica-000',
  resumePath: '/Mounica_Paladugu_Resume.pdf',
};

export const skills = [
  { category: 'Languages', items: ['Python', 'Java', 'SQL'] },
  { category: 'Backend', items: ['FastAPI', 'REST APIs'] },
  { category: 'Frontend', items: ['React', 'JavaScript', 'HTML', 'CSS'] },
  { category: 'Tools', items: ['Git', 'Docker', 'Linux', 'Postman', 'AWS', 'AI Agents'] },
  { category: 'Concepts', items: ['Data Structures & Algorithms', 'System Design Basics', 'RESTful Architecture'] },
];

export const exploring = [
  'AI Agents, LLM, RAG',
  'System Design & Data Structures and Algorithms',
  'FastAPI & Python Backend Development',
  'Building full-stack projects',
];

export const experiences = [
  {
    role: 'Software Engineer',
    company: 'Develop For Good',
    location: 'Mountain View, CA',
    dates: 'Oct 2025 – Present',
    bullets: [
      'Live: https://www.accesstoexcessfood.org',
      'Led end-to-end development of a food recovery platform (React, Python, FastAPI, Vercel) serving Ohio organizations, shipping from zero to production in 3 months.',
      'Designed a headless CMS architecture using Airtable as a dynamic data layer, eliminating client dependency on engineers for content updates and cutting change request turnaround from days to minutes.',
      'Drove post-launch growth to 25+ MAU(Monthly Active Users) within 2 weeks by integrating Google Analytics to identify friction points and iterate on UX.'
    ],
    tech: ['React', 'Python', 'Vercel', 'Google Analytics', 'AI'],
  },
  {
    role: 'Backend Software Engineer Intern',
    company: 'Rajant Corporation',
    location: 'Malvern, PA',
    dates: 'Mar 2023 – Sep 2023',
    bullets: [
      'Identified CockroachDB as a latency bottleneck for massive time-series health data; researched, evaluated, and migrated to InfluxDB, reducing query latency ∼6x (350–500ms → 50–90ms) and improving system scalability and reliability.',
      'Designed a RESTful API (Python/FastAPI, Docker) with 10+ endpoints supporting multi-resolution health data aggregations (daily, weekly, monthly, 6-month), ingesting 5 wearable health measurements and enabling integration with hospital records and the internal AI platform.',
      'Automated a real-time file sync pipeline in Python that watched a local directory and propagated changes to MinIO S3 cloud storage automatically, eliminating 5+ hours of manual work per week.',
    ],
    tech: ['Python', 'FastAPI', 'InfluxDB', 'Docker'],
  },
  {
    role: 'Product Development Engineer Intern',
    company: 'Pression LLC',
    location: 'Coatesville, PA',
    dates: 'Mar 2022 – Sep 2022',
    bullets: [
      'Automated the test data pipeline in Python for the company’s medical device, reducing file storage costs by 25% and cutting data loss by 50%.',
      'Led the medical device transition from an unstable v1 prototype to a reliable manufacturing-ready v2, integrating embedded C firmware with system UI software, achieved zero field failures across all test scenarios, and enabled the company to pursue FDA clearance filing.',
      "Refactored and debugged 2000+ lines of broken UI code and authored comprehensive system documentation coveringarchitecture, data flows, and component design to support long-term maintainability.",
    ], 
    tech: ['Python', 'C', 'Git'],
  },
];

export const projects = [
    {
    name: 'GitHub Issue Root Cause Agent',
    tech: 'Python, FastAPI, ChromaDB, Streamlit, Groq API, sentence-transformers',
    bullets: [
      'Built an end-to-end RAG (Retrieval-Augmented Generation) pipeline that ingests GitHub issues, generates vector embeddings using all-MiniLM-L6-v2, and stores them in a ChromaDB vector store for persistent semantic search.',
      'Engineered a semantic retrieval system using cosine similarity to surface the top-3 most relevant past issues for any new bug report, achieving 89% retrieval precision across paraphrased query variants in end-to-end evaluation.',
      'Integrated Llama 3.3 70b via Groq API with a structured prompt template grounded in retrieved context, returning actionable root cause analysis and fix suggestions; exposed as a REST API via FastAPI with a Streamlit demo UI.',
    ],
    github: 'https://github.com/mounica-000/github-issue-agent',
  },
  {
    name: 'MyDailyTime',
    tech: 'Python, FastAPI, PostgreSQL, JWT Auth',
    bullets: [
      'Developing a RESTful backend API to track daily activities and analyze time usage patterns.',
      'Implementing JWT authentication and analytics endpoints with PostgreSQL integration for persistent storage.',
      'Deploying on AWS cloud using Docker and Nginx for scalable hosting and improved API performance.',
    ],
    github: 'https://github.com/mounica-000/MyDailyTime',
  },
  {
    name: 'Virtual Pet',
    tech: 'TypeScript, React, HTML/CSS, MySQL, Node.js, WebSockets',
    bullets: [
      'Built a full-stack interactive pet simulator with real-time chat and persistent sessions using WebSockets.',
      'Generated normalized SQL database schemas and data validation, ensuring smooth scalable performance.',
      'Deployed on Linode cloud server with React, TypeScript, and MySQL.',
    ],
    github: 'https://github.com/mounica-000/Virtual-Pet-Forum',
  },
  {
    name: 'Bank System',
    tech: 'Java, JUnit, Git, CI/CD, OOP',
    bullets: [
      'Created a bank account management system supporting savings and checking accounts with APR calculations.',
      'Applied TDD with unit, integration, and system testing frameworks to deliver reliable and quality code.',
      'Set up Git-based CI/CD pipelines to automate builds, testing, and secure deployment workflows.',
    ],
    github: null,
  },
];

export const education = {
  university: 'Drexel University',
  degree: 'Bachelor of Science in Computer Science',
  minor: 'Minor in Mathematics',
  location: 'Philadelphia, PA',
  dates: 'Sep 2020 – Jun 2025',
  courses: [
    'Data Structures and Algorithms',
    'Computer Architecture',
    'Software Engineering',
    'Databases',
    'Advanced Web Development',
  ],
};
