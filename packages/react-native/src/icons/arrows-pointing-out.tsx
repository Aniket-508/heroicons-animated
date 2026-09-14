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

export type ArrowsPointingOutIconHandle = IconHandle;

const ArrowsPointingOutIcon = forwardRef<ArrowsPointingOutIconHandle, IconProps>(
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
        withTiming(-2, { duration: 167 }),
        withTiming(0, { duration: 167 })
      );
      g0TranslateY.value = withSequence(
        withTiming(0, { duration: 167 }),
        withTiming(-2, { duration: 167 }),
        withTiming(0, { duration: 167 })
      );
      g1TranslateX.value = withSequence(
        withTiming(0, { duration: 167 }),
        withTiming(-2, { duration: 167 }),
        withTiming(0, { duration: 167 })
      );
      g1TranslateY.value = withSequence(
        withTiming(0, { duration: 167 }),
        withTiming(2, { duration: 167 }),
        withTiming(0, { duration: 167 })
      );
      g2TranslateX.value = withSequence(
        withTiming(0, { duration: 167 }),
        withTiming(2, { duration: 167 }),
        withTiming(0, { duration: 167 })
      );
      g2TranslateY.value = withSequence(
        withTiming(0, { duration: 167 }),
        withTiming(-2, { duration: 167 }),
        withTiming(0, { duration: 167 })
      );
      g3TranslateX.value = withSequence(
        withTiming(0, { duration: 167 }),
        withTiming(2, { duration: 167 }),
        withTiming(0, { duration: 167 })
      );
      g3TranslateY.value = withSequence(
        withTiming(0, { duration: 167 }),
        withTiming(2, { duration: 167 }),
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
                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={g1Props}>
              <Path
                d="M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={g2Props}>
              <Path
                d="M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={g3Props}>
              <Path
                d="M20.25 20.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
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

ArrowsPointingOutIcon.displayName = "ArrowsPointingOutIcon";

export { ArrowsPointingOutIcon };
