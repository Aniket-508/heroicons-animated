import type { ComponentType, HTMLAttributes, Ref } from "react";

export interface IconManifestItem {
  name: string;
  keywords: string[];
}
export interface AnimatedIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

export interface AnimatedIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  ref?: Ref<AnimatedIconHandle>;
}

export interface IconListItem {
  name: string;
  icon: ComponentType<AnimatedIconProps>;
  keywords: string[];
}
