import Image from "next/image";
import { useState } from "react";
import { ProjectDetails } from "./ProjectDetails";
import { Project as ProjectType } from "../constants";

interface ProjectProps extends ProjectType {
  setPreview: (image: string | null) => void;
}

export function Project({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}: ProjectProps) {
  const [isHidden, setIsHidden] = useState(false);
  const handleMouseEnter = () => setPreview(image);
  const handleMouseLeave = () => setPreview(null);
  return (
    <>
      <div
        className="flex-wrap items-center justify-between space-y-14 py-10 sm:flex sm:space-y-0"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="text-sand mt-2 flex gap-5">
            {tags.map((tag, index) => (
              <span key={index} className="text-xs md:text-base">
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex cursor-pointer items-center gap-1 duration-200 hover:-translate-y-1"
        >
          Read More
          <Image
            src="/assets/icons/arrow-right.svg"
            alt="right arrow icon"
            width={24}
            height={24}
          />
        </button>
      </div>
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
}
