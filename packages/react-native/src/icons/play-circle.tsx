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

export type PlayCircleIconHandle = IconHandle;

const PlayCircleIcon = forwardRef<PlayCircleIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const rotate = useSharedValue(0);
    const translateX = useSharedValue(0);

    const startAnimation = useCallback(() => {
      rotate.value = withSequence(
        withTiming(0, { duration: 125 }),
        withTiming(-10, { duration: 125 }),
        withTiming(0, { duration: 125 }),
        withTiming(0, { duration: 125 })
      );
      translateX.value = withSequence(
        withTiming(0, { duration: 125 }),
        withTiming(-1, { duration: 125 }),
        withTiming(2, { duration: 125 }),
        withTiming(0, { duration: 125 })
      );
    }, [rotate, translateX]);

    const stopAnimation = useCallback(() => {
      rotate.value = withTiming(0, { duration: 200 });
      translateX.value = withTiming(0, { duration: 200 });
    }, [rotate, translateX]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ rotate: `${rotate.value}deg` }, { translateX: translateX.value }],
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
              d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
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

PlayCircleIcon.displayName = "PlayCircleIcon";

export { PlayCircleIcon };
