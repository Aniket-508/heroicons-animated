import { ICON_MANIFEST } from "@/lib/manifest";
import type { IconManifestItem } from "@/types/icon";

const getIcons = (): IconManifestItem[] => {
  return ICON_MANIFEST.map(({ name, keywords }) => ({
    name,
    keywords,
  }));
};

export { getIcons };
