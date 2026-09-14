export interface IconProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  title?: string;
  [key: string]: any;
}

export type IconNode = [tag: string, attrs: Record<string, any>];

export interface IconData {
  name: string;
  node: IconNode[];
  animation: string;
}
