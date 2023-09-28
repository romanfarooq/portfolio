"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  return (
    <motion.section
      id="about"
      className="mb-28 max-w-3xl text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a student pursuing a{" "}
        <span className="font-medium">
          Bachelor of Science degree in Computer Science
        </span>{" "}
        at
        <span className="font-medium">
          {" "}
          University of Central Punjab, Lahore
        </span>
        , currently in my <span className="italic">Fourth year</span> dedicated
        to my <span className="font-medium">Final Year Project (FYP)</span>.
        Additionally, I hold a{" "}
        <a
          className="font-medium underline hover:text-blue-700 transition-colors duration-200"
          href="https://www.coursera.org/account/accomplishments/specialization/certificate/XEPX26FAB3MY"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meta Front-End Developer professional certification{" "}
        </a>
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
          React, Next.js, Node.js, Express.js and MongoDB.{" "}
        </span>
        Additionally, I am well-versed in{" "}
        <span className="font-medium">TypeScript</span> and proficient in using{" "}
        <span className="font-medium">Prisma ORM</span>. Beyond this, I have
        hands-on experience with{" "}
        <span className="font-medium">
          Flutter, Dart, Firebase, and Tailwind CSS.{" "}
        </span>
        I am currently seeking a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer to further apply and expand my skills.
      </p>

      <p>
        Outside the <span className="italic">realm of coding</span>, I find
        solace in playing video games, indulging in movies, and exploring the
        vast world of anime. My{" "}
        <span className="italic"> unquenchable thirst for knowledge</span> and
        fuels my curiosity, driving me to perpetually seek new opportunities for
        growth and learning. I take pride in my ability to quickly adapt and
        learn <span className="font-medium">new technologies</span>, and I am
        currently exploring{" "}
        <span className="font-medium">Mobile App Development</span> and{" "}
        <span className="font-medium">Machine Learning</span> as my latest
        endeavors.
      </p>
    </motion.section>
  );
}
