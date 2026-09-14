import type { HTMLAttributes } from "svelte/elements";

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
}
