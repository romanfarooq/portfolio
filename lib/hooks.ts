import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import type { SectionName } from "./types";

export function useSectionInView(SectionName: SectionName, threshold: number) {
  const { ref, inView } = useInView({ threshold });
  const { timeOfLastClick, setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(SectionName);
    }
  }, [inView, SectionName, timeOfLastClick, setActiveSection]);

  return { ref };
}
