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

export type GifIconHandle = IconHandle;

const GifIcon = forwardRef<GifIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const startAnimation = useCallback(() => {
      translateX.value = withRepeat(
        withSequence(
          withTiming(0, { duration: 63 }),
          withTiming(-0.5, { duration: 63 }),
          withTiming(0.5, { duration: 63 }),
          withTiming(-0.3, { duration: 63 }),
          withTiming(0.3, { duration: 63 }),
          withTiming(-0.5, { duration: 63 }),
          withTiming(0.5, { duration: 63 }),
          withTiming(0, { duration: 63 })
        ),
        -1
      );
      translateY.value = withRepeat(
        withSequence(
          withTiming(0, { duration: 63 }),
          withTiming(0.5, { duration: 63 }),
          withTiming(-0.5, { duration: 63 }),
          withTiming(0.3, { duration: 63 }),
          withTiming(-0.3, { duration: 63 }),
          withTiming(0.5, { duration: 63 }),
          withTiming(-0.5, { duration: 63 }),
          withTiming(0, { duration: 63 })
        ),
        -1
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
              d="M4.5 19.5H19.5C20.7426 19.5 21.75 18.4926 21.75 17.25V6.75C21.75 5.50736 20.7426 4.5 19.5 4.5H4.5C3.25736 4.5 2.25 5.50736 2.25 6.75V17.25C2.25 18.4926 3.25736 19.5 4.5 19.5Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M9.75 9.34835C8.72056 7.88388 7.05152 7.88388 6.02208 9.34835C4.99264 10.8128 4.99264 13.1872 6.02208 14.6517C7.05152 16.1161 8.72056 16.1161 9.75 14.6517V12H8.25"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M12.75 8.25V15.75"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M18.75 8.25H15.75V12M15.75 12V15.75M15.75 12H18"
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

GifIcon.displayName = "GifIcon";

export { GifIcon };
