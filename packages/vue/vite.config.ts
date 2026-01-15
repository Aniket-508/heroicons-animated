import { resolve } from "node:path";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "HeroiconsAnimatedVue",
      formats: ["es"],
      fileName: (format) => `index.${format === "es" ? "js" : format}`,
    },
    rollupOptions: {
      external: ["vue", "@vueuse/motion"],
      output: {
        globals: {
          vue: "Vue",
          "@vueuse/motion": "VueUseMotion",
        },
      },
    },
  },
});
