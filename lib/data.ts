import littlelemonImg from "@/public/littlelemon.png";
import newsappImg from "@/public/newsapp.png";
import todoappImg from "@/public/todoapp.png";
import { createElement } from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaLaptopCode, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdVolunteerActivism } from 'react-icons/md';

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
      "I am currently pursuing a Bachelor's degree in Computer Science, in my 4th year with a CGPA of 3.5. My academic journey has equipped me with a strong foundation in computer science, enabling me to excel in various technical domains.",
    icon: createElement(LuGraduationCap),
    date: "2020 - 2024",
  },
  {
    title: "Web Developer Intern (Remote)",
    location: "DevLinx Technologies, Lahore, Pakistan",
    description:
      "I served as a remote web developer intern at DevLinx Technologies. I contributed to the 'FreeLancer Website' project by developing the backend using Node.js, Express, and MongoDB. I assisted the team in integrating the backend with the frontend, offering guidance on React since I was the sole React expert in the team.",
    icon: createElement(CgWorkAlt),
    date: "August 2023",
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
    icon: createElement(FaLaptopCode),
    date: "April 2024 - May 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Lahore, Pakistan",
    description:
      "I am currently working as a freelance full-stack developer with expertise in React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. I am open to exploring full-time job opportunities.",
    icon: createElement(FaReact),
    date: "2023 - Present",
  },
] as const;


export const projectsData = [
  {
    title: "Little Lemon",
    description:
      "Little Lemon is a restaurant reservation app that allows users to book tables. It serves as the capstone project for Meta's Front-End Developer Certificate on Coursera.",
    tags: ["React", "React Icons", "Hooks", "Context API"],
    imageUrl: littlelemonImg,
  },
  {
    title: "Todo App",
    description:
      "Todo App is a task management application that enables users to create accounts, log in, and perform CRUD operations on their tasks. It leverages Redux for state management and MongoDB as the database.",
    tags: ["React", "Redux", "Express", "MongoDB"],
    imageUrl: todoappImg,
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
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Flutter",
  "Firebase",
  "Express",
  "SQL",
  "Python",
  "Pandas",
  "Framer Motion",
] as const;
