import { createElement } from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import littlelemonImg from "@/public/littlelemon.png";
import todoappImg from "@/public/todoapp.png";
import newsappImg from "@/public/newsapp.png";

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
      "Currently pursuing a Bachelor's degree in Computer Science, currently in the 4th year with a CGPA of 3.5. Completed courses including Web Application Development, Data Structures and Algorithms, Object-Oriented Programming, Database Systems, Operating Systems, Computer Networks, Software Engineering, Computer Architecture and Organization, and more.",
    icon: createElement(LuGraduationCap),
    date: "2020 - 2024",
  },
  {
    title: "Web Developer Intern (Remote)",
    location: "DevLinx Technologies, Lahore, Pakistan",
    description:
      "Served as a remote web developer intern at DevLinx Technologies. Contributed to the 'FreeLancer Website' project by developing the backend using Node.js, Express, and MongoDB. Assisted the team in integrating the backend with the frontend, offering guidance on React since I was the sole React expert in the team.",
    icon: createElement(CgWorkAlt),
    date: "August 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Lahore, Pakistan",
    description:
      "Currently working as a freelance full-stack developer with expertise in React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. Open to exploring full-time job opportunities.",
    icon: createElement(FaReact),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "LittleLemon",
    description:
      "LittleLemon is a restaurant reservation app that allows users to book tables. It serves as the capstone project for Meta's Front-End Developer Certificate on Coursera.",
    tags: [
      "React",
      "JavaScript",
      "React Router Dom",
      "React Icons",
      "Hooks",
      "Context API",
    ],
    imageUrl: littlelemonImg,
  },
  {
    title: "TodoApp",
    description:
      "TodoApp is a task management application that enables users to create accounts, log in, and perform CRUD operations on their tasks. It leverages Redux for state management and MongoDB as the database. Developed as a semester project for the university course Web Application Development.",
    tags: [
      "React",
      "JavaScript",
      "React Router Dom",
      "React Icons",
      "Tailwind",
      "Redux",
      "Express",
      "MongoDB",
    ],
    imageUrl: todoappImg,
  },
  {
    title: "NewsApp",
    description:
      "NewsApp is a news aggregator application that provides users with the latest news from various categories. It utilizes the News API to fetch data and incorporates infinite scroll for seamless news browsing. Users can select different categories from the navbar.",
    tags: [
      "React",
      "JavaScript",
      "React Router Dom",
      "React Icons",
      "Bootstrap",
      "News API",
      "React Infinite Scroll",
    ],
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
