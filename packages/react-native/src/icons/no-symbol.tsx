import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, { G, Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedG = Animated.createAnimatedComponent(G);

export type NoSymbolIconHandle = IconHandle;

const NoSymbolIcon = forwardRef<NoSymbolIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const circleScale = useSharedValue(1);
    const lineOpacity = useSharedValue(1);
    const lineLength = useSharedValue(1);
    const lineOffset = useSharedValue(0);

    const startAnimation = useCallback(() => {
      circleScale.value = withSequence(
        withTiming(1, { duration: 133 }),
        withTiming(1.1, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
      lineOpacity.value = 0;
      lineLength.value = 0;
      lineOffset.value = 1;

      lineOpacity.value = withTiming(1, { duration: 300 });
      lineLength.value = withTiming(1, { duration: 300 });
      lineOffset.value = withTiming(0, { duration: 300 });
    }, [circleScale, lineOpacity, lineLength, lineOffset]);

    const stopAnimation = useCallback(() => {
      circleScale.value = withTiming(1, { duration: 200 });
      lineOpacity.value = withTiming(1, { duration: 200 });
      lineLength.value = withTiming(1, { duration: 200 });
      lineOffset.value = withTiming(0, { duration: 200 });
    }, [circleScale, lineOpacity, lineLength, lineOffset]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const circleProps = useAnimatedProps(() => ({
      scale: circleScale.value,
      originX: 12,
      originY: 12,
    }));

    const lineProps = useAnimatedProps(() => ({
      opacity: lineOpacity.value,
      pathLength: lineLength.value,
      pathOffset: lineOffset.value,
    }));

    return (
      <IconWrapper
        controlled={controlled}
        onPress={onPress}
        onPressIn={startAnimation}
        onPressOut={stopAnimation}
      >
        <Svg fill="none" height={size} style={style} viewBox="0 0 24 24" width={size}>
          <AnimatedG animatedProps={circleProps}>
            <Path
              d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
          </AnimatedG>
          <AnimatedPath
            animatedProps={lineProps}
            d="M18.364 18.364L5.636 5.636"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
        </Svg>
      </IconWrapper>
    );
  }
);

NoSymbolIcon.displayName = "NoSymbolIcon";

export { NoSymbolIcon };
