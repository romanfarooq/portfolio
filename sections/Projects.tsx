"use client";

import { useState, useEffect } from "react";
import { Project } from "@/components/Project";
import { myProjects } from "@/constants/data";
import { useDebouncedCallback, useThrottledCallback } from "use-debounce";
import {
  motion,
  useSpring,
  useMotionValue,
  AnimatePresence,
} from "motion/react";

export default function Projects() {
  const previewX = useMotionValue(0);
  const previewY = useMotionValue(0);

  const springX = useSpring(previewX, { damping: 25, stiffness: 150 });
  const springY = useSpring(previewY, { damping: 25, stiffness: 150 });

  const [preview, setPreview] = useState<string | null>(null);
  const [cursorPosition, setCursorPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    if (cursorPosition) {
      previewX.set(cursorPosition.x + 32);
      previewY.set(cursorPosition.y + 24);
    } else if (typeof window !== "undefined") {
      const centerX = window.innerWidth / 2 - 160;
      const centerY = window.innerHeight / 2 - 112;
      previewX.set(centerX);
      previewY.set(centerY);
    }
  }, [cursorPosition]);

  const debouncedSetPreview = useDebouncedCallback(
    (value: string | null) => setPreview(value),
    100,
  );

  const throttledSetCursorPosition = useThrottledCallback(
    (x: number, y: number) => setCursorPosition({ x, y }),
    100,
    { leading: true, trailing: false },
  );

  const handlePointerMove = (e: React.PointerEvent) => {
    throttledSetCursorPosition(e.clientX, e.clientY);
  };

  return (
    <section
      id="work"
      onPointerMove={handlePointerMove}
      className="relative mt-20 min-h-screen scroll-mt-12 px-5 sm:px-10 md:mt-30 lg:px-15"
    >
      <h2 className="text-3xl font-bold md:text-4xl">My Selected Projects</h2>
      <div className="mt-12 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
      {myProjects.map((project, index) => (
        <Project key={index} {...project} setPreview={debouncedSetPreview} />
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
