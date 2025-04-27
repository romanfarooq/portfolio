"use client";

import { useState, useEffect } from "react";
import { projects } from "@/constants/data";
import { Project } from "@/components/Project";
import {
  motion,
  useSpring,
  useMotionValue,
  AnimatePresence,
  useMotionValueEvent,
} from "motion/react";

export default function Projects() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const previewX = useMotionValue(0);
  const previewY = useMotionValue(0);

  const springX = useSpring(previewX, { damping: 30, stiffness: 120 });
  const springY = useSpring(previewY, { damping: 30, stiffness: 120 });

  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const centerX = window.innerWidth / 2 - 160;
    const centerY = window.innerHeight / 2 - 112;
    previewX.set(centerX);
    previewY.set(centerY);
    const handleResize = () => {
      const newCenterX = window.innerWidth / 2 - 160;
      const newCenterY = window.innerHeight / 2 - 112;
      previewX.set(newCenterX);
      previewY.set(newCenterY);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useMotionValueEvent(cursorX, "change", (latest) => {
    if (preview) previewX.set(latest + 32);
  });

  useMotionValueEvent(cursorY, "change", (latest) => {
    if (preview) previewY.set(latest + 24);
  });

  const handlePointerMove = (e: React.PointerEvent) => {
    requestAnimationFrame(() => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    });
  };

  return (
    <section
      id="work"
      onPointerMove={handlePointerMove}
      className="relative mt-20 min-h-screen scroll-mt-12 px-5 sm:px-10 md:mt-30 lg:px-15"
    >
      <h2 className="text-3xl font-bold md:text-4xl">My Selected Projects</h2>
      <div className="mt-12 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
      {projects.map((project, index) => (
        <Project key={index} {...project} setPreview={setPreview} />
      ))}

      <AnimatePresence>
        {preview && (
          <motion.img
            key={preview}
            className="preview-img pointer-events-none fixed top-0 left-0 z-50 h-56 w-80 rounded-lg object-cover shadow-lg"
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
