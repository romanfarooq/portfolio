"use client";

import { useState } from "react";
import { Project } from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function Projects() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const [preview, setPreview] = useState<string | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="c-space section-spacing relative"
      id="work"
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="mt-12 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      {preview && (
        <motion.img
          className="pointer-events-none fixed top-0 left-0 z-50 h-56 w-80 rounded-lg object-cover shadow-lg"
          src={preview}
          style={{ x: springX, y: springY }}
          alt="Project preview"
        />
      )}
    </section>
  );
}
