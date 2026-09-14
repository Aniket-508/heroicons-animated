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

export type Square2StackIconHandle = IconHandle;

const Square2StackIcon = forwardRef<Square2StackIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const p0TranslateX = useSharedValue(0);
    const p0TranslateY = useSharedValue(0);
    const p0Opacity = useSharedValue(1);
    const p1TranslateX = useSharedValue(0);
    const p1TranslateY = useSharedValue(0);

    const startAnimation = useCallback(() => {
      p0TranslateX.value = withSequence(
        withTiming(-4, { duration: 150 }),
        withTiming(0, { duration: 150 })
      );
      p0TranslateY.value = withSequence(
        withTiming(-4, { duration: 150 }),
        withTiming(0, { duration: 150 })
      );
      p0Opacity.value = withSequence(
        withTiming(0, { duration: 150 }),
        withTiming(1, { duration: 150 })
      );
      p1TranslateX.value = withSequence(
        withTiming(0, { duration: 100 }),
        withTiming(1, { duration: 100 }),
        withTiming(0, { duration: 100 })
      );
      p1TranslateY.value = withSequence(
        withTiming(0, { duration: 100 }),
        withTiming(1, { duration: 100 }),
        withTiming(0, { duration: 100 })
      );
    }, [p0TranslateX, p0TranslateY, p0Opacity, p1TranslateX, p1TranslateY]);

    const stopAnimation = useCallback(() => {
      p0TranslateX.value = withTiming(0, { duration: 200 });
      p0TranslateY.value = withTiming(0, { duration: 200 });
      p0Opacity.value = withTiming(1, { duration: 200 });
      p1TranslateX.value = withTiming(0, { duration: 200 });
      p1TranslateY.value = withTiming(0, { duration: 200 });
    }, [p0TranslateX, p0TranslateY, p0Opacity, p1TranslateX, p1TranslateY]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const p0Props = useAnimatedProps(() => ({
      x: p0TranslateX.value,
      y: p0TranslateY.value,
      opacity: p0Opacity.value,
    }));

    const p1Props = useAnimatedProps(() => ({
      x: p1TranslateX.value,
      y: p1TranslateY.value,
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
            <AnimatedG animatedProps={p0Props}>
              <Path
                d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={p1Props}>
              <Path
                d="M16.5 8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
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

Square2StackIcon.displayName = "Square2StackIcon";

export { Square2StackIcon };
