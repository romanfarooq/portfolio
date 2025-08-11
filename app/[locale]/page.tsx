import { Fragment } from "react";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { Contact } from "@/sections/Contact";
import { Projects } from "@/sections/Projects";
import { Education } from "@/sections/Education";
import { Experiences } from "@/sections/Experiences";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <main className="container mx-auto max-w-7xl">
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Education />
        <Contact />
      </main>
      <Footer />
    </Fragment>
  );
}
