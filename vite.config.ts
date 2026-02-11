import fs from "node:fs";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// Get all icon files
const iconsDir = resolve(import.meta.dirname);
const iconFiles = fs
  .readdirSync(iconsDir)
  .filter(
    (file) =>
      file.endsWith(".tsx") && file !== "index.ts" && file !== "types.ts"
  );

// Create entry points for each icon
const entryPoints: Record<string, string> = {
  index: resolve(import.meta.dirname, "index.ts"),
  ...iconFiles.reduce<Record<string, string>>((acc, file) => {
    const name = file.replace(".tsx", "");
    acc[name] = resolve(import.meta.dirname, file);
    return acc;
  }, {}),
};

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["**/*.tsx", "index.ts"],
      exclude: ["node_modules"],
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(import.meta.dirname),
    },
  },
  build: {
    lib: {
      entry: entryPoints,
      formats: ["es"],
      fileName: (_format, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react/jsx-runtime",
        "motion/react",
        "clsx",
        "tailwind-merge",
      ],
      output: {
        preserveModules: false,
        inlineDynamicImports: false,
      },
    },
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
  },
});
