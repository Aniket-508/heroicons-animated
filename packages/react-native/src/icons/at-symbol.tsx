import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle, Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedPath = Animated.createAnimatedComponent(Path);

export type AtSymbolIconHandle = IconHandle;

const AtSymbolIcon = forwardRef<AtSymbolIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const circleOpacity = useSharedValue(1);
    const circleLength = useSharedValue(1);
    const circleOffset = useSharedValue(0);
    const pathOpacity = useSharedValue(1);
    const pathLength = useSharedValue(1);

    const startAnimation = useCallback(() => {
      circleOpacity.value = 0;
      circleLength.value = 0;
      circleOffset.value = 1;
      circleOpacity.value = withTiming(1, { duration: 100 });
      circleLength.value = withTiming(1, { duration: 300 });
      circleOffset.value = withTiming(0, { duration: 300 });

      pathOpacity.value = 0;
      pathLength.value = 0;
      pathOpacity.value = withDelay(300, withTiming(1, { duration: 100 }));
      pathLength.value = withDelay(300, withTiming(1, { duration: 300 }));
    }, [circleOpacity, circleLength, circleOffset, pathOpacity, pathLength]);

    const stopAnimation = useCallback(() => {
      circleOpacity.value = withTiming(1, { duration: 100 });
      circleLength.value = withTiming(1, { duration: 300 });
      circleOffset.value = withTiming(0, { duration: 300 });
      pathOpacity.value = withTiming(1, { duration: 100 });
      pathLength.value = withTiming(1, { duration: 300 });
    }, [circleOpacity, circleLength, circleOffset, pathOpacity, pathLength]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const circleProps = useAnimatedProps(() => ({
      opacity: circleOpacity.value,
      pathLength: circleLength.value,
      pathOffset: circleOffset.value,
    }));

    const pathProps = useAnimatedProps(() => ({
      opacity: pathOpacity.value,
      pathLength: pathLength.value,
    }));

    return (
      <IconWrapper
        controlled={controlled}
        onPress={onPress}
        onPressIn={startAnimation}
        onPressOut={stopAnimation}
      >
        <Animated.View style={style}>
          <Svg fill="none" height={size} viewBox="0 0 24 24" width={size}>
            <AnimatedCircle
              animatedProps={circleProps}
              cx={12}
              cy={12}
              fill="none"
              r={4.5}
              stroke={color}
              strokeWidth={strokeWidth}
            />
            <AnimatedPath
              animatedProps={pathProps}
              d="M16.5 12c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
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

AtSymbolIcon.displayName = "AtSymbolIcon";

export { AtSymbolIcon };
