import autohub360Img from "@/public/auto-hub360.webp";
import blackpearlsImg from "@/public/black-pearls.webp";
import carcareproImg from "@/public/car-care-pro.webp";
import easegptImg from "@/public/ease-gpt.webp";
import littlelemonImg from "@/public/little-lemon.webp";
import mailerImg from "@/public/mailer.webp";
import newsappImg from "@/public/news-app.webp";
import saafImg from "@/public/saaf.webp";
import sweepstakesAdminImg from "@/public/sweep-stakes-admin.webp";
import sweepstakesImg from "@/public/sweep-stakes.webp";
import trendtaleImg from "@/public/trend-tale.webp";
import { createElement } from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaHtml5, FaLaptopCode } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdVolunteerActivism } from "react-icons/md";
import { TbBrandPepsi } from "react-icons/tb";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor's Degree in Computer Science",
    location: "University of Central Punjab, Lahore, Pakistan",
    description:
      "I have completed a Bachelor's degree in Computer Science with a CGPA of 3.42. My academic journey has equipped me with a strong foundation in computer science, enabling me to excel in various technical domains.",
    icon: createElement(LuGraduationCap),
    date: "October 2020 - July 2024",
  },
  {
    title: "Web Developer Intern",
    location: "DevLinx Technologies, Lahore, Pakistan",
    description:
      "I served as a remote web developer intern at DevLinx Technologies. I led a team of interns to create a CRUD website using the MERN stack. I set up user authentication with JWT-based security, developed RESTful APIs with Express.js and MongoDB schemas, and achieved responsive design with CSS flexbox and media queries. I also used React Router for dynamic navigation and Redux for state management.",
    icon: createElement(CgWorkAlt),
    date: "August 2023 - September 2023",
  },
  {
    title: "Fundraising Volunteer",
    location: "Indus Hospital and Health Network (IHHN), Lahore, Pakistan",
    description:
      "I spearheaded community engagement efforts by distributing informational flyers in various locations, including upscale areas, malls, markets, and mosques. I collaborated with a diverse team of volunteers to ensure maximum outreach and impact, increasing community awareness about the significance of Zakat during Ramzan.",
    icon: createElement(MdVolunteerActivism),
    date: "March 2024 - April 2024",
  },
  {
    title: "Trainee Front-End Developer",
    location: "Programmers Force, Lahore, Pakistan",
    description:
      "I completed hands-on training in HTML, CSS, and JavaScript, building a strong foundation in web development. I gained a thorough understanding of frontend frameworks and libraries, including React, Angular, and Vue. I designed responsive and cross-browser compatible websites, implementing best practices in UI/UX principles. I collaborated in a team-based learning environment, enhancing teamwork and communication skills, and received guidance from expert instructors with industry experience.",
    icon: createElement(FaHtml5),
    date: "April 2024 - May 2024",
  },
  {
    title: "Supply Chain Intern",
    location: "PepsiCo Pakistan, Lahore, Pakistan",
    description:
      "Worked on the project 'Spares Mapping & Criticality Analysis', which involved categorizing the spares and operating supplies based on HFM, ABC & XYZ Analysis, developing the inventory projection for three years, and deep diving into the inventory to identify unbadging, localization, and vendor import potential.",
    icon: createElement(TbBrandPepsi),
    date: "July 2024 - August 2024",
  },
  {
    title: "Associate Software Engineer",
    location: "Dexterz Sol., Lahore, Pakistan",
    description:
      "At Dexterz Sol., I played a key role in building and optimizing backend systems using Node.js and Express.js while integrating these solutions with frontend frameworks like React.js and Next.js to deliver robust user experiences. I collaborated with cross-functional teams to design and implement new features that enhanced both functionality and performance. Additionally, I developed and maintained RESTful APIs, conducted regular code reviews, and optimized code for improved performance and security. This role allowed me to leverage multiple tech stacks and contribute significantly to continuous process improvements.",
    icon: createElement(FaLaptopCode),
    date: "September 2024 - February 2025",
  },
] as const;

export const projectsData = [
  {
    title: "TrendTale",
    description:
      "A web and mobile application that scrapes trending topics from Google Trends for YouTube content generation. Uses OpenAI's GPT-4 API to create titles, descriptions, content, video, and thumbnails. Features email notifications and content editing capabilities.",
    tags: [
      "FastAPI",
      "React",
      "React Native",
      "Tailwind CSS",
      "Framer Motion",
      "OpenAI API",
      "BeautifulSoup",
    ],
    imageUrl: trendtaleImg,
  },
  {
    title: "Ease-GPT Chrome Extension",
    description:
      "A Chrome extension enhancing ChatGPT with smart search, tabbed chats, custom variables, and premium features. Includes Google Analytics integration, advanced search capabilities, and context persistence across sessions.",
    tags: ["Chrome Extension", "JavaScript", "Google Analytics", "Google Pay"],
    imageUrl: easegptImg,
  },
  {
    title: "Sweepstakes Betting Website",
    description:
      "A college basketball prediction platform with points-based betting, featuring Stripe and Coinbase payment integrations. Built with Django backend and React frontend, offering comprehensive betting options in a sweepstakes format.",
    tags: [
      "Django",
      "React",
      "SQL",
      "Tanstack Query",
      "Chart.js",
      "Firebase",
      "Stripe",
      "Coinbase",
      "Tailwind CSS",
    ],
    imageUrl: sweepstakesImg,
  },
  {
    title: "Sweepstakes Admin Panel",
    description:
      "A comprehensive admin dashboard for the Sweepstakes betting platform. Features user management, bet tracking, payment processing, and analytics. Built with React and Material UI for the frontend, with secure admin authentication and role-based access control.",
    tags: [
      "React",
      "Tailwind CSS",
      "ShadCn",
      "Redux",
      "Chart.js",
      "Django Admin",
      "JWT Auth",
    ],
    imageUrl: sweepstakesAdminImg,
  },
  {
    title: "Black Pearl Website Redesign",
    description:
      "Transformed a MEP contracting firm's website from WordPress to React, implementing bilingual support (English/Arabic) with i18next. Enhanced performance and user experience through modern UI practices and animations.",
    tags: ["React", "Tailwind CSS", "i18next", "React Icons"],
    imageUrl: blackpearlsImg,
  },
  {
    title: "Scottish Ashna Ashri Foundation",
    description:
      "Developed an admin panel with Express.js backend and MongoDB database, featuring e-library, E-Quran, and Islamic calendar. Integrated multiple payment methods and prayer time calculations based on user location.",
    tags: [
      "React",
      "Express.js",
      "MongoDB",
      "GridFS",
      "Stripe",
      "Session Auth",
    ],
    imageUrl: saafImg,
  },
  {
    title: "AutoHub360",
    description:
      "A Next.js application for car accessories search and auctions. Features real-time updates with Socket.io, web scraping with Cheerio and Puppeteer, and comprehensive auction management system. Deployed on Digital Ocean with Nginx.",
    tags: [
      "Next.js",
      "Socket.io",
      "Cheerio",
      "Puppeteer",
      "Mongoose",
      "Digital Ocean",
      "Nginx",
    ],
    imageUrl: autohub360Img,
  },
  {
    title: "Sirius.Net.Co Mailer",
    description:
      "An email campaign manager built with Next.js and PostgreSQL, featuring two-factor authentication and admin approval system. Includes React Quill for email editing and supports Excel-based recipient list management.",
    tags: [
      "Next.js",
      "NextAuth",
      "Prisma",
      "PostgreSQL",
      "React Quill",
      "Nodemailer",
    ],
    imageUrl: mailerImg,
  },
  {
    title: "CarCare Pro",
    description:
      "CarCare Pro is a mobile app for managing car maintenance. It helps users track service history, choose workshops, and set reminders for upcoming services. The app also allows profile creation for cars, access control, and ratings for users and workshops.",
    tags: ["Flutter", "Firebase", "Provider", "Figma", "Google Maps API"],
    imageUrl: carcareproImg,
  },
  {
    title: "Little Lemon",
    description:
      "Little Lemon is a restaurant reservation app that allows users to book tables. It serves as the capstone project for Meta's Front-End Developer Certificate on Coursera.",
    tags: [
      "React",
      "Chakra UI",
      "Formik",
      "React Icons",
      "Hooks",
      "Context API",
    ],
    imageUrl: littlelemonImg,
  },
  {
    title: "News App",
    description:
      "News App is a news aggregator application that provides users with the latest news from various categories. It utilizes the News API to fetch data and incorporates infinite scroll for seamless news browsing.",
    tags: ["React", "Bootstrap", "News API", "React Infinite Scroll"],
    imageUrl: newsappImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JSX",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "Socket.IO",
  "Cheerio",
  "Puppeteer",
  "React Native",
  "Flutter",
  "Redux",
  "Git",
  "GitHub",
  "Bootstrap",
  "Chakra UI",
  "Material UI",
  "Shadcn UI",
  "Tailwind CSS",
  "Framer Motion",
  "Three.js",
  "Three React Fiber",
  "Three React Drei",
  "Prisma",
  "Drizzle",
  "SQL",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "FastAPI",
  "Python",
  "Pandas",
  "NumPy",
  "Matplotlib",
] as const;
