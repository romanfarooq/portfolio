"use client";

import { useState, useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted === false) {
    return null;
  }

  function toggleTheme() {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  }

  return (
    <motion.button
      className="fixed bottom-5 right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 dark:bg-gray-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={toggleTheme}
    >
      {resolvedTheme === "light" ? <BsSun /> : <BsMoon />}
    </motion.button>
  );
}
