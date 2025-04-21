import Image from "next/image";
import { OrbitingCircles } from "./OrbitingCircles";

const skills = [
  "html5",
  "css3",
  "cplusplus",
  "git",
  "github",
  "stripe",
  "expressjs",
  "javascript",
  "typescript",
  "react",
  "redux",
  "expo",
  "vitejs",
  "nextjs",
  "nodejs",
  "socketio",
  "flutter",
  "tailwindcss",
  "bootstrap",
  "threejs",
  "material-ui",
  "motion",
  "prisma",
  "sql",
  "sqlite",
  "postgresql",
  "mongodb",
  "firebase",
  "flask",
  "python",
  "docker",
];

const halfLength = Math.ceil(skills.length / 2);
const firstHalf = skills.slice(0, halfLength);
const secondHalf = skills.slice(halfLength);

const Icon = ({ src }: { src: string }) => (
  <Image
    src={src}
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
        {firstHalf.map((skill, index) => (
          <Icon key={index} src={`/assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {secondHalf.map((skill, index) => (
          <Icon key={index} src={`/assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}
