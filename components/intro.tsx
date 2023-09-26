"use client";

import Link from "next/link";
import Image from "next/image";
import MyImage from "@/public/my-image.jpg";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";

export default function Intro() {
  return (
    <section className="mb-28 max-w-3xl text-center">
      <div className="flex justify-center items-center">
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
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-3xl 2xl:text-4xl"
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
        className="flex flex-col sm:flex-row justify-center items-center gap-y-2 gap-x-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus-visible:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here
          <BsArrowRight className="mt-1 opacity-75 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/Roman-Farooq-CV.pdf"
          download
          className="group bg-white px-[2.4rem] sm:px-7 py-3 flex items-center gap-2 rounded-full outline-none focus-visible:scale-110 hover:scale-110 active:scale-105 transition border border-black/10"
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/roman-farooq"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-gray-700 hover:text-gray-950 p-4 flex items-center gap-2 rounded-full outline-none focus-visible:scale-[1.15] hover:scale-[1.15]  active:scale-105 transition border border-black/10"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/romanfarooq"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-gray-700 hover:text-gray-950 p-4 flex items-center gap-2 rounded-full outline-none focus-visible:scale-[1.15] hover:scale-[1.15]  active:scale-105 transition border border-black/10"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
