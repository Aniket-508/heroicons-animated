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

export type ArrowUpLeftIconHandle = IconHandle;

const ArrowUpLeftIcon = forwardRef<ArrowUpLeftIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const scale = useSharedValue(1);
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const startAnimation = useCallback(() => {
      scale.value = withSequence(
        withTiming(1, { duration: 167 }),
        withTiming(0.85, { duration: 167 }),
        withTiming(1, { duration: 167 })
      );
      translateX.value = withSequence(
        withTiming(0, { duration: 167 }),
        withTiming(4, { duration: 167 }),
        withTiming(0, { duration: 167 })
      );
      translateY.value = withSequence(
        withTiming(0, { duration: 167 }),
        withTiming(4, { duration: 167 }),
        withTiming(0, { duration: 167 })
      );
    }, [scale, translateX, translateY]);

    const stopAnimation = useCallback(() => {
      scale.value = withTiming(1, { duration: 200 });
      translateX.value = withTiming(0, { duration: 200 });
      translateY.value = withTiming(0, { duration: 200 });
    }, [scale, translateX, translateY]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [
        { scale: scale.value },
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
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
              d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25"
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

ArrowUpLeftIcon.displayName = "ArrowUpLeftIcon";

export { ArrowUpLeftIcon };
