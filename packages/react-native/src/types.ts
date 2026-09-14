import type { ViewStyle } from "react-native";

/**
 * Imperative handle exposed by each icon component via ref.
 * Allows programmatic control of animations.
 */
export interface IconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

/**
 * Common props shared by all icon components.
 */
export interface IconProps {
  /** Icon size in pixels (width & height). Defaults to 28. */
  size?: number;
  /** Stroke/fill color. Defaults to "currentColor". */
  color?: string;
  /** Stroke width. Defaults to 1.5. */
  strokeWidth?: number;
  /** Additional styles applied to the container view. */
  style?: ViewStyle;
  /**
   * When true, disables the built-in Pressable wrapper.
   * Use this when you want to handle press events yourself
   * and trigger animations via the ref handle.
   */
  controlled?: boolean;
  /** Called when the icon is pressed. */
  onPress?: () => void;
}
