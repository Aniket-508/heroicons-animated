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

export type CommandLineIconHandle = IconHandle;

const CommandLineIcon = forwardRef<CommandLineIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const opacity = useSharedValue(1);

    const startAnimation = useCallback(() => {
      opacity.value = withRepeat(
        withSequence(
          withTiming(1, { duration: 267 }),
          withTiming(0, { duration: 267 }),
          withTiming(1, { duration: 267 })
        ),
        -1
      );
    }, [opacity]);

    const stopAnimation = useCallback(() => {
      opacity.value = withTiming(1, { duration: 200 });
    }, [opacity]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
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
              d="M5.25 20.25H18.75C19.9926 20.25 21 19.2426 21 18V6C21 4.75736 19.9926 3.75 18.75 3.75H5.25C4.00736 3.75 3 4.75736 3 6V18C3 19.2426 4.00736 20.25 5.25 20.25Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M6.75 7.5L9.75 9.75L6.75 12"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M11.25 12H14.25"
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

CommandLineIcon.displayName = "CommandLineIcon";

export { CommandLineIcon };
