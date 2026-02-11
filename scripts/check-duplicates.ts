import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const ICONS_DIR = join(process.cwd(), "src/icons");

interface DuplicateEntry {
  name: string;
  count: number;
}

function getAllIconFiles(): string[] {
  if (!existsSync(ICONS_DIR)) {
    console.error("Icons directory not found:", ICONS_DIR);
    process.exit(1);
  }

  return readdirSync(ICONS_DIR)
    .filter((file) => file.endsWith(".tsx"))
    .map((file) => file.replace(".tsx", ""))
    .sort();
}

function checkDuplicates(): DuplicateEntry[] {
  const iconFiles = getAllIconFiles();
  const nameCounts = new Map<string, number>();

  for (const file of iconFiles) {
    const current = nameCounts.get(file) || 0;
    nameCounts.set(file, current + 1);
  }

  const duplicates: DuplicateEntry[] = [];
  for (const [name, count] of nameCounts) {
    if (count > 1) {
      duplicates.push({ name, count });
    }
  }

  return duplicates;
}

function printReport() {
  console.log("Checking for duplicates...");

  const duplicates = checkDuplicates();

  console.log("   Total icon files:", duplicates.length > 0 ? "checking..." : getAllIconFiles().length);

  if (duplicates.length > 0) {
    console.log("DUPLICATE NAMES FOUND:");
    for (const { name, count } of duplicates) {
      console.log("  - " + name + " appears " + count + " times");
    }
    console.log("");
    process.exit(1);
  }

  console.log("No duplicate names found\n");
}

printReport();
