import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Svg, { G, Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedG = Animated.createAnimatedComponent(G);

export type Squares2x2IconHandle = IconHandle;

const Squares2x2Icon = forwardRef<Squares2x2IconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const s0Scale = useSharedValue(1);
    const s0Opacity = useSharedValue(1);
    const s1Scale = useSharedValue(1);
    const s1Opacity = useSharedValue(1);
    const s3Scale = useSharedValue(1);
    const s3Opacity = useSharedValue(1);
    const s4Scale = useSharedValue(1);
    const s4Opacity = useSharedValue(1);

    const startAnimation = useCallback(() => {
      s0Scale.value = withSequence(
        withTiming(0.6, { duration: 175 }),
        withTiming(1, { duration: 175 })
      );
      s0Opacity.value = withSequence(
        withTiming(0, { duration: 175 }),
        withTiming(1, { duration: 175 })
      );
      s1Scale.value = withDelay(
        150,
        withSequence(withTiming(0.6, { duration: 175 }), withTiming(1, { duration: 175 }))
      );
      s1Opacity.value = withDelay(
        150,
        withSequence(withTiming(0, { duration: 175 }), withTiming(1, { duration: 175 }))
      );
      s3Scale.value = withDelay(
        450,
        withSequence(withTiming(0.6, { duration: 175 }), withTiming(1, { duration: 175 }))
      );
      s3Opacity.value = withDelay(
        450,
        withSequence(withTiming(0, { duration: 175 }), withTiming(1, { duration: 175 }))
      );
      s4Scale.value = withDelay(
        600,
        withSequence(withTiming(0.6, { duration: 175 }), withTiming(1, { duration: 175 }))
      );
      s4Opacity.value = withDelay(
        600,
        withSequence(withTiming(0, { duration: 175 }), withTiming(1, { duration: 175 }))
      );
    }, [s0Scale, s0Opacity, s1Scale, s1Opacity, s3Scale, s3Opacity, s4Scale, s4Opacity]);

    const stopAnimation = useCallback(() => {
      s0Scale.value = withSpring(1);
      s0Opacity.value = withTiming(1, { duration: 200 });
      s1Scale.value = withSpring(1);
      s1Opacity.value = withTiming(1, { duration: 200 });
      s3Scale.value = withSpring(1);
      s3Opacity.value = withTiming(1, { duration: 200 });
      s4Scale.value = withSpring(1);
      s4Opacity.value = withTiming(1, { duration: 200 });
    }, [s0Scale, s0Opacity, s1Scale, s1Opacity, s3Scale, s3Opacity, s4Scale, s4Opacity]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const s0Props = useAnimatedProps(() => ({
      scale: s0Scale.value,
      opacity: s0Opacity.value,
    }));

    const s1Props = useAnimatedProps(() => ({
      scale: s1Scale.value,
      opacity: s1Opacity.value,
    }));

    const s3Props = useAnimatedProps(() => ({
      scale: s3Scale.value,
      opacity: s3Opacity.value,
    }));

    const s4Props = useAnimatedProps(() => ({
      scale: s4Scale.value,
      opacity: s4Opacity.value,
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
            <AnimatedG animatedProps={s0Props}>
              <Path
                d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6Z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={s1Props}>
              <Path
                d="M13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6Z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={s3Props}>
              <Path
                d="M13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={s4Props}>
              <Path
                d="M3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25Z"
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

Squares2x2Icon.displayName = "Squares2x2Icon";

export { Squares2x2Icon };
