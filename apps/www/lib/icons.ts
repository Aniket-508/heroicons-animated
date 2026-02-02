import * as Icons from "@heroicons-animated/react";
import type { ElementType } from "react";
import { ICON_MANIFEST } from "./manifest";

export type IconListItem = {
  name: string;
  icon: ElementType;
  keywords: string[];
};

function slugToComponentName(slug: string): string {
  const pascal = `${slug
    .split("-")
    .map((part) =>
      part === "3d" ? "3D" : part.charAt(0).toUpperCase() + part.slice(1)
    )
    .join("")}Icon`;
  return pascal;
}

export function getIconList(): IconListItem[] {
  const IconsRecord = Icons as Record<string, ElementType | undefined>;
  return ICON_MANIFEST.map((item) => ({
    ...item,
    icon: IconsRecord[slugToComponentName(item.name)] as ElementType,
  }));
}
