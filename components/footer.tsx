"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="mb-10 px-4 text-center text-gray-500"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <small className="mb-2 block text-xs">
        &copy; 2024 Roman. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Hot Toast, Zod, React Email & Resend, and Vercel
        hosting.
      </p>
    </motion.footer>
  );
}
