"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 1);
  return (
    <motion.section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-xs text-gray-800 sm:text-lg">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="rounded-xl border border-black/[0.1] bg-white px-3 py-2 dark:bg-white/10 dark:text-white/80 sm:px-5 sm:py-3"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
