"use client";

import { Timeline } from "@/components/Timeline";
import { experiences } from "@/constants/data";

export default function Experiences() {
  return (
    <div id="experience" className="w-full scroll-mt-12">
      <Timeline data={experiences} />
    </div>
  );
}
