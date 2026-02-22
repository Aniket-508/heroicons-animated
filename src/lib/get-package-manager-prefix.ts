import type { PackageManager } from "@/types/package-manager";

const PREFIX_MAP: Record<PackageManager, string> = {
  pnpm: "pnpm dlx",
  npm: "npx",
  yarn: "npx",
  bun: "bunx --bun",
};

export const getPackageManagerPrefix = (pm: PackageManager) => PREFIX_MAP[pm];
