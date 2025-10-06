import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Roman Farooq's AI & Software Engineering Portfolio",
    short_name: "Roman Farooq - Portfolio",
    description:
      "Roman Farooq is an AI-focused software engineer and data science enthusiast dedicated to building intelligent, data-driven, and scalable solutions. Specializing in Python, React, Next.js, and modern machine learning integrations, Roman delivers innovative applications combining advanced analytics with user-focused design.",
    start_url: "/",
    display: "standalone",
    background_color: "#030412",
    theme_color: "#030412",
    orientation: "portrait-primary",
    scope: "/",
    lang: "en",
    categories: ["portfolio", "developer", "technology"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon"
      },
      {
        src: "/assets/images/roman.webp",
        sizes: "1200x630",
        type: "image/webp",
        purpose: "maskable"
      }
    ]
  };
}
