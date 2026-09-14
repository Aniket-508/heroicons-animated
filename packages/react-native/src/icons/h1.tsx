import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

export type H1IconHandle = IconHandle;

const H1Icon = forwardRef<H1IconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const scale = useSharedValue(1);

    const startAnimation = useCallback(() => {
      scale.value = withSpring(1.05, { stiffness: 500, damping: 25 });
    }, [scale]);

    const stopAnimation = useCallback(() => {
      scale.value = withSpring(1);
    }, [scale]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
    }));

    return (
      <IconWrapper
        controlled={controlled}
        onPress={onPress}
        onPressIn={startAnimation}
        onPressOut={stopAnimation}
      >
        <Animated.View style={[animatedStyle, style]}>
          <Svg fill="none" height={size} viewBox="0 0 24 24" width={size}>
            <Path
              d="M2.243 4.493v7.5m0 0v7.502m0-7.501h10.5m0-7.5v7.5m0 0v7.501"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M17.244 10.868l2.25-1.5v10.126h-2.25m2.25 0h2.25"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
          </Svg>
        </Animated.View>
      </IconWrapper>
    );
  }
);

H1Icon.displayName = "H1Icon";

export { H1Icon };
