import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, { G, Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedG = Animated.createAnimatedComponent(G);

export type CameraIconHandle = IconHandle;

const CameraIcon = forwardRef<CameraIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const scale = useSharedValue(1);
    const lensOpacity = useSharedValue(1);
    const lensScale = useSharedValue(1);

    const startAnimation = useCallback(() => {
      scale.value = withSequence(
        withTiming(1, { duration: 100 }),
        withTiming(0.95, { duration: 100 }),
        withTiming(1, { duration: 100 })
      );
      lensOpacity.value = withSequence(
        withTiming(1, { duration: 100 }),
        withTiming(0.6, { duration: 100 }),
        withTiming(1, { duration: 100 })
      );
      lensScale.value = withSequence(
        withTiming(1, { duration: 100 }),
        withTiming(1.1, { duration: 100 }),
        withTiming(1, { duration: 100 })
      );
    }, [scale, lensOpacity, lensScale]);

    const stopAnimation = useCallback(() => {
      scale.value = withTiming(1, { duration: 200 });
      lensOpacity.value = withTiming(1, { duration: 200 });
      lensScale.value = withTiming(1, { duration: 200 });
    }, [scale, lensOpacity, lensScale]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
    }));

    const lensGroupProps = useAnimatedProps(() => ({
      opacity: lensOpacity.value,
      scale: lensScale.value,
      originX: 12,
      originY: 12.75,
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
              d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <AnimatedG animatedProps={lensGroupProps}>
              <Path
                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
          </Svg>
        </Animated.View>
      </IconWrapper>
    );
  }
);

CameraIcon.displayName = "CameraIcon";

export { CameraIcon };
