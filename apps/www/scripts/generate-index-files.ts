import fs from "node:fs";
import path from "node:path";

const reactIndexPath = path.join(
  __dirname,
  "../../../packages/react/src/icons/index.ts"
);
const vueIconsDir = path.join(__dirname, "../../../packages/vue/src/icons");
const svelteIconsDir = path.join(
  __dirname,
  "../../../packages/svelte/src/icons"
);

// Read React index to get the icon list structure
const reactIndex = fs.readFileSync(reactIndexPath, "utf8");

// Extract icon names from React index
const iconMatches = reactIndex.matchAll(/import \{ (\w+Icon) \} from/g);
const icons: string[] = [];
for (const match of iconMatches) {
  icons.push(match[1]);
}

// Generate Vue index
const vueIndexLines: string[] = [];
for (const iconName of icons) {
  // Convert IconName to kebab-case filename
  const kebabName = iconName
    .replace(/Icon$/, "")
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase()
    .slice(1); // Remove leading dash

  vueIndexLines.push(
    `export { default as ${iconName} } from "./${kebabName}.vue";`
  );
}

const vueIndex = `${vueIndexLines.join("\n")}\n`;
fs.writeFileSync(path.join(vueIconsDir, "index.ts"), vueIndex);

// Generate Svelte index
const svelteIndexLines: string[] = [];
for (const iconName of icons) {
  // Convert IconName to kebab-case filename
  const kebabName = iconName
    .replace(/Icon$/, "")
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase()
    .slice(1); // Remove leading dash

  svelteIndexLines.push(
    `export { default as ${iconName} } from "./${kebabName}.svelte";`
  );
}

const svelteIndex = `${svelteIndexLines.join("\n")}\n`;
fs.writeFileSync(path.join(svelteIconsDir, "index.ts"), svelteIndex);

console.log(`✅ Generated index files for ${icons.length} icons`);
console.log(`   - Vue: ${vueIconsDir}/index.ts`);
console.log(`   - Svelte: ${svelteIconsDir}/index.ts`);
