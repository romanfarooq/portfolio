import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUp, ArrowRight } from "./icons";
import { type Project } from "@/constants/data";
import {
  Dialog,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from "@/components/Dialog";

interface ProjectDetailsProps extends Project {
  setPreview: (image: string | null) => void;
}

export function ProjectDetails({
  href,
  tags,
  title,
  image,
  setPreview,
  description,
  subDescription,
}: ProjectDetailsProps) {
  const [open, setOpen] = useState(false);

  const onOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (isOpen) setPreview(null);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <button className="flex cursor-pointer items-center gap-1 border-b-2 border-transparent pb-0.5 duration-200 hover:-translate-y-1 hover:border-current">
          Read More
          <ArrowRight width={24} height={24} />
        </button>
      </DialogTrigger>
      <DialogContent className="from-midnight to-navy max-h-11/12 overflow-y-auto rounded-2xl border border-white/10 bg-gradient-to-l p-0 shadow-sm md:max-w-2xl">
        <Image
          src={image}
          alt={title}
          width={1920}
          height={1008}
          priority
          loading="eager"
          className="w-full rounded-t-2xl"
        />
        <div className="px-5 pb-5">
          <DialogTitle className="mb-2 text-2xl font-bold text-white">
            {title}
          </DialogTitle>
          <DialogDescription className="mb-3 text-base font-normal text-neutral-300">
            {description}
          </DialogDescription>
          <ul className="mb-3 space-y-2 pl-4 text-base text-neutral-300">
            {subDescription.map((subDesc, index) => (
              <li key={index} className="list-disc font-normal">
                {subDesc}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              {tags.map((tag, index) => {
                const Icon = tag.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Icon width={40} height={40} />
                  </motion.div>
                );
              })}
            </div>
            <a
              className={cn(
                "inline-flex cursor-pointer items-center gap-1 font-medium hover:scale-105",
                { "pointer-events-none opacity-50": !href },
              )}
              href={href || "#"}
              target={href ? "_blank" : undefined}
              rel={href ? "noopener noreferrer" : undefined}
            >
              View Project <ArrowUp width={24} height={24} />
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
