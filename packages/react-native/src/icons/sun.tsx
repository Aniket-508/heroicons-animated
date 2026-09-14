import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle, G, Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedG = Animated.createAnimatedComponent(G);

export type SunIconHandle = IconHandle;

const SunIcon = forwardRef<SunIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const s0Opacity = useSharedValue(1);
    const s1Opacity = useSharedValue(1);
    const s2Opacity = useSharedValue(1);
    const s3Opacity = useSharedValue(1);
    const s4Opacity = useSharedValue(1);
    const s5Opacity = useSharedValue(1);
    const s6Opacity = useSharedValue(1);
    const s7Opacity = useSharedValue(1);

    const startAnimation = useCallback(() => {
      s0Opacity.value = withSequence(
        withTiming(0, { duration: 150 }),
        withTiming(1, { duration: 150 })
      );
      s1Opacity.value = withDelay(
        100,
        withSequence(withTiming(0, { duration: 150 }), withTiming(1, { duration: 150 }))
      );
      s2Opacity.value = withDelay(
        200,
        withSequence(withTiming(0, { duration: 150 }), withTiming(1, { duration: 150 }))
      );
      s3Opacity.value = withDelay(
        300,
        withSequence(withTiming(0, { duration: 150 }), withTiming(1, { duration: 150 }))
      );
      s4Opacity.value = withDelay(
        400,
        withSequence(withTiming(0, { duration: 150 }), withTiming(1, { duration: 150 }))
      );
      s5Opacity.value = withDelay(
        500,
        withSequence(withTiming(0, { duration: 150 }), withTiming(1, { duration: 150 }))
      );
      s6Opacity.value = withDelay(
        600,
        withSequence(withTiming(0, { duration: 150 }), withTiming(1, { duration: 150 }))
      );
      s7Opacity.value = withDelay(
        700,
        withSequence(withTiming(0, { duration: 150 }), withTiming(1, { duration: 150 }))
      );
    }, [s0Opacity, s1Opacity, s2Opacity, s3Opacity, s4Opacity, s5Opacity, s6Opacity, s7Opacity]);

    const stopAnimation = useCallback(() => {
      s0Opacity.value = withTiming(1, { duration: 200 });
      s1Opacity.value = withTiming(1, { duration: 200 });
      s2Opacity.value = withTiming(1, { duration: 200 });
      s3Opacity.value = withTiming(1, { duration: 200 });
      s4Opacity.value = withTiming(1, { duration: 200 });
      s5Opacity.value = withTiming(1, { duration: 200 });
      s6Opacity.value = withTiming(1, { duration: 200 });
      s7Opacity.value = withTiming(1, { duration: 200 });
    }, [s0Opacity, s1Opacity, s2Opacity, s3Opacity, s4Opacity, s5Opacity, s6Opacity, s7Opacity]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const s0Props = useAnimatedProps(() => ({
      opacity: s0Opacity.value,
    }));

    const s1Props = useAnimatedProps(() => ({
      opacity: s1Opacity.value,
    }));

    const s2Props = useAnimatedProps(() => ({
      opacity: s2Opacity.value,
    }));

    const s3Props = useAnimatedProps(() => ({
      opacity: s3Opacity.value,
    }));

    const s4Props = useAnimatedProps(() => ({
      opacity: s4Opacity.value,
    }));

    const s5Props = useAnimatedProps(() => ({
      opacity: s5Opacity.value,
    }));

    const s6Props = useAnimatedProps(() => ({
      opacity: s6Opacity.value,
    }));

    const s7Props = useAnimatedProps(() => ({
      opacity: s7Opacity.value,
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
            <Circle cx="12" cy="12" r="3.75" stroke={color} strokeWidth={strokeWidth} />
            <AnimatedG animatedProps={s0Props}>
              <Path
                d="M12 3V5.25"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={s1Props}>
              <Path
                d="M18.364 5.63604L16.773 7.22703"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={s2Props}>
              <Path
                d="M21 12H18.75"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={s3Props}>
              <Path
                d="M18.364 18.364L16.773 16.773"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={s4Props}>
              <Path
                d="M12 18.75V21"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={s5Props}>
              <Path
                d="M7.22703 16.773L5.63604 18.364"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={s6Props}>
              <Path
                d="M5.25 12H3"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={s7Props}>
              <Path
                d="M7.22703 7.22703L5.63604 5.63604"
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

SunIcon.displayName = "SunIcon";

export { SunIcon };
