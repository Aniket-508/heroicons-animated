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

export type MagnifyingGlassCircleIconHandle = IconHandle;

const MagnifyingGlassCircleIcon = forwardRef<MagnifyingGlassCircleIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const startAnimation = useCallback(() => {
      translateX.value = withSequence(
        withTiming(0, { duration: 250 }),
        withTiming(0, { duration: 250 }),
        withTiming(-2, { duration: 250 }),
        withTiming(0, { duration: 250 })
      );
      translateY.value = withSequence(
        withTiming(0, { duration: 250 }),
        withTiming(-3, { duration: 250 }),
        withTiming(0, { duration: 250 }),
        withTiming(0, { duration: 250 })
      );
    }, [translateX, translateY]);

    const stopAnimation = useCallback(() => {
      translateX.value = withTiming(0, { duration: 200 });
      translateY.value = withTiming(0, { duration: 200 });
    }, [translateX, translateY]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateX: translateX.value }, { translateY: translateY.value }],
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
              d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M15.75 15.75L13.2615 13.2615M13.2615 13.2615C13.8722 12.6507 14.25 11.807 14.25 10.875C14.25 9.01104 12.739 7.5 10.875 7.5C9.01104 7.5 7.5 9.01104 7.5 10.875C7.5 12.739 9.01104 14.25 10.875 14.25C11.807 14.25 12.6507 13.8722 13.2615 13.2615"
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

MagnifyingGlassCircleIcon.displayName = "MagnifyingGlassCircleIcon";

export { MagnifyingGlassCircleIcon };
