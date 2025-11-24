export const profile = {
  name: 'Nav.dev',
  roleLabels: [
    'QA Technical',
    'Software Developer',
    'IT Support Specialist',
    'Project Manager',
    'UI/UX Designer',
  ],
  resumeUrl: 'https://www.myfolio.ph/resume/I2ziM2yH8i',
}

export const navLinks = [
  { label: 'Expertise', href: '#roles' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  badge: 'Ready for Internship · Open to Collaborate',
  headline:
    'Hi!, I\'m Kurt Bryan C. Navaja',
  description:
    "I thrive in roles that blend development, quality assurance, design, and support. Whether writing code, improving user flows, testing edge cases, or aligning project tasks, I keep teams moving forward with fewer blockers and a clearer path from idea to release.",
  ctas: {
    primary: { label: 'Explore Projects', href: '#projects' },
    secondary: { label: "Let's Talk", href: 'mailto:bryannavaja123@gmail.com' },
  },
}

export const quickFacts = [
  {
    heading: 'Mission',
    detail: [
      'Growing as a developer while delivering solutions that are simple, helpful, and genuinely human-centered.',
    ],
  },
  {
    heading: 'Toolbox',
    detail: [
      'Frontend: ReactJs · Vite · Tailwind',
      'Quality: Postman · GitHub Actions',
      'Collaboration: Figma · Canva · Github',
    ],
  },
  {
    heading: 'Location',
    detail: [
      '183-E Salvador Ext. Labangon, Cebu City, Philippines',
    ],
  },
]

export const roles = [
  {
    title: 'QA Technical',
    headline: 'Keeps release risk visible and managed.',
    description:
      'Designs lean manual and automated checks, shares clear findings, and helps teams decide when software is ready.',
    focus: ['API & UI regression suites', 'Test planning & execution', 'Quality dashboards & reporting'],
  },
  {
    title: 'Software Developer',
    headline: 'Ships well-structured features on modern stacks.',
    description:
      'Builds React front ends and lightweight services, reviews pull requests, and keeps performance in mind.',
    focus: ['React & Vite delivery', 'Reusable component design', 'CI/CD pipelines'],
  },
  {
    title: 'IT Support Specialist',
    headline: 'Keeps teammates productive day to day.',
    description:
      'Troubleshoots hardware and software issues, documents fixes in plain language, and scripts repeatable tasks.',
    focus: ['Incident triage & follow-up', 'Knowledge base articles', 'Automation scripts'],
  },
  {
    title: 'Project Manager',
    headline: 'Helps teams agree on scope and next steps.',
    description:
      'Facilitates planning sessions, keeps tasks visible, and communicates progress with stakeholders.',
    focus: ['Sprint planning & retros', 'Risk & dependency tracking', 'Status reporting'],
  },
  {
    title: 'UI/UX Designer',
    headline: 'Designs interfaces that are easy to learn.',
    description:
      'Maps user flows, iterates on Figma prototypes with feedback, and maintains shared design tokens.',
    focus: ['Wireframes & prototypes', 'Usability feedback loops', 'Design system tokens'],
  },
]

export const projects = [
  {
    title: 'Gradify',
    year: '2025',
    role: 'QA Technical · Developer',
    description:
      'Gradify is an innovative web-based academic performance tracking system designed to streamline grade management for teachers and provide students with real-time feedback and insights.',
    stack: ['ReactJs', 'Springboot', 'Java', 'GitHub Actions', 'PostgreSQL'],
    link: 'https://gradify-three.vercel.app/',
    linkLabel: 'Open application',
  },
  {
    title: 'FitFlow',
    year: '2025',
    role: 'Software Developer · Project Manager',
    description:
      'FitFlow is a personalized fitness platform that securely manages users, generates custom workout and meal plans, tracks activity and progress, sends timely reminders, and adapts to individual preferences through comprehensive profile management.',
    stack: ['ReactJs', 'Springboot', 'Java', 'MySQL Workbench', 'Tailwind CSS'],
    link: 'https://fitflow0.netlify.app/login',
    linkLabel: 'Open application',
  },
  {
    title: 'BodyBoost',
    year: '2024',
    role: 'UI/UX Designer · Software Developer · Project Manager' ,
    description:
      'BodyBoost is a fitness app that enables users to register securely, manage personal profiles, and receive personalized workout plans and calorie-based meal suggestions.',
    stack: ['Figma', 'Python', 'HTML & CSS', 'JavaScript', 'MySQL XAMPP'],
    link: 'https://github.com/kurt-navaja/BodyBoost_IM2.git',
    linkLabel: 'View Repository',
  },
  {
    title: 'Creative Clarity',
    year: '2024',
    role: 'UI/UX Designer · Full Stack Developer',
    description:
      'Creative Clarity is an academic organizer that helps users manage tasks, track courses, and monitor academic progress. It features secure user authentication, to-do lists with due dates, progress tracking, grade reporting with dashboards, and course-specific notes. The system also supports uploading and archiving images and searching for stored files, making academic organization easier and more efficient.',
    stack: ['Figma', 'ReactJs', 'Springboot', 'Postman', 'MySQL Workbench'],
    link: 'https://github.com/Ban-Coca/CreativeClarity.git',
    linkLabel: 'View Repository',
  },
]

export const skills = {
  Engineering: [
    'React (Vite, Tailwind) delivery with reusable UI modules',
    'Spring Boot REST API integration and schema collaboration',
    'PostgreSQL/MySQL tuning drawn from Gradify and FitFlow builds',
    'Git/GitHub workflows with branch discipline and code reviews',
  ],
  'Quality & Delivery': [
    'Exploratory charters plus smoke automation for Gradify releases',
    'Postman collections and API contract validation',
    'GitHub Actions pipelines with QA gates and regression tracking',
    'Risk-based test planning, execution, and release note prep',
    'Sprint reviews and retros focused on measurable follow-through',
  ],
  'Design & Collaboration': [
    'Figma prototypes wired to production tokens and typography scale',
    'UX writing and moderated testing loops for Creative Clarity',
    'Stakeholder workshops aligning backlog with user outcomes',
    'Support playbooks, onboarding checklists, and knowledge bases',
    'Spreadsheet/ClickUp routines keeping cross-functional work visible',
  ],
}

export const contact = {
  badge: "Let's Collaborate",
  heading: 'Ready to drive quality, ship features, and delight users?',
  description:
    "I'm actively seeking an internship where I can contribute across QA, development, support operations, project delivery, and design. Let's build something remarkable together.",
  links: [
    { label: 'bryannavaja123@gmail.com', href: 'mailto:bryannavaja123@gmail.com', icon: '✉' },
    {
      label: 'linkedin.com/in/kurt-bryan-navaja',
      href: 'https://www.linkedin.com/in/kurt-bryan-navaja-5ba2a9386/',
      icon: 'in',
    },
    { label: 'github.com/kurt-navaja', href: 'https://github.com/kurt-navaja', icon: '◧' },
  ],
}
