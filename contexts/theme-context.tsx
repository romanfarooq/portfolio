"use client";

import { useState, useEffect, useContext, createContext } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

type Theme = "light" | "dark" | "system";

type ThemeContextProviderProps = {
  storageKey?: string;
  defaultTheme?: Theme;
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeProvider({
  children,
  storageKey = "theme",
  defaultTheme = "system",
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    const storedTheme = localStorage.getItem(storageKey) as Theme | null;
    if (storedTheme) setTheme(storedTheme);
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  useEffect(() => {
    if (theme === "system") {
      setResolvedTheme(prefersDarkMode ? "dark" : "light");
    } else {
      setResolvedTheme(theme);
    }
  }, [theme, prefersDarkMode]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    if (resolvedTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.add("light");
    }
  }, [resolvedTheme]);

  const value = {
    theme,
    resolvedTheme,
    setTheme: (newTheme: Theme) => {
      setTheme(newTheme);
      if (newTheme !== "system") {
        setResolvedTheme(newTheme);
      }
    },
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
}
