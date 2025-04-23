"use client";

import { useEffect } from "react";
import { Project } from "@/components/Project";
import { myProjects } from "@/constants/data";
import { useDebounce } from "use-debounce";
import {
  motion,
  useSpring,
  AnimatePresence,
  useMotionValue,
} from "motion/react";

export default function Projects() {
  const previewX = useMotionValue(0);
  const previewY = useMotionValue(0);

  const springX = useSpring(previewX, { damping: 25, stiffness: 150 });
  const springY = useSpring(previewY, { damping: 25, stiffness: 150 });

  const [preview, setPreview] = useDebounce<string | null>(null, 100);
  const [cursorPosition, setCursorPosition] = useDebounce<{
    x: number;
    y: number;
  } | null>(null, 50);

  useEffect(() => {
    if (cursorPosition) {
      previewX.set(cursorPosition.x + 32);
      previewY.set(cursorPosition.y + 24);
    }
  }, [cursorPosition, previewX, previewY]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="work"
      onMouseMove={handleMouseMove}
      className="relative mt-20 min-h-screen scroll-mt-12 px-5 sm:px-10 md:mt-30 lg:px-15"
    >
      <h2 className="text-3xl font-bold md:text-4xl">My Selected Projects</h2>
      <div className="mt-12 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
      {myProjects.map((project, index) => (
        <Project key={index} {...project} setPreview={setPreview} />
      ))}
      <AnimatePresence>
        {preview && (
          <motion.img
            key={preview}
            className="pointer-events-none fixed top-0 left-0 z-50 h-56 w-80 rounded-lg object-cover shadow-lg"
            src={preview}
            alt="Project preview"
            style={{ x: springX, y: springY }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
