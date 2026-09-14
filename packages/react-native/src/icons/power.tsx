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

export type PowerIconHandle = IconHandle;

const PowerIcon = forwardRef<PowerIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const p0Scale = useSharedValue(1);
    const p0Opacity = useSharedValue(1);
    const p1TranslateY = useSharedValue(0);

    const startAnimation = useCallback(() => {
      p0Scale.value = withSequence(
        withTiming(1, { duration: 167 }),
        withTiming(1.05, { duration: 167 }),
        withTiming(1, { duration: 167 })
      );
      p0Opacity.value = withSequence(
        withTiming(0.5, { duration: 125 }),
        withTiming(1, { duration: 125 }),
        withTiming(0.5, { duration: 125 }),
        withTiming(1, { duration: 125 })
      );
      p1TranslateY.value = withSequence(
        withTiming(0, { duration: 100 }),
        withTiming(-2, { duration: 100 }),
        withTiming(0, { duration: 100 })
      );
    }, [p0Scale, p0Opacity, p1TranslateY]);

    const stopAnimation = useCallback(() => {
      p0Scale.value = withTiming(1, { duration: 200 });
      p0Opacity.value = withTiming(1, { duration: 200 });
      p1TranslateY.value = withTiming(0, { duration: 200 });
    }, [p0Scale, p0Opacity, p1TranslateY]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const p0Props = useAnimatedProps(() => ({
      scale: p0Scale.value,
      opacity: p0Opacity.value,
    }));

    const p1Props = useAnimatedProps(() => ({
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
                d="M5.636 5.636a9 9 0 1 0 12.728 0"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={p1Props}>
              <Path
                d="M12 3v9"
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

PowerIcon.displayName = "PowerIcon";

export { PowerIcon };
