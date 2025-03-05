"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.8);
  return (
    <motion.section
      id="about"
      ref={ref}
      className="mb-28 max-w-3xl scroll-mt-28 text-justify leading-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a graduate with a{" "}
        <span className="font-medium">
          Bachelor of Science degree in Computer Science
        </span>{" "}
        at
        <span className="font-medium">
          {" "}
          University of Central Punjab, Lahore.
        </span>{" "}
        Additionally, I hold a{" "}
        <a
          className="font-medium underline transition-colors duration-200 hover:text-blue-700"
          href="https://www.coursera.org/account/accomplishments/specialization/certificate/XEPX26FAB3MY"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meta Front-End Developer professional certification
        </a>{" "}
        from <span className="font-medium">Coursera</span>, which has expanded
        my knowledge in{" "}
        <span className="font-medium">full-stack web development</span>. What
        truly captivates me in programming is the{" "}
        <span className="italic">art of problem-solving</span> and the
        satisfaction that comes with unraveling a challenging puzzle is what
        fuels my <span className="font-medium">passion.</span>
      </p>

      <p className="mb-3">
        My core technology stack encompasses{" "}
        <span className="font-medium">
          React, Next, Node, Express, Tailwind CSS, SQL, PostgreSQL, and
          MongoDB.{" "}
        </span>
        Additionally, I am well-versed in{" "}
        <span className="font-medium">TypeScript</span> and proficient in using{" "}
        <span className="font-medium">Prisma and Drizzle ORM</span>. Beyond
        this, I have hands-on experience with{" "}
        <span className="font-medium">
          Flutter, Firebase, and data analysis with Python.
        </span>
      </p>

      <p>
        Outside the <span className="italic">realm of coding</span>, I find
        solace in playing video games, indulging in movies, and exploring the
        vast world of anime. My{" "}
        <span className="italic"> unquenchable thirst for knowledge</span> and
        fuels my curiosity, driving me to perpetually seek new opportunities for
        growth and learning. I take pride in my ability to quickly adapt and
        learn <span className="font-medium">new technologies</span>.
      </p>
    </motion.section>
  );
}
