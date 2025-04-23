import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import type { Tag } from "@/constants/data";

interface ProjectDetailsProps {
  title: string;
  description: string;
  subDescription: string[];
  image: string;
  tags: Tag[];
  href: string;
  closeModal: () => void;
}

export function ProjectDetails({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}: ProjectDetailsProps) {
  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center overflow-hidden backdrop-blur-sm">
      <motion.div
        className="from-midnight to-navy relative max-h-[90%] max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-gradient-to-l shadow-sm"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="bg-midnight absolute top-5 right-5 cursor-pointer rounded-sm p-2 hover:bg-gray-500"
        >
          <Image
            src="/assets/icons/close.svg"
            alt="close icon"
            width={24}
            height={24}
          />
        </button>
        <Image
          src={image}
          alt={title}
          width={640}
          height={360}
          className="w-full rounded-t-2xl"
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          <ul className="mb-3 space-y-2 pl-4">
            {subDescription.map((subDesc, index) => (
              <li
                key={index}
                className="list-disc font-normal text-neutral-400"
              >
                {subDesc}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-3">
              {tags.map((tag, index) => (
                <Image
                  key={index}
                  src={tag.path}
                  alt={tag.name}
                  width={40}
                  height={40}
                  className="size-10 rounded-lg duration-200 hover:-translate-y-1"
                />
              ))}
            </div>
            <a
              className={cn(
                "inline-flex cursor-pointer items-center gap-1 font-medium duration-200 hover:-translate-y-1",
                !href && "pointer-events-none opacity-50",
              )}
              href={href || "#"}
              target={href ? "_blank" : undefined}
              rel={href ? "noopener noreferrer" : undefined}
            >
              View Project{" "}
              <Image
                src="/assets/icons/arrow-up.svg"
                alt="arrow up icon"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
