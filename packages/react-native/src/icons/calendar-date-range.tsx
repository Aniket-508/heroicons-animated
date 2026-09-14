import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export type CalendarDateRangeIconHandle = IconHandle;

const RANGE_LINES = ["M14.25 12.75h2.25", "M7.5 15h4.5"] as const;
const DOTS = [
  "M14.25 15h.005v.005h-.005v-.005Z",
  "M16.5 15h.006v.005H16.5v-.005Z",
  "M7.5 17.25h.005v.005h-.006v-.005Z",
  "M9.75 17.25h.005v.006H9.75v-.006Z",
  "M12 17.25h.006v.006h-.006v-.005Z",
  "M14.25 17.25h.006v.006h-.006v-.006Z",
] as const;

const CalendarDateRangeIcon = forwardRef<CalendarDateRangeIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const firstDot = useSharedValue(1);
    const l0Opacity = useSharedValue(1);
    const l1Opacity = useSharedValue(1);
    const l0Length = useSharedValue(1);
    const l1Length = useSharedValue(1);
    const d0 = useSharedValue(1);
    const d1 = useSharedValue(1);
    const d2 = useSharedValue(1);
    const d3 = useSharedValue(1);
    const d4 = useSharedValue(1);
    const d5 = useSharedValue(1);

    const dotValues = [d0, d1, d2, d3, d4, d5] as const;

    const startAnimation = useCallback(() => {
      firstDot.value = withSequence(
        withTiming(1, { duration: 1 }),
        withTiming(0.3, { duration: 200 }),
        withTiming(1, { duration: 200 })
      );

      l0Opacity.value = withDelay(
        400,
        withSequence(withTiming(0, { duration: 1 }), withTiming(1, { duration: 300 }))
      );
      l0Length.value = withDelay(
        400,
        withSequence(withTiming(0, { duration: 1 }), withTiming(1, { duration: 300 }))
      );
      l1Opacity.value = withDelay(
        550,
        withSequence(withTiming(0, { duration: 1 }), withTiming(1, { duration: 300 }))
      );
      l1Length.value = withDelay(
        550,
        withSequence(withTiming(0, { duration: 1 }), withTiming(1, { duration: 300 }))
      );

      dotValues.forEach((dot, index) => {
        dot.value = withDelay(
          700 + index * 100,
          withSequence(
            withTiming(1, { duration: 1 }),
            withTiming(0.3, { duration: 200 }),
            withTiming(1, { duration: 200 })
          )
        );
      });
    }, [firstDot, l0Opacity, l1Opacity, l0Length, l1Length, dotValues]);

    const stopAnimation = useCallback(() => {
      firstDot.value = withTiming(1, { duration: 200 });
      l0Opacity.value = withTiming(1, { duration: 200 });
      l1Opacity.value = withTiming(1, { duration: 200 });
      l0Length.value = withTiming(1, { duration: 200 });
      l1Length.value = withTiming(1, { duration: 200 });
      dotValues.forEach((dot) => {
        dot.value = withTiming(1, { duration: 200 });
      });
    }, [firstDot, l0Opacity, l1Opacity, l0Length, l1Length, dotValues]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const firstDotProps = useAnimatedProps(() => ({ opacity: firstDot.value }));
    const l0Props = useAnimatedProps(() => ({
      opacity: l0Opacity.value,
      pathLength: l0Length.value,
    }));
    const l1Props = useAnimatedProps(() => ({
      opacity: l1Opacity.value,
      pathLength: l1Length.value,
    }));
    const d0Props = useAnimatedProps(() => ({ opacity: d0.value }));
    const d1Props = useAnimatedProps(() => ({ opacity: d1.value }));
    const d2Props = useAnimatedProps(() => ({ opacity: d2.value }));
    const d3Props = useAnimatedProps(() => ({ opacity: d3.value }));
    const d4Props = useAnimatedProps(() => ({ opacity: d4.value }));
    const d5Props = useAnimatedProps(() => ({ opacity: d5.value }));

    return (
      <IconWrapper
        controlled={controlled}
        onPress={onPress}
        onPressIn={startAnimation}
        onPressOut={stopAnimation}
      >
        <Svg fill="none" height={size} style={style} viewBox="0 0 24 24" width={size}>
          <Path
            d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={firstDotProps}
            d="M12 12.75h.005v.006H12v-.006Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={l0Props}
            d={RANGE_LINES[0]}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={l1Props}
            d={RANGE_LINES[1]}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={d0Props}
            d={DOTS[0]}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={d1Props}
            d={DOTS[1]}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={d2Props}
            d={DOTS[2]}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={d3Props}
            d={DOTS[3]}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={d4Props}
            d={DOTS[4]}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={d5Props}
            d={DOTS[5]}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
        </Svg>
      </IconWrapper>
    );
  }
);

CalendarDateRangeIcon.displayName = "CalendarDateRangeIcon";

export { CalendarDateRangeIcon };
