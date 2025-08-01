import Image from "next/image";
import { Meta } from "@/components/logos";
import { Globe } from "@/components/Globe";
import { Frameworks } from "@/components/Frameworks";
import { CopyEmailButton } from "@/components/CopyEmailButton";

export function About() {
  return (
    <section
      id="about"
      className="mt-20 min-h-screen scroll-mt-12 px-5 sm:px-10 md:mt-30 lg:px-15"
    >
      <h2 className="text-3xl font-bold md:text-4xl">About Me</h2>
      <div className="mt-12 grid grid-cols-1 gap-4 md:auto-rows-fr md:grid-cols-6">
        <header className="from-storm to-indigo relative row-span-2 flex h-60 items-end overflow-hidden rounded-2xl bg-gradient-to-b p-6 duration-200 hover:-translate-y-1 md:col-span-3 md:h-full">
          <Image
            src="/assets/images/coding-pov.webp"
            alt="Coding POV"
            quality={100}
            priority={true}
            width={1828}
            height={813}
            className="absolute -top-4 -right-20 scale-[1.75] md:inset-y-10 md:left-50 md:scale-[3] lg:scale-[2.5]"
          />
          <div className="z-10">
            <h3 className="mt-2 mb-2 text-xl">Hi, I'm Roman Farooq</h3>
            <p className="text-sm text-neutral-200 md:text-base">
              A dedicated Full-Stack Developer passionate about crafting
              intuitive user experiences on the client side and building
              scalable server solutions with modern tools and best practices.
            </p>
          </div>
        </header>
        <article className="from-royal to-lavender row-span-1 h-full overflow-hidden rounded-2xl bg-gradient-to-b px-6 py-4 duration-200 hover:-translate-y-1 md:col-span-3 md:p-6">
          <div className="flex h-full flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 p-2 md:h-16 md:w-16">
                <Meta width={40} height={40} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-base font-bold text-white md:text-xl">
                  Meta Front-End Developer
                </h3>
                <p className="text-sm text-white/80">
                  Professional Certificate
                </p>
              </div>
            </div>
            <p className="text-xs text-neutral-200 md:text-sm">
              Earned through Meta's rigorous program via Coursera, this
              certification validates proficiency in front-end development,
              including React, JavaScript, UI design principles, debugging,
              version control with Git, and deploying production-ready web
              applications.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs">
              <span className="rounded-full bg-white/20 px-1.5 py-0.5 md:px-3 md:py-1">
                React
              </span>
              <span className="rounded-full bg-white/20 px-1.5 py-0.5 md:px-3 md:py-1">
                JavaScript
              </span>
              <span className="rounded-full bg-white/20 px-1.5 py-0.5 md:px-3 md:py-1">
                HTML/CSS
              </span>
              <span className="rounded-full bg-white/20 px-1.5 py-0.5 md:px-3 md:py-1">
                Git/GitHub
              </span>
              <span className="rounded-full bg-white/20 px-1.5 py-0.5 md:px-3 md:py-1">
                UI/UX Principles
              </span>
            </div>
            <a
              href="https://www.coursera.org/account/accomplishments/professional-cert/XEPX26FAB3MY"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 bg-white/20 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/30 focus:ring-2 focus:ring-white/50 focus:outline-none md:px-5 md:py-2 md:text-sm"
            >
              🎓 View Certificate
            </a>
          </div>
        </article>
        <aside className="from-charcoal via-jet to-charcoal relative row-span-1 h-60 overflow-hidden rounded-2xl bg-gradient-to-tl p-6 duration-200 hover:-translate-y-1 md:col-span-3 md:h-full">
          <div className="z-10 w-1/2">
            <h3 className="mt-2 mb-2 text-xl">Time Zone</h3>
            <p className="text-sm text-neutral-200 md:text-base">
              I'm based in Lahore, Pakistan, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute top-1/12 left-1/4 md:left-1/3">
            <Globe />
          </figure>
        </aside>
        <aside className="from-orange to-coral relative row-span-1 h-60 overflow-hidden rounded-2xl bg-gradient-to-b p-6 duration-200 hover:-translate-y-1 md:col-span-2 md:h-full">
          <div className="flex size-full flex-col items-center justify-center gap-4">
            <h3 className="mt-2 mb-2 text-center text-xl">
              Do you want to start a project together?
            </h3>
            <CopyEmailButton />
          </div>
        </aside>
        <article className="relative row-span-1 h-60 overflow-hidden rounded-2xl bg-gradient-to-b from-emerald-950 to-emerald-900 px-6 py-2 duration-200 hover:-translate-y-1 sm:p-6 md:col-span-4 md:h-full">
          <div className="z-10 w-1/2">
            <h3 className="mb-2 text-base sm:text-xl">Tech Stack</h3>
            <p className="text-xs text-neutral-200 md:text-sm lg:text-base">
              Proficient in TypeScript, React, Next.js, Node.js, and Express.js.
              Skilled in database management (MongoDB, PostgreSQL) and CSS
              frameworks like Tailwind CSS. Familiar with Docker, Prisma, Redux,
              Flutter, and backend development using Python and Django.
            </p>
          </div>
          <div className="absolute inset-y-0 start-7/12 h-full w-full sm:start-1/2 md:inset-y-9 md:scale-125">
            <Frameworks />
          </div>
        </article>
      </div>
    </section>
  );
}
