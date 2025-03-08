"use client";

import Project from "./project";
import SectionHeading from "./section-heading";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/hooks/use-section-in-view";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.1);
  return (
    <motion.section
      id="projects"
      ref={ref}
      className="mb-28 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
    </motion.section>
  );
}
