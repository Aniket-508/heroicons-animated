import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

export type Battery100IconHandle = IconHandle;

const Battery100Icon = forwardRef<Battery100IconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const scale = useSharedValue(1);

    const startAnimation = useCallback(() => {
      scale.value = withSequence(
        withTiming(1, { duration: 133 }),
        withTiming(1.05, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
    }, [scale]);

    const stopAnimation = useCallback(() => {
      scale.value = withTiming(1, { duration: 200 });
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
              d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              clipRule="evenodd"
              d="M4.5 10.5H18V15H4.5v-4.5Z"
              fill={color}
              fillRule="evenodd"
            />
            <Path
              clipRule="evenodd"
              d="M4.5 10.5H18V15H4.5v-4.5Z"
              fill={color}
              fillRule="evenodd"
            />
          </Svg>
        </Animated.View>
      </IconWrapper>
    );
  }
);

Battery100Icon.displayName = "Battery100Icon";

export { Battery100Icon };
