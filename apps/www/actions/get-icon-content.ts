"use server";

import { promises as fs } from "node:fs";
import path from "node:path";
import type { Framework } from "@/types/icon";

export async function getIconContent(
  name: string,
  framework: Framework = "react"
): Promise<string> {
  let iconsDir: string;
  let extension: string;

  if (framework === "react") {
    iconsDir = path.join(process.cwd(), "../../packages/react/src/icons");
    extension = "tsx";
  } else if (framework === "vue") {
    iconsDir = path.join(process.cwd(), "../../packages/vue/src/icons");
    extension = "vue";
  } else {
    iconsDir = path.join(process.cwd(), "../../packages/svelte/src/lib/icons");
    extension = "svelte";
  }

  const content = await fs.readFile(
    path.join(iconsDir, `${name}.${extension}`),
    "utf-8"
  );
  return content;
}
