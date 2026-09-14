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

export type BookmarkIconHandle = IconHandle;

const BookmarkIcon = forwardRef<BookmarkIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const scaleX = useSharedValue(1);
    const scaleY = useSharedValue(1);

    const startAnimation = useCallback(() => {
      scaleX.value = withSequence(
        withTiming(1, { duration: 120 }),
        withTiming(0.9, { duration: 120 }),
        withTiming(1.1, { duration: 120 }),
        withTiming(0.95, { duration: 120 }),
        withTiming(1, { duration: 120 })
      );
      scaleY.value = withSequence(
        withTiming(1, { duration: 120 }),
        withTiming(1.3, { duration: 120 }),
        withTiming(0.9, { duration: 120 }),
        withTiming(1.05, { duration: 120 }),
        withTiming(1, { duration: 120 })
      );
    }, [scaleX, scaleY]);

    const stopAnimation = useCallback(() => {
      scaleX.value = withTiming(1, { duration: 200 });
      scaleY.value = withTiming(1, { duration: 200 });
    }, [scaleX, scaleY]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scaleX: scaleX.value }, { scaleY: scaleY.value }],
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
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
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

BookmarkIcon.displayName = "BookmarkIcon";

export { BookmarkIcon };
