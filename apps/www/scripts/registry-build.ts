import fs from "node:fs";
import path from "node:path";
import { SITE } from "@/constants";
import type { Schema } from "./registry-schema";

type Framework = "react" | "vue" | "svelte";

interface FrameworkConfig {
  name: string;
  iconsDir: string;
  extension: string;
  registryPath: string;
  registryIndexPath: string;
  schemaUrl: string;
  registrySchemaUrl: string;
  dependencies: string[];
  writeRootRegistry?: boolean;
}

const getFrameworkConfig = (framework: Framework): FrameworkConfig => {
  const basePublicPath = path.join(__dirname, "../public/r");
  const basePackagesPath = path.join(__dirname, "../../../packages");

  const configs: Record<Framework, FrameworkConfig> = {
    react: {
      name: "React",
      iconsDir: path.join(basePackagesPath, "react/src/icons"),
      extension: ".tsx",
      registryPath: basePublicPath,
      registryIndexPath: path.join(basePublicPath, "registry.json"),
      schemaUrl: "https://ui.shadcn.com/schema/registry-item.json",
      registrySchemaUrl: "https://ui.shadcn.com/schema/registry.json",
      dependencies: ["motion"],
      writeRootRegistry: true,
    },
    vue: {
      name: "Vue",
      iconsDir: path.join(basePackagesPath, "vue/src/icons"),
      extension: ".vue",
      registryPath: path.join(basePublicPath, "vue"),
      registryIndexPath: path.join(basePublicPath, "vue/registry.json"),
      schemaUrl: "https://shadcn-vue.com/schema/registry-item.json",
      registrySchemaUrl: "https://shadcn-vue.com/schema/registry.json",
      dependencies: ["@vueuse/motion"],
    },
    svelte: {
      name: "Svelte",
      iconsDir: path.join(basePackagesPath, "svelte/src/lib/icons"),
      extension: ".svelte",
      registryPath: path.join(basePublicPath, "svelte"),
      registryIndexPath: path.join(basePublicPath, "svelte/registry.json"),
      schemaUrl: "https://shadcn-svelte.com/schema/registry-item.json",
      registrySchemaUrl: "https://shadcn-svelte.com/schema/registry.json",
      dependencies: [],
    },
  };

  return configs[framework];
};

const stripContentFromSchema = (schema: Schema): Schema => {
  const { files, $schema: _itemSchema, ...rest } = schema;
  return {
    ...rest,
    files: files.map((file) => {
      const { content: _content, ...fileWithoutContent } = file;
      return fileWithoutContent;
    }),
  };
};

const writeSchemaFile = (
  registryPath: string,
  name: string,
  schema: Schema
) => {
  fs.writeFileSync(
    path.join(registryPath, `${name}.json`),
    JSON.stringify(schema, null, 2)
  );
};

const buildRegistryItems = (config: FrameworkConfig): Schema[] => {
  const registryItems: Schema[] = [];

  if (!fs.existsSync(config.iconsDir)) {
    console.warn(`  ⚠️  Icons directory not found: ${config.iconsDir}`);
    console.warn(
      `  ⚠️  Run generate scripts first to create ${config.name} icons.\n`
    );
    return registryItems;
  }

  const iconFiles = fs
    .readdirSync(config.iconsDir)
    .filter((file) => file.endsWith(config.extension));

  for (const file of iconFiles) {
    const name = file.replace(config.extension, "");
    const content = fs.readFileSync(path.join(config.iconsDir, file), "utf8");

    const schema: Schema = {
      $schema: config.schemaUrl,
      name,
      title: name,
      description: `Animated ${name} icon for ${config.name}`,
      type: "registry:ui",
      registryDependencies: [],
      dependencies: config.dependencies,
      files: [
        {
          path: `${name}${config.extension}`,
          content,
          type: "registry:ui",
        },
      ],
    };

    writeSchemaFile(config.registryPath, name, schema);
    registryItems.push(stripContentFromSchema(schema));
  }

  return registryItems;
};

const buildRegistry = (framework: Framework) => {
  const config = getFrameworkConfig(framework);

  if (!fs.existsSync(config.registryPath)) {
    fs.mkdirSync(config.registryPath, { recursive: true });
  }

  console.log(`\n🔨 Building ${config.name} registry components...\n`);

  const registryItems = buildRegistryItems(config);

  const registryIndex = {
    $schema: config.registrySchemaUrl,
    name: SITE.NAME,
    homepage: SITE.URL,
    items: registryItems,
  };

  const registryIndexJson = JSON.stringify(registryIndex, null, 2);
  fs.writeFileSync(config.registryIndexPath, registryIndexJson);

  if (config.writeRootRegistry) {
    const registryRootPath = path.join(__dirname, "../registry.json");
    fs.writeFileSync(registryRootPath, registryIndexJson);
  }

  console.log(
    `✅ Built ${registryItems.length} ${config.name} registry components`
  );
  console.log(`✅ Updated ${config.name} registry.json\n`);
};

// Parse command line arguments
const args = process.argv.slice(2);
let frameworks: Framework[] = ["react"];

if (args.includes("--all")) {
  frameworks = ["react", "vue", "svelte"];
} else if (args.includes("--vue")) {
  frameworks = ["vue"];
} else if (args.includes("--svelte")) {
  frameworks = ["svelte"];
} else if (args.includes("--react")) {
  frameworks = ["react"];
}

for (const framework of frameworks) {
  buildRegistry(framework);
}
