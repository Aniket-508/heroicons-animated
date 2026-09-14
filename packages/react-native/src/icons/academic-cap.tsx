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

export type AcademicCapIconHandle = IconHandle;

const AcademicCapIcon = forwardRef<AcademicCapIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const g0Rotate = useSharedValue(0);
    const g0TranslateY = useSharedValue(0);
    const g1Rotate = useSharedValue(0);

    const startAnimation = useCallback(() => {
      g0Rotate.value = withSequence(
        withTiming(0, { duration: 125 }),
        withTiming(-5, { duration: 125 }),
        withTiming(5, { duration: 125 }),
        withTiming(0, { duration: 125 })
      );
      g0TranslateY.value = withSequence(
        withTiming(0, { duration: 167 }),
        withTiming(-3, { duration: 167 }),
        withTiming(0, { duration: 167 })
      );
      g1Rotate.value = withSequence(
        withTiming(0, { duration: 120 }),
        withTiming(10, { duration: 120 }),
        withTiming(-10, { duration: 120 }),
        withTiming(5, { duration: 120 }),
        withTiming(0, { duration: 120 })
      );
    }, [g0Rotate, g0TranslateY, g1Rotate]);

    const stopAnimation = useCallback(() => {
      g0Rotate.value = withTiming(0, { duration: 200 });
      g0TranslateY.value = withTiming(0, { duration: 200 });
      g1Rotate.value = withTiming(0, { duration: 200 });
    }, [g0Rotate, g0TranslateY, g1Rotate]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const g0Props = useAnimatedProps(() => ({
      rotation: g0Rotate.value,
      rotate: g0Rotate.value,
      y: g0TranslateY.value,
      originX: 12,
      originY: 12,
    }));

    const g1Props = useAnimatedProps(() => ({
      rotation: g1Rotate.value,
      rotate: g1Rotate.value,
      originX: 6.75,
      originY: 14.25,
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
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={g1Props}>
              <Path
                d="M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
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

AcademicCapIcon.displayName = "AcademicCapIcon";

export { AcademicCapIcon };
