"use client";

import { useState, useContext, createContext } from "react";
import type { SectionName } from "@/lib/types";

type ActiveSectionContextType = {
  activeSection: SectionName;
  timeOfLastClick: number;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null,
);

export default function ActiveSectionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  const value = {
    activeSection,
    timeOfLastClick,
    setActiveSection,
    setTimeOfLastClick,
  };

  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider",
    );
  }
  return context;
}
