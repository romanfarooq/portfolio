"use client";

import { useState, useEffect, useContext, createContext } from "react";

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
  ...props
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem(storageKey) as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (theme === "system") {
        setResolvedTheme(mediaQuery.matches ? "dark" : "light");
      }
    };

    if (theme === "system") {
      setResolvedTheme(mediaQuery.matches ? "dark" : "light");
    } else {
      setResolvedTheme(theme);
    }

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

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
    <ThemeContext.Provider value={value} {...props}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
}
