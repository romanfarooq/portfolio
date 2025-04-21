import { Html, useProgress } from "@react-three/drei";

export function Loader() {
  const { progress } = useProgress();
  return (
    <Html center className="text-center text-xl font-normal">
      {progress}% Loaded
    </Html>
  );
}
