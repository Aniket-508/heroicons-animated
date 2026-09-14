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

export type PaperAirplaneIconHandle = IconHandle;

const PaperAirplaneIcon = forwardRef<PaperAirplaneIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const scale = useSharedValue(1);
    const translateX = useSharedValue(0);

    const startAnimation = useCallback(() => {
      scale.value = withSequence(
        withTiming(1, { duration: 240 }),
        withTiming(0.8, { duration: 240 }),
        withTiming(1, { duration: 240 }),
        withTiming(1, { duration: 240 }),
        withTiming(1, { duration: 240 })
      );
      translateX.value = withSequence(
        withTiming(0, { duration: 240 }),
        withTiming(-2.400_000_000_000_000_4, { duration: 240 }),
        withTiming(30, { duration: 240 }),
        withTiming(-36, { duration: 240 }),
        withTiming(0, { duration: 240 })
      );
    }, [scale, translateX]);

    const stopAnimation = useCallback(() => {
      scale.value = withTiming(1, { duration: 200 });
      translateX.value = withTiming(0, { duration: 200 });
    }, [scale, translateX]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }, { translateX: translateX.value }],
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
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
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

PaperAirplaneIcon.displayName = "PaperAirplaneIcon";

export { PaperAirplaneIcon };
