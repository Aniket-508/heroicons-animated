import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface IconManifestItem {
  name: string;
  keywords: string[];
}

function generateKeywords(name: string): string[] {
  const parts = name.split("-");
  const keywords = [...parts];
  keywords.push(name);
  return keywords;
}

function buildManifest(): IconManifestItem[] {
  const registryPath = path.resolve(__dirname, "../registry.json");

  if (!fs.existsSync(registryPath)) {
    console.warn(`Registry file not found: ${registryPath}`);
    return [];
  }

  const registryContent = fs.readFileSync(registryPath, "utf8");
  const registry = JSON.parse(registryContent);

  return registry.items.map((item: { name: string }) => ({
    name: item.name,
    keywords: generateKeywords(item.name),
  }));
}

export const ICON_MANIFEST = buildManifest();
