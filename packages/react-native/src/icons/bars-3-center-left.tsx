import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, { G, Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedG = Animated.createAnimatedComponent(G);
const AnimatedPath = Animated.createAnimatedComponent(Path);

export type Bars3CenterLeftIconHandle = IconHandle;

const Bars3CenterLeftIcon = forwardRef<Bars3CenterLeftIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const topX = useSharedValue(0);
    const centerX = useSharedValue(0);
    const bottomX = useSharedValue(0);
    const centerLength = useSharedValue(1);

    const startAnimation = useCallback(() => {
      topX.value = withDelay(
        0,
        withSequence(withTiming(-3, { duration: 200 }), withTiming(0, { duration: 200 }))
      );
      centerX.value = withDelay(
        50,
        withSequence(withTiming(-2, { duration: 250 }), withTiming(0, { duration: 250 }))
      );
      bottomX.value = withDelay(
        100,
        withSequence(withTiming(-3, { duration: 200 }), withTiming(0, { duration: 200 }))
      );
      centerLength.value = withDelay(
        50,
        withSequence(withTiming(0.5, { duration: 250 }), withTiming(1, { duration: 250 }))
      );
    }, [topX, centerX, bottomX, centerLength]);

    const stopAnimation = useCallback(() => {
      topX.value = withTiming(0, { duration: 200 });
      centerX.value = withTiming(0, { duration: 200 });
      bottomX.value = withTiming(0, { duration: 200 });
      centerLength.value = withTiming(1, { duration: 200 });
    }, [topX, centerX, bottomX, centerLength]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const topGroupProps = useAnimatedProps(() => ({
      x: topX.value,
    }));

    const centerGroupProps = useAnimatedProps(() => ({
      x: centerX.value,
    }));

    const bottomGroupProps = useAnimatedProps(() => ({
      x: bottomX.value,
    }));

    const centerProps = useAnimatedProps(() => ({
      opacity: 1,
      pathLength: centerLength.value,
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
            <AnimatedG animatedProps={topGroupProps}>
              <Path
                d="M3.75 6.75h16.5"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={centerGroupProps}>
              <AnimatedPath
                animatedProps={centerProps}
                d="M3.75 12H12"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={bottomGroupProps}>
              <Path
                d="M3.75 17.25h16.5"
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

Bars3CenterLeftIcon.displayName = "Bars3CenterLeftIcon";

export { Bars3CenterLeftIcon };
