"use client";

import createGlobe from "cobe";
import { useRef, useEffect } from "react";
import { useSpring, useMotionValue } from "motion/react";
import type { COBEOptions } from "cobe";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  dark: 1,
  theta: 0.3,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  glowColor: [1, 1, 1],
  markerColor: [1, 1, 1],
  markers: [
    { location: [19.076, 72.8777], size: 0.05 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [31.5204, 74.3587], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [41.0082, 28.9784], size: 0.06 },
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [-23.5505, -46.6333], size: 0.05 }
  ]
};

interface GlobeProps {
  className?: string;
  config?: COBEOptions;
}

export function Globe({ className, config = GLOBE_CONFIG }: GlobeProps) {
  const phi = useRef(0);
  const width = useRef(0);
  const pointerInteractionMovement = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width.current = canvasRef.current.offsetWidth;
      }
    };

    onResize();
    window.addEventListener("resize", onResize);

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width.current * 2,
      height: width.current * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phi.current += 0.005;
        state.phi = phi.current + rs.get();
        state.width = width.current * 2;
        state.height = width.current * 2;
      }
    });

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    }, 0);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div className={cn("mx-auto aspect-square w-full max-w-xl", className)}>
      <canvas
        ref={canvasRef}
        className="size-[30rem] opacity-0 transition-opacity duration-500 contain-layout contain-paint contain-size"
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => updateMovement(e.touches[0].clientX)}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
      />
    </div>
  );
}
