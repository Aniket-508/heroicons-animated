import { SITE } from "@/constants";
import { getPackageManagerPrefix } from "@/lib/get-package-manager-prefix";
import type { PackageManager } from "@/types/package-manager";

export const getFileExtension = (): string => "tsx";

export const getShadcnCLI = (): string => "shadcn@latest";

export const getRegistryPathPrefix = (): string => `@${SITE.NAME}/`;

export const getCLICommand = (
  packageManager: PackageManager,
  iconName: string
): string => {
  const prefix = getPackageManagerPrefix(packageManager);
  const cli = getShadcnCLI();
  return `${prefix} ${cli} add ${getRegistryPathPrefix()}${iconName}`;
};
