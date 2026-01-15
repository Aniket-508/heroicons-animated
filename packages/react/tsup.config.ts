import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["src/index.ts"],
    format: ["cjs", "esm"],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    banner: {
      js: '"use client";',
    },
    external: ["react", "motion", "react-dom"],
  },
  {
    entry: ["src/manifest.ts"],
    format: ["cjs", "esm"],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: false,
    external: ["react", "motion", "react-dom"],
  },
]);
