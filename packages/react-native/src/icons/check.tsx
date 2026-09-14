import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export type CheckIconHandle = IconHandle;

const CheckIcon = forwardRef<CheckIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const opacity = useSharedValue(1);
    const scale = useSharedValue(1);
    const drawLength = useSharedValue(1);

    const startAnimation = useCallback(() => {
      opacity.value = 0;
      scale.value = 0.5;
      drawLength.value = 0;
      opacity.value = withTiming(1, { duration: 100 });
      scale.value = withTiming(1, { duration: 400 });
      drawLength.value = withTiming(1, { duration: 400 });
    }, [opacity, scale, drawLength]);

    const stopAnimation = useCallback(() => {
      opacity.value = withTiming(1, { duration: 100 });
      scale.value = withTiming(1, { duration: 300 });
      drawLength.value = withTiming(1, { duration: 300 });
    }, [opacity, scale, drawLength]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
    }));

    const drawProps = useAnimatedProps(() => ({
      opacity: opacity.value,
      pathLength: drawLength.value,
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
            <AnimatedPath
              animatedProps={drawProps}
              d="m4.5 12.75 6 6 9-13.5"
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

CheckIcon.displayName = "CheckIcon";

export { CheckIcon };
