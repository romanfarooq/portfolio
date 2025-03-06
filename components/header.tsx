"use client";

import Link from "next/link";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/contexts/active-section-context";
import type { SectionName } from "@/lib/types";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  function handleLinkClick(SectionName: SectionName) {
    setActiveSection(SectionName);
    setTimeOfLastClick(Date.now());
  }

  return (
    <header className="relative z-50">
      <motion.div
        className="border-opacity-40 bg-opacity-80 dark:bg-opacity-75 fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white bg-white shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:border-black/40 dark:bg-gray-950"
        initial={{ x: "-50%", y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      ></motion.div>
      <nav className="fixed top-[0.15rem] left-1/2 flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="g-y-1 flex w-[22rem] flex-wrap items-center justify-center text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.name}
              className="relative flex h-3/4 items-center justify-center"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className={clsx(
                  "flex items-center justify-center p-3 transition hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  },
                )}
                onClick={() => handleLinkClick(link.name)}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-gray-100 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
