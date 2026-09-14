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

export type ChevronDoubleUpIconHandle = IconHandle;

const ChevronDoubleUpIcon = forwardRef<ChevronDoubleUpIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const translateY = useSharedValue(0);

    const startAnimation = useCallback(() => {
      translateY.value = withSequence(
        withTiming(0, { duration: 167 }),
        withTiming(-2, { duration: 167 }),
        withTiming(0, { duration: 167 })
      );
    }, [translateY]);

    const stopAnimation = useCallback(() => {
      translateY.value = withTiming(0, { duration: 200 });
    }, [translateY]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateY: translateY.value }],
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
              d="m4.5 18.75 7.5-7.5 7.5 7.5"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="m4.5 12.75 7.5-7.5 7.5 7.5"
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

ChevronDoubleUpIcon.displayName = "ChevronDoubleUpIcon";

export { ChevronDoubleUpIcon };
