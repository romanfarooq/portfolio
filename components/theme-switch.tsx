"use client";

import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "@/contexts/theme-context";

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
    const newTheme = resolvedTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
    toast.custom((t) => (
      <div
        className={`${t.visible ? "animate-enter" : "animate-leave"} flex items-center gap-4 rounded-full border border-gray-300/50 bg-white/95 px-6 py-3.5 shadow-xl hover:shadow-2xl dark:border-gray-700/50 dark:bg-gray-900/95`}
      >
        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
          Switched to {newTheme === "dark" ? "Dark" : "Light"} mode
        </span>
        {newTheme === "dark" ? (
          <BsMoon className="text-lg text-gray-700 dark:text-gray-300" />
        ) : (
          <BsSun className="text-lg text-amber-500" />
        )}
      </div>
    ));
  }
  return (
    <motion.button
      className="border-opacity-40 bg-opacity-80 fixed right-5 bottom-5 flex h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-full border border-white bg-white shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 dark:bg-gray-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={toggleTheme}
    >
      {resolvedTheme === "light" ? <BsSun /> : <BsMoon />}
    </motion.button>
  );
}
