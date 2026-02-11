import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ICONS_DIR = join(process.cwd(), "src/icons");

interface CheckResult {
  missingImports: string[];
  missingInList: string[];
  totalIconFiles: number;
  totalImports: number;
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

function getImportsFromIndex(): Set<string> {
  const indexPath = join(process.cwd(), "src", "index.ts");

  if (!existsSync(indexPath)) {
    console.error("index.ts not found:", indexPath);
    return new Set();
  }

  const content = readFileSync(indexPath, "utf-8");
  const imports = new Set<string>();
  const matches = content.matchAll(/from\s+["']\.\/icons\/([^"']+)["']/g);

  for (const match of matches) {
    if (match[1]) {
      imports.add(match[1]);
    }
  }

  return imports;
}

function checkImports(): CheckResult {
  const iconFiles = getAllIconFiles();
  const imports = getImportsFromIndex();

  const missingImports = iconFiles.filter((file) => !imports.has(file));

  const missingInList: string[] = [];
  for (const importedFile of imports) {
    if (!iconFiles.includes(importedFile)) {
      missingInList.push(importedFile);
    }
  }

  return {
    missingImports,
    missingInList,
    totalIconFiles: iconFiles.length,
    totalImports: imports.size,
  };
}

function printReport() {
  console.log("Checking icon imports...");

  const result = checkImports();

  console.log("   Total icon files (.tsx):", result.totalIconFiles);
  console.log("   Total imports in index.ts:", result.totalImports);

  if (result.missingImports.length > 0) {
    console.log("MISSING IMPORTS:");
    for (const file of result.missingImports) {
      console.log(`  - icons/${file}.tsx`);
    }
    console.log("");
    process.exit(1);
  }

  if (result.missingInList.length > 0) {
    console.log("MISSING FILES (imported but not found):");
    for (const file of result.missingInList) {
      console.log(`  - ${file}`);
    }
    console.log("");
    process.exit(1);
  }

  console.log("All icon files are imported\n");
}

printReport();
