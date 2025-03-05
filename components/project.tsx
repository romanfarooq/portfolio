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
      <section className="relative mx-auto flex flex-col overflow-hidden rounded-lg border border-black/5 bg-gray-100 hover:bg-gray-200 lg:h-72 dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
        <div className="flex flex-col justify-center px-8 py-6 lg:h-full lg:max-w-[45%] lg:px-0 lg:py-0 lg:group-odd:pl-8 lg:group-even:ml-[55%] lg:group-even:pr-8">
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
        <div className="w-full px-8 pb-6 lg:px-0 lg:pb-0">
          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            priority={true}
            className="mx-auto h-auto w-full rounded-lg object-contain transition lg:absolute lg:top-1/2 lg:w-[50%] lg:-translate-y-1/2 lg:group-odd:right-0 lg:group-even:left-0 lg:group-hover:scale-105 lg:group-hover:-rotate-2 lg:group-hover:group-even:rotate-2"
          />
        </div>
      </section>
    </motion.div>
  );
}

export default Project;
