import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

export type ExclamationTriangleIconHandle = IconHandle;

const ExclamationTriangleIcon = forwardRef<ExclamationTriangleIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const scale = useSharedValue(1);
    const opacity = useSharedValue(1);

    const startAnimation = useCallback(() => {
      scale.value = withRepeat(
        withSequence(
          withTiming(1, { duration: 267 }),
          withTiming(1.1, { duration: 267 }),
          withTiming(1, { duration: 267 })
        ),
        -1
      );
      opacity.value = withRepeat(
        withSequence(
          withTiming(1, { duration: 267 }),
          withTiming(0.4, { duration: 267 }),
          withTiming(1, { duration: 267 })
        ),
        -1
      );
    }, [scale, opacity]);

    const stopAnimation = useCallback(() => {
      scale.value = withTiming(1, { duration: 200 });
      opacity.value = withTiming(1, { duration: 200 });
    }, [scale, opacity]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
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
              d="M2.697 16.126c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M12 9v3.75"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M12 15.75h.007v.008H12v-.008Z"
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

ExclamationTriangleIcon.displayName = "ExclamationTriangleIcon";

export { ExclamationTriangleIcon };
