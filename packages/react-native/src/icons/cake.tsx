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

export type CakeIconHandle = IconHandle;

const CakeIcon = forwardRef<CakeIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const p0TranslateY = useSharedValue(0);
    const p0Opacity = useSharedValue(1);
    const p1Scale = useSharedValue(1);
    const p1Opacity = useSharedValue(1);
    const p2Scale = useSharedValue(1);
    const p2Opacity = useSharedValue(1);
    const p3Scale = useSharedValue(1);
    const p3Opacity = useSharedValue(1);

    const startAnimation = useCallback(() => {
      p0TranslateY.value = withSequence(
        withTiming(8, { duration: 133 }),
        withTiming(-1, { duration: 133 }),
        withTiming(0, { duration: 133 })
      );
      p0Opacity.value = withSequence(
        withTiming(0, { duration: 133 }),
        withTiming(1, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
      p1Scale.value = withSequence(
        withTiming(0, { duration: 83 }),
        withTiming(1.3, { duration: 83 }),
        withTiming(1, { duration: 83 })
      );
      p1Opacity.value = withSequence(
        withTiming(0, { duration: 83 }),
        withTiming(1, { duration: 83 }),
        withTiming(1, { duration: 83 })
      );
      p2Scale.value = withSequence(
        withTiming(0, { duration: 83 }),
        withTiming(1.3, { duration: 83 }),
        withTiming(1, { duration: 83 })
      );
      p2Opacity.value = withSequence(
        withTiming(0, { duration: 83 }),
        withTiming(1, { duration: 83 }),
        withTiming(1, { duration: 83 })
      );
      p3Scale.value = withSequence(
        withTiming(0, { duration: 83 }),
        withTiming(1.3, { duration: 83 }),
        withTiming(1, { duration: 83 })
      );
      p3Opacity.value = withSequence(
        withTiming(0, { duration: 83 }),
        withTiming(1, { duration: 83 }),
        withTiming(1, { duration: 83 })
      );
    }, [p0TranslateY, p0Opacity, p1Scale, p1Opacity, p2Scale, p2Opacity, p3Scale, p3Opacity]);

    const stopAnimation = useCallback(() => {
      p0TranslateY.value = withTiming(0, { duration: 200 });
      p0Opacity.value = withTiming(1, { duration: 200 });
      p1Scale.value = withTiming(1, { duration: 200 });
      p1Opacity.value = withTiming(1, { duration: 200 });
      p2Scale.value = withTiming(1, { duration: 200 });
      p2Opacity.value = withTiming(1, { duration: 200 });
      p3Scale.value = withTiming(1, { duration: 200 });
      p3Opacity.value = withTiming(1, { duration: 200 });
    }, [p0TranslateY, p0Opacity, p1Scale, p1Opacity, p2Scale, p2Opacity, p3Scale, p3Opacity]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const p0Props = useAnimatedProps(() => ({
      y: p0TranslateY.value,
      opacity: p0Opacity.value,
    }));

    const p1Props = useAnimatedProps(() => ({
      scale: p1Scale.value,
      opacity: p1Opacity.value,
    }));

    const p2Props = useAnimatedProps(() => ({
      scale: p2Scale.value,
      opacity: p2Opacity.value,
    }));

    const p3Props = useAnimatedProps(() => ({
      scale: p3Scale.value,
      opacity: p3Opacity.value,
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
            <Path
              d="M9 8.25v-1.5"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M12 8.25v-1.5"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M15 8.25v-1.5"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <AnimatedG animatedProps={p0Props}>
              <Path
                d="M12 8.25c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513m3 3.879-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={p1Props}>
              <Path
                d="M9.265 3.11a.375.375 0 1 1-.53 0L9 2.845l.265.265Z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={p2Props}>
              <Path
                d="M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={p3Props}>
              <Path
                d="M15.265 3.11a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
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

CakeIcon.displayName = "CakeIcon";

export { CakeIcon };
