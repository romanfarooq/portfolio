import { useRef } from "react";
import { type Experience } from "@/constants/data";
import { motion, useScroll, useTransform } from "motion/react";

export function Timeline({ data }: { data: Experience[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="mt-20 min-h-screen px-5 sm:px-10 md:mt-30 lg:px-15"
    >
      <h2 className="text-3xl font-bold md:text-4xl">My Work Experience</h2>
      <div className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:gap-10 md:pt-40"
          >
            <div className="flex max-w-xs flex-col items-center self-start md:sticky md:top-40 md:z-40 md:w-full md:flex-row lg:max-w-md">
              <div className="bg-midnight z-20 flex h-10 w-10 items-center justify-center rounded-full md:absolute md:-left-4">
                <div className="h-4 w-4 rounded-full border border-neutral-700 bg-neutral-800 p-2" />
              </div>
              <div className="hidden flex-col gap-2 md:flex md:pl-20">
                <h3 className="text-2xl font-bold text-neutral-200">
                  {item.title}
                </h3>
                <h3 className="text-lg font-semibold text-neutral-300">
                  {item.job}
                </h3>
                <h3 className="text-base text-neutral-300">{item.date}</h3>
              </div>
            </div>

            <div className="w-full pl-5 sm:pl-10 md:pl-0">
              <div className="mb-4 block text-left md:hidden">
                <h3 className="text-2xl font-bold text-neutral-200">
                  {item.title}
                </h3>
                <h3 className="text-lg font-semibold text-neutral-300">
                  {item.job}
                </h3>
                <h3 className="text-base text-neutral-300">{item.date}</h3>
              </div>
              <ul className="space-y-2">
                {item.contents.map((content, index) => (
                  <li
                    key={index}
                    className="list-disc font-normal text-neutral-300"
                  >
                    {content}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className="absolute top-0 left-5 z-10 h-full w-0.5 overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-700 to-transparent to-100% [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-1">
          <motion.div
            className="via-lavender/50 absolute inset-x-0 top-0 h-full w-0.5 origin-top rounded-full bg-gradient-to-t from-purple-500 from-0% via-10% to-transparent"
            style={{ scaleY: scaleY, opacity: opacityTransform }}
          />
        </div>
      </div>
    </div>
  );
}
