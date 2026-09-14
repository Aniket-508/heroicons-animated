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
const AnimatedPath = Animated.createAnimatedComponent(Path);

export type ArrowLongRightIconHandle = IconHandle;

const ArrowLongRightIcon = forwardRef<ArrowLongRightIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const p0TranslateX = useSharedValue(0);
    const p1Phase = useSharedValue(0);

    const startAnimation = useCallback(() => {
      p0TranslateX.value = withSequence(
        withTiming(0, { duration: 133 }),
        withTiming(-3, { duration: 133 }),
        withTiming(0, { duration: 133 })
      );
      p1Phase.value = withSequence(
        withTiming(0, { duration: 133 }),
        withTiming(1, { duration: 133 }),
        withTiming(2, { duration: 133 })
      );
    }, [p0TranslateX, p1Phase]);

    const stopAnimation = useCallback(() => {
      p0TranslateX.value = withTiming(0, { duration: 200 });
      p1Phase.value = withTiming(0, { duration: 200 });
    }, [p0TranslateX, p1Phase]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const p0Props = useAnimatedProps(() => ({
      x: p0TranslateX.value,
    }));

    const p1Props = useAnimatedProps(() => ({
      d: p1Phase.value < 0.5 ? "M21 12H3" : p1Phase.value < 1.5 ? "M18 12H3" : "M21 12H3",
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
                d="M17.25 8.25 21 12m0 0-3.75 3.75"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedPath
              animatedProps={p1Props}
              d="M21 12H3"
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

ArrowLongRightIcon.displayName = "ArrowLongRightIcon";

export { ArrowLongRightIcon };
