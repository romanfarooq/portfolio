import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeProvider from "@/contexts/theme-context";
import ResponsiveToaster from "@/components/responsive-toaster";
import ActiveSectionContextProvider from "@/contexts/active-section-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roman Farooq's Portfolio",
  description:
    "Roman Farooq is a full-stack web developer with a passion for building beautiful and functional websites.",
  metadataBase: new URL("https://roman-farooq-portfolio.vercel.app"),
  authors: [{ name: "Roman Farooq", url: "https://github.com/romanfarooq" }],
  creator: "Roman Farooq",
  publisher: "Roman Farooq",
  keywords: [
    "Roman Farooq",
    "web developer",
    "full-stack developer",
    "mobile app developer",
    "software engineer",
    "portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://roman-farooq-portfolio.vercel.app",
    title: "Roman Farooq's Portfolio",
    description:
      "Roman Farooq is a full-stack web developer with a passion for building beautiful and functional websites.",
    siteName: "Roman Farooq's Portfolio",
    images: [
      {
        url: "/my-image.png",
        width: 1200,
        height: 630,
        alt: "Roman Farooq",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roman Farooq's Portfolio",
    description:
      "Roman Farooq is a full-stack web developer with a passion for building beautiful and functional websites.",
    images: ["/my-image.png"],
    creator: "@TheRomanFarooq",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    github: "https://github.com/romanfarooq",
    linkedin: "https://linkedin.com/in/roman-farooq",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark:text-opacity-90 relative min-h-screen bg-gray-50 pt-28 text-gray-950 antialiased sm:pt-36 dark:bg-gray-900 dark:text-gray-50`}
      >
        <div className="absolute top-[-6rem] right-[11rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="absolute top-[-1rem] left-[-35rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
          </ActiveSectionContextProvider>
          <ThemeSwitch />
          <ResponsiveToaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
