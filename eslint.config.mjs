import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig } from "eslint/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const ignores = [
  "node_modules/**",
  ".next/**",
  "out/**",
  "build/**",
  "public/**",
  "next-env.d.ts",
];

export default defineConfig([
  { ignores },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
]);
