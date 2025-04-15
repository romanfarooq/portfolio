"use client";

import gsap from "gsap";
import SectionHeading from "./section-heading";
import { useRef, useEffect } from "react";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSectionInView } from "@/hooks/use-section-in-view";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function About() {
  const { ref } = useSectionInView("About", 0.6);

  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current && headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        },
      );

      const paragraphs = contentRef.current.querySelectorAll("p");
      paragraphs.forEach((p, index) => {
        gsap.fromTo(
          p,
          {
            opacity: 0,
            y: 20,
            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          },
          {
            opacity: 1,
            y: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 1,
            delay: index * 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: p,
              start: "top bottom-=50",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      const highlights = contentRef.current.querySelectorAll(
        ".font-medium, .italic",
      );
      highlights.forEach((highlight) => {
        gsap.fromTo(
          highlight,
          { color: "inherit" },
          {
            color: "var(--highlight-color)",
            duration: 0.5,
            scrollTrigger: {
              trigger: highlight,
              start: "top bottom-=50",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="mb-28 max-w-3xl scroll-mt-28 text-justify leading-8"
    >
      <div ref={headingRef}>
        <SectionHeading>About me</SectionHeading>
      </div>

      <div ref={contentRef}>
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
          <span className="font-medium">TypeScript</span> and proficient in
          using <span className="font-medium">Prisma and Drizzle ORM</span>.
          Beyond this, I have hands-on experience with{" "}
          <span className="font-medium">
            Flutter, Firebase, and data analysis with Python.
          </span>
        </p>

        <p>
          Outside the <span className="italic">realm of coding</span>, I find
          solace in playing video games, indulging in movies, and exploring the
          vast world of anime. My{" "}
          <span className="italic"> unquenchable thirst for knowledge</span> and
          fuels my curiosity, driving me to perpetually seek new opportunities
          for growth and learning. I take pride in my ability to quickly adapt
          and learn <span className="font-medium">new technologies</span>.
        </p>
      </div>
    </section>
  );
}
