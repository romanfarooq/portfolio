"use client";

import SectionHeading from "./section-heading";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/theme-context";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);
  const { resolvedTheme } = useTheme();
  return (
    <motion.section
      id="experience"
      ref={ref}
      className="mb-28 scroll-mt-28 md:mx-32"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => (
          <Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  resolvedTheme === "light"
                    ? "#f3f4f6"
                    : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  resolvedTheme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background: resolvedTheme === "light" ? "white" : "#1E1A27",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{experience.title}</h3>
              <p className="mt-0! text-sm! font-normal!">
                {experience.location}
              </p>
              <p className="mt-1! text-xs! font-normal! text-justify text-gray-700 dark:text-white/75">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}
