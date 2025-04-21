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
  return (
    <>
      <div
        className="flex-wrap items-center justify-between space-y-14 py-10 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="text-sand mt-2 flex gap-5">
            {tags.map((tag, index) => (
              <span key={index}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="hover-animation flex cursor-pointer items-center gap-1"
        >
          Read More
          <Image
            src="/assets/icons/arrow-right.svg"
            width={24}
            height={24}
            alt="right arrow"
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
