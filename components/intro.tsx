"use client";

import Link from "next/link";
import Image from "next/image";
import MyImage from "@/public/my-image.png";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  function handleContactClick() {
    setActiveSection("Contact");
    setTimeOfLastClick(Date.now());
  }

  return (
    <section
      id="home"
      ref={ref}
      className="mb-28 max-w-3xl scroll-mt-[10rem] text-center"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={MyImage}
              alt="Roman Farooq's portrait"
              quality={100}
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute right-0 bottom-0 text-4xl"
            initial={{ opacity: 0, scale: 0, rotate: -15 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: ["0%", "20%", "-20%", "20%", "-20%", "0%"], // Increased X movement
              y: ["0%", "-4%", "4%", "-4%", "4%", "0%"], // Decreased Y movement
              rotate: [0, -10, 10, -10, 10, 0], // Slight tilt
            }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" }, // Fade-in duration
              scale: { duration: 1.5, ease: "easeInOut" }, // Scaling duration
              x: { duration: 1.5, ease: "easeInOut", repeat: 1 }, // Waving movement
              y: { duration: 1.5, ease: "easeInOut", repeat: 1 }, // Waving movement
              rotate: { duration: 1.5, ease: "easeInOut", repeat: 1 }, // Waving tilt
            }}
            whileHover={{
              x: ["0%", "20%", "-20%", "20%", "-20%", "0%"], // Increased X movement on hover
              y: ["0%", "-4%", "4%", "-4%", "4%", "0%"], // Decreased Y movement on hover
              rotate: [0, -10, 10, -10, 10, 0], // Slight tilt on hover
              transition: {
                duration: 1.5, // Speed of animation on hover
                ease: "easeInOut",
                repeat: 1,
              },
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mt-4 mb-10 px-4 text-xl leading-[1.5]! font-medium sm:text-3xl 2xl:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Roman Farooq.</span>{" "}
        I&apos;m a <span className="font-bold">full-stack web developer</span>
        <span className="italic"> & </span>
        <span className="font-bold">mobile app developer</span>. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>
        <span className="italic"> & </span>
        <span className="underline">Flutter</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col items-center justify-center gap-x-4 gap-y-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-hidden transition hover:scale-110 hover:bg-gray-950 focus-visible:scale-110 active:scale-105"
          onClick={handleContactClick}
        >
          Contact me here
          <BsArrowRight className="mt-1 opacity-75 transition group-hover:translate-x-1" />
        </Link>
        <a
          href="/Roman-Farooq-CV.pdf"
          download
          className="group flex items-center gap-2 rounded-full border border-black/10 bg-white px-[2.4rem] py-3 outline-hidden transition hover:scale-110 focus-visible:scale-110 active:scale-105 sm:px-7 dark:bg-white/10"
        >
          Download CV
          <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
        </a>
        <a
          href="https://www.linkedin.com/in/roman-farooq"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-gray-700 outline-hidden transition hover:scale-[1.15] hover:text-gray-950 focus-visible:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/romanfarooq"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-gray-700 outline-hidden transition hover:scale-[1.15] hover:text-gray-950 focus-visible:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
