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
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex justify-center items-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={toggleTheme}
    >
      {resolvedTheme === "light" ? <BsSun /> : <BsMoon />}
    </motion.button>
  );
}
