"use client";

import Image from "next/image";
import { useRef } from "react";
import { Card } from "../components/Card";
import { Globe } from "../components/Globe";
import { Frameworks } from "../components/Frameworks";
import { CopyEmailButton } from "../components/CopyEmailButton";

export default function About() {
  const grid2Container = useRef<HTMLDivElement>(null!);
  return (
    <section id="about" className="c-space section-spacing scroll-mt-12">
      <h2 className="text-heading">About Me</h2>
      <div className="mt-12 grid grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-6">
        {/* Grid 1 */}
        <div className="grid-default-color grid-1 flex items-end">
          <Image
            src="/assets/coding-pov.png"
            className="absolute -top-[1rem] -right-[5rem] scale-[1.75] md:inset-y-10 md:left-50 md:scale-[3] lg:scale-[2.5]"
            alt="Coding POV"
            width={500}
            height={500}
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Ali Sanati</p>
            <p className="subtext">
              Over the last 4 years, I developed my frontend and backend dev
              skills to deliver dynamic and software and web applications.
            </p>
          </div>
          <div className="pointer-evets-none from-indigo absolute inset-x-0 -bottom-4 h-1/2 bg-gradient-to-t sm:h-1/3" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex h-full w-full items-center justify-center"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="GRASP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="SRP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/blazor-pink.png"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Mars, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute top-[10%] left-[30%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex size-full flex-col items-center justify-center gap-4">
            <p className="headtext text-center">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools taht
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 start-[50%] h-full w-full md:inset-y-9 md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
}
