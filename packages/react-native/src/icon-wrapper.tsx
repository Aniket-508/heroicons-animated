import React from "react";
import { Pressable } from "react-native";
import type { IconProps } from "./types";

interface IconWrapperProps extends Pick<IconProps, "controlled" | "onPress"> {
  onPressIn?: () => void;
  onPressOut?: () => void;
  children: React.ReactNode;
}

/**
 * Wraps icon content in a Pressable when not in controlled mode.
 * In controlled mode, renders children directly without interaction handling.
 */
export function IconWrapper({
  controlled,
  onPress,
  onPressIn,
  onPressOut,
  children,
}: IconWrapperProps) {
  if (controlled) {
    return <>{children}</>;
  }

  return (
    <Pressable onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
      {children}
    </Pressable>
  );
}
