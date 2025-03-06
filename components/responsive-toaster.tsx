"use client";

import { Toaster } from "react-hot-toast";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function ResponsiveToaster() {
  const isNarrowViewport = useMediaQuery("(max-width: 1080px)");
  return <Toaster position={isNarrowViewport ? "bottom-left" : "top-right"} />;
}
