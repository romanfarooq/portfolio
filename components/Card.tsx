import { motion } from "motion/react";
import { RefObject, CSSProperties } from "react";

interface CardProps {
  style?: CSSProperties;
  text?: string;
  image?: string;
  containerRef: RefObject<HTMLDivElement>;
}

export function Card({ style, text, image, containerRef }: CardProps) {
  return image && !text ? (
    <motion.img
      className="absolute w-15 cursor-grab"
      src={image}
      alt="skill icon"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragElastic={1}
      dragConstraints={containerRef}
    />
  ) : (
    <motion.div
      className="bg-storm absolute w-24 cursor-grab rounded-full px-1 py-4 text-center text-xl font-extralight ring ring-gray-700"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragElastic={1}
      dragConstraints={containerRef}
    >
      {text}
    </motion.div>
  );
}
