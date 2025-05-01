export interface Tag {
  name: string;
  path: string;
}

export interface Project {
  title: string;
  description: string;
  subDescription: string[];
  href: string;
  image: string;
  tags: Tag[];
}

export interface Social {
  name: string;
  href: string;
  icon: string;
}

export interface Experience {
  title: string;
  job: string;
  date: string;
  contents: string[];
}

export interface Review {
  name: string;
  username: string;
  body: string;
  img: string;
}

export const projects = [
  {
    title: "Threado Studio",
    description:
      "A web-based 3D clothing customizer enabling users to design apparel by applying and manipulating decals on 3D models.",
    subDescription: [
      "Built with Next.js and integrated Three.js using react-three-fiber for 3D rendering.",
      "Implemented real-time image/text decal placement with drag, resize, and rotate functionalities.",
      "Managed application state using Zustand for reactive and modular state management.",
      "Styled with Tailwind CSS, providing a modern and responsive UI.",
      "Included interactive dashboard with color pickers and text formatting tools for personalization.",
    ],
    href: "",
    image: "/assets/projects/threado.webp",
    tags: [
      { name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { name: "Three.js", path: "/assets/logos/threejs.svg" },
      { name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { name: "Zustand", path: "/assets/logos/zustand.svg" },
    ],
  },
  {
    title: "TrendTale",
    description:
      "A web/mobile app that scrapes Google Trends and generates YouTube content using GPT-4.",
    subDescription: [
      "Built with FastAPI and React for the web, React Native for mobile.",
      "Used OpenAI GPT-4 API for generating YouTube content and metadata.",
      "Integrated advanced filters and authentication system.",
      "Styled with Tailwind CSS, used Axios and Framer Motion for UI animations.",
    ],
    href: "",
    image: "/assets/projects/trend-tale.webp",
    tags: [
      { name: "React", path: "/assets/logos/react.svg" },
      { name: "FastAPI", path: "/assets/logos/fastapi.svg" },
      { name: "React Native", path: "/assets/logos/expo.svg" },
      { name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { name: "GPT-4", path: "/assets/logos/chatgpt.svg" },
    ],
  },
  {
    title: "Ease-GPT Chrome Extension",
    description:
      "A Chrome extension enhancing ChatGPT with smart features and premium options.",
    subDescription: [
      "Implemented custom variables, smart search, and tabbed chat UI.",
      "Integrated Google Analytics for usage tracking and QA.",
      "Added in-app purchases for premium features and context persistence.",
    ],
    href: "",
    image: "/assets/projects/ease-gpt.webp",
    tags: [
      { name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { name: "Chrome Extension", path: "/assets/logos/chrome.svg" },
      { name: "Google Analytics", path: "/assets/logos/googleanalytics.svg" },
    ],
  },
  {
    title: "Sweepstakes Betting Website",
    description:
      "A prediction market platform for college basketball with sweepstakes-style betting.",
    subDescription: [
      "Built with React and Tailwind with Shadcn UI for responsive design.",
      "React frontend using TanStack Query, Chart.js, and Firebase Auth.",
      "Integrated Stripe and Coinbase for fiat and crypto payments.",
    ],
    href: "",
    image: "/assets/projects/sweep-stakes.webp",
    tags: [
      { name: "React", path: "/assets/logos/react.svg" },
      { name: "TanStack Query", path: "/assets/logos/tanstackquery.svg" },
      { name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { name: "Stripe", path: "/assets/logos/stripe.svg" },
      { name: "Firebase", path: "/assets/logos/firebase.svg" },
    ],
  },
  {
    title: "Sweepstakes Admin Panel",
    description:
      "Admin dashboard for managing bets, users, and analytics in the sweepstakes platform.",
    subDescription: [
      "Implemented role-based admin access with Django Admin and SQL for data management.",
      "Built real-time analytics dashboards using Chart.js.",
      "Integrated Firebase Auth for secure admin login.",
    ],
    href: "",
    image: "/assets/projects/sweep-stakes-admin.webp",
    tags: [
      { name: "Django", path: "/assets/logos/django.svg" },
      { name: "React", path: "/assets/logos/react.svg" },
      { name: "Chart.js", path: "/assets/logos/chartjs.svg" },
      { name: "Firebase", path: "/assets/logos/firebase.svg" },
    ],
  },
  {
    title: "AutoHub360",
    description:
      "Next.js application for car accessories search and auctions with real-time updates.",
    subDescription: [
      "Scraped car accessory data using Cheerio and Puppeteer, caching results.",
      "Developed auction system with Socket.io for live bidding and notifications.",
      "Deployed on DigitalOcean Droplet with Nginx and SSL configuration.",
    ],
    href: "",
    image: "/assets/projects/auto-hub360.webp",
    tags: [
      { name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { name: "Socket.io", path: "/assets/logos/socketio.svg" },
      { name: "Puppeteer", path: "/assets/logos/puppeteer.svg" },
      { name: "Cheerio", path: "/assets/logos/cheerio.svg" },
    ],
  },
  {
    title: "Scottish Ashna Ashri Foundation",
    description:
      "Admin panel and backend for an Islamic non-profit with media library and donation features.",
    subDescription: [
      "Built with React and Express.js, using MongoDB and GridFS for media storage.",
      "Integrated Stripe, Google Pay, and Apple Pay for donations.",
      "Added Islamic calendar and prayer time calculations based on user location.",
    ],
    href: "",
    image: "/assets/projects/saaf.webp",
    tags: [
      { name: "React", path: "/assets/logos/react.svg" },
      { name: "Express.js", path: "/assets/logos/expressjs.svg" },
      { name: "MongoDB", path: "/assets/logos/mongodb.svg" },
      { name: "Stripe", path: "/assets/logos/stripe.svg" },
    ],
  },
  {
    title: "Black Pearls Website Redesign",
    description:
      "A project to transition a MEP contracting firm's website from WordPress to React, enhancing performance, animations, and localization in English and Arabic using i18next.",
    subDescription: [
      "Migrated site from WordPress to React and Tailwind CSS for improved performance.",
      "Implemented animations using Framer Motion for engaging UI transitions.",
      "Configured localization support in English and Arabic via i18next.",
      "Utilized React Icons for interactive elements and modern UI practices.",
    ],
    href: "",
    image: "/assets/projects/black-pearls.webp",
    tags: [
      { name: "React", path: "/assets/logos/react.svg" },
      { name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { name: "i18next", path: "/assets/logos/i18next.svg" },
      { name: "Framer Motion", path: "/assets/logos/motion.svg" },
    ],
  },
  {
    title: "Sirius.Net.Co Mailer",
    description:
      "Email campaign manager with bulk email, template editor, and secure login.",
    subDescription: [
      "Built with Next.js, Prisma, PostgreSQL, and NextAuth.",
      "Used React Quill for email editing and React Email for templating.",
      "Integrated two-factor authentication and Excel file import for recipient list.",
    ],
    href: "",
    image: "/assets/projects/mailer.webp",
    tags: [
      { name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { name: "Prisma", path: "/assets/logos/prisma.svg" },
      { name: "PostgreSQL", path: "/assets/logos/postgresql.svg" },
      { name: "React Quill", path: "/assets/logos/reactquill.svg" },
    ],
  },
  {
    title: "CarCare Pro",
    description:
      "A mobile application aimed at revolutionizing vehicle maintenance for car owners.",
    subDescription: [
      "Manages service history, workshop recommendations, and secure history sharing.",
      "Developed using Flutter and Firebase for Android platform.",
      "Integrated Google Maps to locate workshops and predict maintenance with ML.",
      "Designed a user-friendly dashboard for maintenance reminders.",
    ],
    href: "",
    image: "/assets/projects/car-care-pro.webp",
    tags: [
      { name: "Flutter", path: "/assets/logos/flutter.svg" },
      { name: "Firebase", path: "/assets/logos/firebase.svg" },
      { name: "Google Maps", path: "/assets/logos/googlemaps.svg" },
      { name: "Machine Learning", path: "/assets/logos/ai.svg" },
    ],
  },
];

export const socials = [
  {
    name: "GitHub",
    href: "https://github.com/romanfarooq",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/roman-farooq",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/roman_farooq",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Associate Software Engineer",
    job: "Dexterz Sol.",
    date: "Sep 2024 - Feb 2025",
    contents: [
      "Built and optimized backend systems using Node.js and Express.js.",
      "Integrated frontend frameworks like React.js and Next.js for full-stack solutions.",
      "Collaborated with cross-functional teams to design and implement new features.",
      "Developed and maintained RESTful APIs, enhancing client-server communication.",
      "Improved code performance, security, and maintainability through strategic optimizations.",
    ],
  },
  {
    title: "Supply Chain Intern (Hybrid)",
    job: "PepsiCo Pakistan",
    date: "Jul 2024 - Aug 2024",
    contents: [
      "Performed HFM, ABC, & XYZ analysis to enhance inventory decision-making.",
      "Assisted in data analysis and reporting for key supply chain metrics.",
      "Participated in cross-departmental meetings to understand operational workflows.",
      "Collaborated in building a three-year inventory projection model to assist strategic planning.",
      'Contributed to "Spares Mapping & Criticality Analysis" for optimized inventory classification.',
    ],
  },
  {
    title: "Trainee Front-End Developer",
    job: "Programmers Force",
    date: "Apr 2024 - May 2024",
    contents: [
      "Completed practical training in HTML, CSS, and JavaScript for responsive web design.",
      "Explored modern frameworks including React, Angular, and Vue.",
      "Built cross-browser compatible websites adhering to web standards.",
      "Contributed to team-based projects, improving collaboration and communication skills.",
      "Gained hands-on experience with version control systems like Git.",
    ],
  },
];

export const reviews = [
  {
    name: "Adeel Ahmed",
    username: "@adeel_ahmed23",
    body: "Maintenance reminders and Google Maps integration work flawlessly.",
    img: "https://robohash.org/adeelahmed",
  },
  {
    name: "Mariam Khan",
    username: "@mariam.khan88",
    body: "The admin panel is rock-solid; managing donations and media uploads is easy.",
    img: "https://robohash.org/mariamnk",
  },
  {
    name: "Diego Ramirez",
    username: "@d.ramirez_91",
    body: "GPT-4 content generation blew us away; FastAPI backend and React frontend are clean and fast.",
    img: "https://robohash.org/diegoramirez",
  },
  {
    name: "Clara Dupont",
    username: "@clara_dupontFR",
    body: "AutoHub360 auctions run seamlessly with real-time updates.",
    img: "https://robohash.org/claradupont",
  },
  {
    name: "Ahmed Siddiqui",
    username: "@ahmed_siddiqi_7",
    body: "Mailer transformed our campaigns; bulk sends, templates, and 2FA work perfectly.",
    img: "https://robohash.org/ahmedsiddiqui",
  },
  {
    name: "Aria Thompson",
    username: "@ariathompsonX",
    body: "Admin Panel is intuitive with role-based controls and Chart.js analytics.",
    img: "https://robohash.org/ariathompson",
  },
  {
    name: "Mei Chen",
    username: "@mei.chen_1995",
    body: "Ease-GPT Chrome Extension's smart search and tabbed chats work flawlessly.",
    img: "https://robohash.org/meichen",
  },
  {
    name: "Kai Anderson",
    username: "@kai_anderson_07",
    body: "Portfolio built with Next.js and Tailwind is sleek, responsive, and easy to maintain.",
    img: "https://robohash.org/kaianderson",
  },
];

export const skills = [
  "html5",
  "css3",
  "cplusplus",
  "git",
  "github",
  "stripe",
  "expressjs",
  "javascript",
  "typescript",
  "react",
  "redux",
  "tanstackquery",
  "expo",
  "vitejs",
  "nextjs",
  "nodejs",
  "socketio",
  "flutter",
  "tailwindcss",
  "bootstrap",
  "threejs",
  "material-ui",
  "motion",
  "chartjs",
  "prisma",
  "sql",
  "sqlite",
  "postgresql",
  "mongodb",
  "firebase",
  "flask",
  "fastapi",
  "django",
  "python",
  "docker",
];
