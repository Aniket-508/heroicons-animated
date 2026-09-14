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

export type BookmarkSquareIconHandle = IconHandle;

const BookmarkSquareIcon = forwardRef<BookmarkSquareIconHandle, IconProps>(
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
              d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
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

BookmarkSquareIcon.displayName = "BookmarkSquareIcon";

export { BookmarkSquareIcon };
