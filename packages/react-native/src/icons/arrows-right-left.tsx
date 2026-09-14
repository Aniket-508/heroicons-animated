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

export type ArrowsRightLeftIconHandle = IconHandle;

const ArrowsRightLeftIcon = forwardRef<ArrowsRightLeftIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const g0TranslateX = useSharedValue(0);
    const g1TranslateX = useSharedValue(0);

    const startAnimation = useCallback(() => {
      g0TranslateX.value = withSequence(
        withTiming(0, { duration: 167 }),
        withTiming(-2, { duration: 167 }),
        withTiming(0, { duration: 167 })
      );
      g1TranslateX.value = withSequence(
        withTiming(0, { duration: 167 }),
        withTiming(2, { duration: 167 }),
        withTiming(0, { duration: 167 })
      );
    }, [g0TranslateX, g1TranslateX]);

    const stopAnimation = useCallback(() => {
      g0TranslateX.value = withTiming(0, { duration: 200 });
      g1TranslateX.value = withTiming(0, { duration: 200 });
    }, [g0TranslateX, g1TranslateX]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const g0Props = useAnimatedProps(() => ({
      x: g0TranslateX.value,
    }));

    const g1Props = useAnimatedProps(() => ({
      x: g1TranslateX.value,
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
                d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={g1Props}>
              <Path
                d="M16.5 3L21 7.5m0 0L16.5 12M21 7.5H7.5"
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

ArrowsRightLeftIcon.displayName = "ArrowsRightLeftIcon";

export { ArrowsRightLeftIcon };
