import Image from "next/image";
import { skills } from "@/constants/data";
import { OrbitingCircles } from "@/components/OrbitingCircles";

const halfLength = Math.ceil(skills.length / 2);
const firstCircle = skills.slice(0, halfLength);
const secondCircle = skills.slice(halfLength);

export function Frameworks() {
  return (
    <div className="relative flex h-60 w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {firstCircle.map((skill, index) => (
          <Image
            key={index}
            src={`/assets/logos/${skill}.svg`}
            alt={`${skill} icon`}
            fill
            className="rounded-sm object-contain duration-200 hover:scale-110"
          />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} speed={2} reverse>
        {secondCircle.map((skill, index) => (
          <Image
            key={index}
            src={`/assets/logos/${skill}.svg`}
            alt={`${skill} icon`}
            fill
            className="rounded-sm object-contain duration-200 hover:scale-110"
          />
        ))}
      </OrbitingCircles>
    </div>
  );
}
