"use client";

import { useState, useEffect } from "react";
import { projects } from "@/constants/data";
import { Project } from "@/components/Project";
import {
  motion,
  useSpring,
  useMotionValue,
  AnimatePresence,
} from "motion/react";

export function Projects() {
  const previewX = useMotionValue(0);
  const previewY = useMotionValue(0);

  const springX = useSpring(previewX, { damping: 30, stiffness: 120 });
  const springY = useSpring(previewY, { damping: 30, stiffness: 120 });

  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const setCenter = () => {
      const centerX = window.innerWidth / 2 - 160;
      const centerY = window.innerHeight / 2 - 112;
      previewX.set(centerX);
      previewY.set(centerY);
    };
    setCenter();
    window.addEventListener("resize", setCenter);
    return () => window.removeEventListener("resize", setCenter);
  }, []);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!preview) return;
    requestAnimationFrame(() => {
      previewX.set(e.clientX + 32);
      previewY.set(e.clientY + 24);
    });
  };

  return (
    <section
      id="work"
      onPointerMove={handlePointerMove}
      className="mt-20 min-h-screen scroll-mt-12 px-5 sm:px-10 md:mt-30 lg:px-15"
    >
      <h2 className="text-3xl font-bold md:text-4xl">My Selected Projects</h2>
      <div className="mt-12 h-0.5 w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
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
