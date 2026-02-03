import { existsSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageDir = join(__dirname, "..");
const iconsDir = join(packageDir, "src/lib/icons");

const iconNames = readdirSync(iconsDir)
  .filter((file) => file.endsWith(".svelte"))
  .map((file) => file.replace(".svelte", ""));

const proxyDir = join(packageDir, "icons");
if (!existsSync(proxyDir)) {
  mkdirSync(proxyDir, { recursive: true });
}

for (const name of iconNames) {
  // ESM proxy (Svelte is ESM only)
  writeFileSync(
    join(proxyDir, `${name}.js`),
    `export { default } from "../dist/icons/${name}.js";\nexport * from "../dist/icons/${name}.js";\n`
  );
  // TypeScript declarations proxy
  writeFileSync(
    join(proxyDir, `${name}.d.ts`),
    `export { default } from "../dist/icons/${name}";\nexport * from "../dist/icons/${name}";\n`
  );
}

console.log(`Generated ${iconNames.length} icon proxies`);
