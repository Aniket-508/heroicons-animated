import * as Icons from "@heroicons-animated/react";
import type { ComponentType } from "react";
import type { AnimatedIconProps, IconListItem } from "@/types/icon";
import { ICON_MANIFEST } from "./manifest";

function slugToComponentName(slug: string): string {
  const pascal = `${slug
    .split("-")
    .map((part) => {
      if (part === "3d") return "3D";
      if (part === "2x2") return "2X2";
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join("")}Icon`;
  return pascal;
}

export function getIconList(): IconListItem[] {
  const IconsRecord = Icons as Record<string, ComponentType<AnimatedIconProps>>;
  return ICON_MANIFEST.map((item) => ({
    ...item,
    icon: IconsRecord[slugToComponentName(item.name)],
  }));
}

export const ICON_MAP = new Map(
  getIconList().map((item) => [item.name, item.icon])
);
