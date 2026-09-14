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

export type LinkSlashIconHandle = IconHandle;

const LinkSlashIcon = forwardRef<LinkSlashIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const translateX = useSharedValue(0);

    const startAnimation = useCallback(() => {
      translateX.value = withSequence(
        withTiming(0, { duration: 100 }),
        withTiming(-1.680_000_000_000_000_2, { duration: 100 }),
        withTiming(1.680_000_000_000_000_2, { duration: 100 }),
        withTiming(-1.680_000_000_000_000_2, { duration: 100 }),
        withTiming(1.680_000_000_000_000_2, { duration: 100 }),
        withTiming(0, { duration: 100 })
      );
    }, [translateX]);

    const stopAnimation = useCallback(() => {
      translateX.value = withTiming(0, { duration: 200 });
    }, [translateX]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateX: translateX.value }],
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
              d="M13.181 8.68a4.503 4.503 0 0 1 1.903 6.405m-9.768-2.782L3.56 14.06a4.5 4.5 0 0 0 6.364 6.365l3.129-3.129m5.614-5.615 1.757-1.757a4.5 4.5 0 0 0-6.364-6.365l-4.5 4.5c-.258.26-.479.541-.661.84m1.903 6.405a4.495 4.495 0 0 1-1.242-.88 4.483 4.483 0 0 1-1.062-1.683m6.587 2.345 5.907 5.907m-5.907-5.907L8.898 8.898M2.991 2.99 8.898 8.9"
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

LinkSlashIcon.displayName = "LinkSlashIcon";

export { LinkSlashIcon };
