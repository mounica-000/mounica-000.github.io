export const personalInfo = {
  name: 'Mounica Paladugu',
  role: 'Software Engineer',
  tagline: 'Curious engineer who learns fast, builds quickly, and iterates until it works.',
  about: "I'm a curious software engineer who enjoys learning quickly and turning ideas into working software. I like breaking down complex problems, building practical solutions, and improving them through iteration. Most of my time is spent strengthening and revising my foundations in data structures, system design, and full-stack development while building projects to apply what I learn.",
  email: 'meismounica079@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mounica-paladugu',
  github: 'https://www.github.com/mounica-000',
  resumePath: '/resume.pdf',
};

export const skills = [
  { category: 'Languages', items: ['Python', 'Java', 'SQL'] },
  { category: 'Backend', items: ['FastAPI', 'REST APIs'] },
  { category: 'Frontend', items: ['React', 'JavaScript', 'HTML', 'CSS'] },
  { category: 'Tools', items: ['Git', 'Docker', 'Linux', 'Postman'] },
  { category: 'Concepts', items: ['Data Structures & Algorithms', 'System Design Basics', 'RESTful Architecture'] },
];

export const exploring = [
  'Data Structures & Algorithms (LeetCode)',
  'System Design Fundamentals',
  'FastAPI & Python Backend Development',
  'Building full-stack projects',
];

export const experiences = [
  {
    role: 'Software Engineer',
    company: 'Develop For Good',
    location: 'Remote, CA',
    dates: 'Oct 2025 – Present',
    bullets: [
      'Built and shipped a full-stack food recovery platform for Ohio organizations using React and Python, deploying on Vercel and integrating Google Analytics to track user activity and platform engagement.',
      'Led a team of 5 engineers through agile development, authored the PRD and technical roadmap, and presented the final product to 10+ industry engineers, earning recognition for clear product vision and user-centered design.',
    ],
    tech: ['React', 'Python', 'Vercel', 'Google Analytics'],
  },
  {
    role: 'Backend Software Engineer Intern',
    company: 'Rajant Corporation',
    location: 'Malvern, PA',
    dates: 'Mar 2023 – Sep 2023',
    bullets: [
      'Designed a backend RESTful API (Python/FastAPI, InfluxDB, Docker) to ingest and standardize wearable health data, enabling compatibility with hospital records and company AI platform.',
      'Optimized queries and database schema to reduce data retrieval times to under 50ms and improve scalability.',
      'Cut 5 hours of manual work per week by independently identifying and automating a file ingestion pipeline into cloud storage.',
    ],
    tech: ['Python', 'FastAPI', 'InfluxDB', 'Docker'],
  },
  {
    role: 'Product Development Engineer Intern',
    company: 'Pression LLC',
    location: 'Coatesville, PA',
    dates: 'Mar 2022 – Sep 2022',
    bullets: [
      'Automated the test data pipeline in Python, reducing storage costs by 25% and minimizing data loss by 50%.',
      'Led the transition of a medical device from unstable v1 prototype to manufacturing-ready v2, integrating embedded C firmware with system UI software and testing to ensure reliability.',
      'Refactored and fixed 2000+ lines of broken UI code and wrote comprehensive documentation to improve maintainability and long-term scalability.',
      "Established the team's first Git repository and issue tracking system, then onboarded the next intern by documenting all system components, data flows, and code architecture.",
    ],
    tech: ['Python', 'C', 'Git'],
  },
];

export const projects = [
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
    'Software Engineering',
    'Databases',
    'Advanced Web Development',
  ],
};
