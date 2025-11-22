import { useTranslations } from "next-intl";

import type { Project } from "@/constants";
import { ProjectDetails } from "@/components/ProjectDetails";

interface ProjectItemProps extends Project {
  setPreview: (image: string | null) => void;
}

export function ProjectItem(props: ProjectItemProps) {
  const { name, image, tags, setPreview } = props;

  const projectT = useTranslations(`projects.${name}`);

  return (
    <>
      <article
        className="flex-wrap items-center justify-between space-y-10 py-10 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <header>
          <h3 className="text-2xl">{projectT("title")}</h3>
          <div className="text-sand mt-2 flex flex-wrap gap-5">
            {tags.map((tag) => (
              <span key={tag.name} className="text-xs md:text-base">
                {tag.name}
              </span>
            ))}
          </div>
        </header>
        <ProjectDetails {...props} />
      </article>
      <div className="h-0.5 w-full bg-linear-to-r from-transparent via-neutral-700 to-transparent" />
    </>
  );
}
