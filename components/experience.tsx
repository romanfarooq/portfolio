"use client";

import SectionHeading from "./section-heading";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.65);
  return (
    <motion.section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="" animate={true}>
        {experiencesData.map((experience, index) => (
          <Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{experience.title}</h3>
              <p className="!font-normal !text-sm !mt-0">
                {experience.location}
              </p>
              <p className="!font-normal !text-xs !mt-1 text-gray-700">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}
