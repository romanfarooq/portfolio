import Image from "next/image";
import { OrbitingCircles } from "./OrbitingCircles";

const skills = [
  "auth0",
  "blazor",
  "cplusplus",
  "csharp",
  "css3",
  "dotnet",
  "dotnetcore",
  "git",
  "html5",
  "javascript",
  "microsoft",
  "react",
  "sqlite",
  "tailwindcss",
  "vitejs",
  "wordpress",
];

const Icon = ({ src }: { src: string }) => (
  <Image
    src={`/${src}`}
    className="rounded-sm duration-200 hover:scale-110"
    alt="skill icon"
    width={40}
    height={40}
  />
);

export function Frameworks() {
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills
          .slice()
          .reverse()
          .map((skill, index) => (
            <Icon key={index} src={`assets/logos/${skill}.svg`} />
          ))}
      </OrbitingCircles>
    </div>
  );
}
