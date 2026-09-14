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

const AnimatedG = Animated.createAnimatedComponent(G);

export type ArrowsPointingInIconHandle = IconHandle;

const ArrowsPointingInIcon = forwardRef<ArrowsPointingInIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const g0TranslateX = useSharedValue(0);
    const g0TranslateY = useSharedValue(0);
    const g1TranslateX = useSharedValue(0);
    const g1TranslateY = useSharedValue(0);
    const g2TranslateX = useSharedValue(0);
    const g2TranslateY = useSharedValue(0);
    const g3TranslateX = useSharedValue(0);
    const g3TranslateY = useSharedValue(0);

    const startAnimation = useCallback(() => {
      g0TranslateX.value = withSequence(
        withTiming(0, { duration: 167 }),
        withTiming(2, { duration: 167 }),
        withTiming(0, { duration: 167 })
      );
      g0TranslateY.value = withSequence(
        withTiming(0, { duration: 167 }),
        withTiming(2, { duration: 167 }),
        withTiming(0, { duration: 167 })
      );
      g1TranslateX.value = withSequence(
        withTiming(0, { duration: 167 }),
        withTiming(2, { duration: 167 }),
        withTiming(0, { duration: 167 })
      );
      g1TranslateY.value = withSequence(
        withTiming(0, { duration: 167 }),
        withTiming(-2, { duration: 167 }),
        withTiming(0, { duration: 167 })
      );
      g2TranslateX.value = withSequence(
        withTiming(0, { duration: 167 }),
        withTiming(-2, { duration: 167 }),
        withTiming(0, { duration: 167 })
      );
      g2TranslateY.value = withSequence(
        withTiming(0, { duration: 167 }),
        withTiming(2, { duration: 167 }),
        withTiming(0, { duration: 167 })
      );
      g3TranslateX.value = withSequence(
        withTiming(0, { duration: 167 }),
        withTiming(-2, { duration: 167 }),
        withTiming(0, { duration: 167 })
      );
      g3TranslateY.value = withSequence(
        withTiming(0, { duration: 167 }),
        withTiming(-2, { duration: 167 }),
        withTiming(0, { duration: 167 })
      );
    }, [
      g0TranslateX,
      g0TranslateY,
      g1TranslateX,
      g1TranslateY,
      g2TranslateX,
      g2TranslateY,
      g3TranslateX,
      g3TranslateY,
    ]);

    const stopAnimation = useCallback(() => {
      g0TranslateX.value = withTiming(0, { duration: 200 });
      g0TranslateY.value = withTiming(0, { duration: 200 });
      g1TranslateX.value = withTiming(0, { duration: 200 });
      g1TranslateY.value = withTiming(0, { duration: 200 });
      g2TranslateX.value = withTiming(0, { duration: 200 });
      g2TranslateY.value = withTiming(0, { duration: 200 });
      g3TranslateX.value = withTiming(0, { duration: 200 });
      g3TranslateY.value = withTiming(0, { duration: 200 });
    }, [
      g0TranslateX,
      g0TranslateY,
      g1TranslateX,
      g1TranslateY,
      g2TranslateX,
      g2TranslateY,
      g3TranslateX,
      g3TranslateY,
    ]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const g0Props = useAnimatedProps(() => ({
      x: g0TranslateX.value,
      y: g0TranslateY.value,
    }));

    const g1Props = useAnimatedProps(() => ({
      x: g1TranslateX.value,
      y: g1TranslateY.value,
    }));

    const g2Props = useAnimatedProps(() => ({
      x: g2TranslateX.value,
      y: g2TranslateY.value,
    }));

    const g3Props = useAnimatedProps(() => ({
      x: g3TranslateX.value,
      y: g3TranslateY.value,
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
            <AnimatedG animatedProps={g0Props}>
              <Path
                d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={g1Props}>
              <Path
                d="M9 15v4.5M9 15H4.5M9 15l-5.25 5.25"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={g2Props}>
              <Path
                d="M15 9h4.5M15 9V4.5M15 9l5.25-5.25"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={g3Props}>
              <Path
                d="M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25"
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

ArrowsPointingInIcon.displayName = "ArrowsPointingInIcon";

export { ArrowsPointingInIcon };
