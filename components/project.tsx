import Image from "next/image";
import VanillaTilt from "vanilla-tilt";
import { useRef, useEffect } from "react";
import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      VanillaTilt.init(ref.current, {
        max: 5,
        speed: 400,
        glare: true,
        scale: 1.02,
        gyroscope: false,
        "max-glare": 0.2,
      });
    }
  }, []);

  return (
    <div ref={ref} className="group mx-8 mb-3 last:mb-0 sm:mb-8">
      <section className="relative mx-auto flex flex-col overflow-hidden rounded-lg border border-black/5 bg-gray-200 lg:h-72 dark:bg-white/10 dark:text-white">
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
            quality={100}
            priority={true}
            className="mx-auto h-auto w-full rounded-lg object-contain transition lg:absolute lg:top-1/2 lg:w-[50%] lg:-translate-y-1/2 lg:group-odd:right-0 lg:group-even:left-0"
          />
        </div>
      </section>
    </div>
  );
}

export default Project;
