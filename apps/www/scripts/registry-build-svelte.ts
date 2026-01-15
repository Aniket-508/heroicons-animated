import fs from "node:fs";
import path from "node:path";
import { SITE } from "@heroicons-animated/shared";
import type { Schema } from "./registry-schema";

const iconsDir = path.join(__dirname, "../../../packages/svelte/src/icons");
const registryComponents = path.join(__dirname, "../public/r/svelte");
const registryIndexPath = path.join(
  __dirname,
  "../public/r/svelte/registry.json"
);

if (!fs.existsSync(registryComponents)) {
  fs.mkdirSync(registryComponents, { recursive: true });
}

console.log("\n🔨 Building Svelte registry components...\n");

const registryItems: Schema[] = [];

const iconFiles = fs
  .readdirSync(iconsDir)
  .filter((file) => file.endsWith(".svelte"));

for (const file of iconFiles) {
  const name = file.replace(".svelte", "");
  const content = fs.readFileSync(path.join(iconsDir, file), "utf8");

  const schema: Schema = {
    $schema: "https://shadcn-svelte.com/schema/registry-item.json",
    name,
    type: "registry:ui",
    registryDependencies: [],
    dependencies: [],
    files: [
      {
        path: `${name}.svelte`,
        content,
        type: "registry:ui",
      },
    ],
  };

  fs.writeFileSync(
    path.join(registryComponents, `${name}.json`),
    JSON.stringify(schema, null, 2)
  );

  const { files, $schema: _itemSchema, ...schemaWithoutContent } = schema;
  registryItems.push({
    ...schemaWithoutContent,
    files: files.map((file) => {
      const { content, ...fileWithoutContent } = file;
      return fileWithoutContent;
    }),
  });
}

const registryIndex = {
  $schema: "https://shadcn-svelte.com/schema/registry.json",
  name: SITE.NAME,
  homepage: SITE.URL,
  items: registryItems,
};

const registryIndexJson = JSON.stringify(registryIndex, null, 2);
fs.writeFileSync(registryIndexPath, registryIndexJson);

console.log(`✅ Built ${iconFiles.length} Svelte registry components`);
console.log("✅ Updated Svelte registry.json\n");
