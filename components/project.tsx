import Image from "next/image";
import { useRef } from "react";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <section className="relative mx-auto h-72 max-w-5xl overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
        <div className="flex h-full max-w-[45%] flex-col justify-center group-odd:pl-8 group-even:ml-[55%] group-even:pr-8">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 text-justify text-sm leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] tracking-wider text-white uppercase dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          priority={true}
          className="absolute top-1/2 hidden h-auto w-[50%] -translate-y-1/2 rounded-lg object-contain transition group-odd:right-5 group-even:left-5 group-hover:scale-105 group-hover:-rotate-2 group-hover:group-even:rotate-2 sm:block"
        />
      </section>
    </motion.div>
  );
}

export default Project;
