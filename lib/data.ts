import carcareproImg from "@/public/carcarepro.png";
import littlelemonImg from "@/public/littlelemon.png";
import newsappImg from "@/public/newsapp.png";
import todoappImg from "@/public/todoapp.png";
import { createElement } from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaLaptopCode, FaReact } from "react-icons/fa";
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
      "I have completed a Bachelor's degree in Computer Science with a CGPA of 3.48. My academic journey has equipped me with a strong foundation in computer science, enabling me to excel in various technical domains.",
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
    icon: createElement(FaLaptopCode),
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
    title: "Full-Stack Developer",
    location: "Lahore, Pakistan",
    description:
      "With expertise in React.js, Next.js, and MERN Stack for web development, and Flutter and React Native for mobile development, I am actively seeking full-time opportunities to further hone my skills and contribute to innovative projects.",
    icon: createElement(FaReact),
    date: "Augest 2024 - Present",
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
  {
    title: "CarCare Pro",
    description:
      "CarCare Pro is a mobile app for managing car maintenance. It helps users track service history, choose workshops, and set reminders for upcoming services. The app also allows profile creation for cars, access control, and ratings for users and workshops.",
    tags: ["Flutter", "Firebase", "Figma", "Google Maps API"],
    imageUrl: carcareproImg,
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
  "React Native",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "Bootstrap",
  "Chakra UI",
  "Material UI",
  "Prisma",
  "Drizzle",
  "SQL",
  "MongoDB",
  "Redux",
  "Flutter",
  "Firebase",
  "SQL",
  "PostgreSQL",
  "Python",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Framer Motion",
] as const;
