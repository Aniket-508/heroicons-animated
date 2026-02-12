"use server";

import { promises as fs } from "node:fs";
import path from "node:path";

export async function getIconContent(name: string): Promise<string> {
  const iconsDir = path.join(process.cwd(), "packages/react/src/icons");
  const extension = "tsx";

  const content = await fs.readFile(
    path.join(iconsDir, `${name}.${extension}`),
    "utf-8"
  );
  return content;
}
