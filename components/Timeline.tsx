import { Experience } from "../constants";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "motion/react";

export function Timeline({ data }: { data: Experience[] }) {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="mt-20 min-h-screen px-5 sm:px-10 md:mt-30 lg:px-15"
      ref={containerRef}
    >
      <h2 className="text-3xl font-bold md:text-4xl">My Work Experience</h2>
      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:gap-10 md:pt-40"
          >
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
              <div className="bg-midnight absolute -left-[15px] flex h-10 w-10 items-center justify-center rounded-full">
                <div className="h-4 w-4 rounded-full border border-neutral-700 bg-neutral-800 p-2" />
              </div>
              <div className="hidden flex-col gap-2 text-xl font-bold text-neutral-300 md:flex md:pl-20 md:text-3xl">
                <h3>{item.date}</h3>
                <h3 className="text-xl text-neutral-400">{item.title}</h3>
                <h3 className="text-lg text-neutral-500">{item.job}</h3>
              </div>
            </div>

            <div className="relative w-full pr-4 pl-20 md:pl-4">
              <div className="mb-4 block text-left md:hidden">
                <h3 className="text-xl font-bold text-neutral-300">
                  {item.date}
                </h3>
                <h3 className="text-lg font-bold text-neutral-400">
                  {item.title}
                </h3>
                <h3 className="text-base font-bold text-neutral-500">
                  {item.job}
                </h3>
              </div>
              <ul className="space-y-2">
                {item.contents.map((content, index) => (
                  <li
                    key={index}
                    className="font-normal text-neutral-400 md:list-disc"
                  >
                    {content}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div
          className="absolute top-0 left-1 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-1"
          style={{
            height: height + "px",
          }}
        >
          <motion.div
            className="via-lavender/50 absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-purple-500 from-[0%] via-[10%] to-transparent"
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
          />
        </div>
      </div>
    </div>
  );
}
