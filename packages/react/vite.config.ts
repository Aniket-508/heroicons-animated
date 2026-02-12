import fs from "node:fs";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const srcDir = resolve(import.meta.dirname, "src");
const iconsDir = resolve(srcDir, "icons");

const iconFiles = fs
  .readdirSync(iconsDir)
  .filter(
    (file) =>
      file.endsWith(".tsx") && file !== "index.ts" && file !== "types.ts"
  );

const entryPoints: Record<string, string> = {
  index: resolve(srcDir, "index.ts"),
  ...iconFiles.reduce<Record<string, string>>((acc, file) => {
    const name = file.replace(".tsx", "");
    acc[name] = resolve(iconsDir, file);
    return acc;
  }, {}),
};

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: [srcDir],
      exclude: ["node_modules"],
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.json",
    }),
  ],
  resolve: {
    alias: {
      "@": srcDir,
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
        preserveModules: true,
        preserveModulesRoot: srcDir,
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name === "index") {
            return "index.js";
          }
          return `icons/${chunkInfo.name}.js`;
        },
        chunkFileNames: "chunks/[name]-[hash].js",
      },
    },
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
  },
});
