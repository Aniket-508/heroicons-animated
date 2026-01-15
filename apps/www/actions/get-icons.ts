import { ICON_MANIFEST } from "@heroicons-animated/shared";

type Icon = {
  name: string;
  keywords: string[];
};

const getIcons = (): Icon[] => {
  return ICON_MANIFEST.map(({ name, keywords }) => ({
    name,
    keywords,
  }));
};

export { getIcons };
export type { Icon };
