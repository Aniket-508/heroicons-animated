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

export type Bars3BottomRightIconHandle = IconHandle;

const Bars3BottomRightIcon = forwardRef<Bars3BottomRightIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const topX = useSharedValue(0);
    const middleX = useSharedValue(0);
    const bottomX = useSharedValue(0);
    const bottomLength = useSharedValue(1);
    const bottomOffset = useSharedValue(0);

    const startAnimation = useCallback(() => {
      topX.value = withDelay(
        0,
        withSequence(withTiming(3, { duration: 200 }), withTiming(0, { duration: 200 }))
      );
      middleX.value = withDelay(
        50,
        withSequence(withTiming(3, { duration: 200 }), withTiming(0, { duration: 200 }))
      );
      bottomX.value = withDelay(
        150,
        withSequence(withTiming(2, { duration: 250 }), withTiming(0, { duration: 250 }))
      );
      bottomLength.value = withDelay(
        150,
        withSequence(withTiming(0.5, { duration: 250 }), withTiming(1, { duration: 250 }))
      );
      bottomOffset.value = withDelay(
        150,
        withSequence(withTiming(0.5, { duration: 250 }), withTiming(0, { duration: 250 }))
      );
    }, [topX, middleX, bottomX, bottomLength, bottomOffset]);

    const stopAnimation = useCallback(() => {
      topX.value = withTiming(0, { duration: 200 });
      middleX.value = withTiming(0, { duration: 200 });
      bottomX.value = withTiming(0, { duration: 200 });
      bottomLength.value = withTiming(1, { duration: 200 });
      bottomOffset.value = withTiming(0, { duration: 200 });
    }, [topX, middleX, bottomX, bottomLength, bottomOffset]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const topGroupProps = useAnimatedProps(() => ({
      x: topX.value,
    }));

    const middleGroupProps = useAnimatedProps(() => ({
      x: middleX.value,
    }));

    const bottomGroupProps = useAnimatedProps(() => ({
      x: bottomX.value,
    }));

    const bottomProps = useAnimatedProps(() => ({
      opacity: 1,
      pathLength: bottomLength.value,
      pathOffset: bottomOffset.value,
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
            <AnimatedG animatedProps={middleGroupProps}>
              <Path
                d="M3.75 12h16.5"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={bottomGroupProps}>
              <AnimatedPath
                animatedProps={bottomProps}
                d="M12 17.25h8.25"
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

Bars3BottomRightIcon.displayName = "Bars3BottomRightIcon";

export { Bars3BottomRightIcon };
