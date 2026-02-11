import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ICONS_DIR = join(process.cwd(), "src/icons");
const FIX_MODE = process.argv.includes("--fix");

const REQUIRED_PATTERNS = [
  { pattern: /"use client";/, message: 'Missing "use client" directive' },
  {
    pattern: /from\s+["']motion\/react["']/,
    message: "Missing motion/react import",
  },
  { pattern: /from\s+["']react["']/, message: "Missing react import" },
  { pattern: /forwardRef/, message: "Missing forwardRef import" },
  { pattern: /useCallback/, message: "Missing useCallback import" },
  {
    pattern: /useImperativeHandle/,
    message: "Missing useImperativeHandle import",
  },
  { pattern: /useRef/, message: "Missing useRef import" },
  {
    pattern: /export\s+interface\s+\w+IconHandle/,
    message: "Missing IconHandle interface",
  },
  {
    pattern: /interface\s+\w+IconProps/,
    message: "Missing IconProps interface",
  },
  {
    pattern: /const\s+\w+Icon\s*=/,
    message: "Missing Icon component definition",
  },
  { pattern: /forwardRef/, message: "Missing forwardRef usage" },
  {
    pattern: /useImperativeHandle/,
    message: "Missing useImperativeHandle usage",
  },
  { pattern: /useCallback/, message: "Missing useCallback usage" },
];

function checkIconStyle() {
  console.log(`${FIX_MODE ? "Fixing" : "Checking"} icon styles...`);

  if (!existsSync(ICONS_DIR)) {
    console.error("Icons directory not found:", ICONS_DIR);
    process.exit(1);
  }

  const files = readdirSync(ICONS_DIR).filter((f) => f.endsWith(".tsx"));
  const errors: string[] = [];

  for (const file of files) {
    const filePath = join(ICONS_DIR, file);
    const content = readFileSync(filePath, "utf-8");

    for (const { pattern, message } of REQUIRED_PATTERNS) {
      if (!(pattern.test(content) || FIX_MODE)) {
        errors.push(`${file}: ${message}`);
      }
    }
  }

  if (errors.length > 0) {
    console.log("Found style errors:");
    for (const error of errors) {
      console.log(`  - ${error}`);
    }
    console.log("");
    process.exit(1);
  }

  console.log(`Checked ${files.length} files. All OK.\n`);
}

checkIconStyle();
