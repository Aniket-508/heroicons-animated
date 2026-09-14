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

export type ArrowsUpDownIconHandle = IconHandle;

const ArrowsUpDownIcon = forwardRef<ArrowsUpDownIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const g0TranslateY = useSharedValue(0);
    const g1TranslateY = useSharedValue(0);

    const startAnimation = useCallback(() => {
      g0TranslateY.value = withSequence(
        withTiming(0, { duration: 167 }),
        withTiming(-2, { duration: 167 }),
        withTiming(0, { duration: 167 })
      );
      g1TranslateY.value = withSequence(
        withTiming(0, { duration: 167 }),
        withTiming(2, { duration: 167 }),
        withTiming(0, { duration: 167 })
      );
    }, [g0TranslateY, g1TranslateY]);

    const stopAnimation = useCallback(() => {
      g0TranslateY.value = withTiming(0, { duration: 200 });
      g1TranslateY.value = withTiming(0, { duration: 200 });
    }, [g0TranslateY, g1TranslateY]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const g0Props = useAnimatedProps(() => ({
      y: g0TranslateY.value,
    }));

    const g1Props = useAnimatedProps(() => ({
      y: g1TranslateY.value,
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
                d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={g1Props}>
              <Path
                d="M21 16.5L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
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

ArrowsUpDownIcon.displayName = "ArrowsUpDownIcon";

export { ArrowsUpDownIcon };
