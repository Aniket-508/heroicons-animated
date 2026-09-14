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

export type CalendarDaysIconHandle = IconHandle;

const DOTS = [
  "M12 12.75h.008v.008H12v-.008Z",
  "M14.25 12.75h.008v.008h-.008v-.008Z",
  "M16.5 12.75h.008v.008H16.5v-.008Z",
  "M7.5 15h.008v.008H7.5V15Z",
  "M9.75 15h.008v.008H9.75V15Z",
  "M12 15h.008v.008H12V15Z",
  "M14.25 15h.008v.008h-.008V15Z",
  "M16.5 15h.008v.008H16.5V15Z",
  "M7.5 17.25h.008v.008H7.5v-.008Z",
  "M9.75 17.25h.008v.008H9.75v-.008Z",
  "M12 17.25h.008v.008H12v-.008Z",
  "M14.25 17.25h.008v.008h-.008v-.008Z",
] as const;

const CalendarDaysIcon = forwardRef<CalendarDaysIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const d0 = useSharedValue(1);
    const d1 = useSharedValue(1);
    const d2 = useSharedValue(1);
    const d3 = useSharedValue(1);
    const d4 = useSharedValue(1);
    const d5 = useSharedValue(1);
    const d6 = useSharedValue(1);
    const d7 = useSharedValue(1);
    const d8 = useSharedValue(1);
    const d9 = useSharedValue(1);
    const d10 = useSharedValue(1);
    const d11 = useSharedValue(1);

    const dots = [d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11] as const;

    const startAnimation = useCallback(() => {
      dots.forEach((dot, index) => {
        dot.value = withDelay(
          index * 100,
          withSequence(
            withTiming(1, { duration: 1 }),
            withTiming(0.3, { duration: 200 }),
            withTiming(1, { duration: 200 })
          )
        );
      });
    }, [dots]);

    const stopAnimation = useCallback(() => {
      dots.forEach((dot) => {
        dot.value = withTiming(1, { duration: 200 });
      });
    }, [dots]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const p0 = useAnimatedProps(() => ({ opacity: d0.value }));
    const p1 = useAnimatedProps(() => ({ opacity: d1.value }));
    const p2 = useAnimatedProps(() => ({ opacity: d2.value }));
    const p3 = useAnimatedProps(() => ({ opacity: d3.value }));
    const p4 = useAnimatedProps(() => ({ opacity: d4.value }));
    const p5 = useAnimatedProps(() => ({ opacity: d5.value }));
    const p6 = useAnimatedProps(() => ({ opacity: d6.value }));
    const p7 = useAnimatedProps(() => ({ opacity: d7.value }));
    const p8 = useAnimatedProps(() => ({ opacity: d8.value }));
    const p9 = useAnimatedProps(() => ({ opacity: d9.value }));
    const p10 = useAnimatedProps(() => ({ opacity: d10.value }));
    const p11 = useAnimatedProps(() => ({ opacity: d11.value }));

    return (
      <IconWrapper
        controlled={controlled}
        onPress={onPress}
        onPressIn={startAnimation}
        onPressOut={stopAnimation}
      >
        <Svg fill="none" height={size} style={style} viewBox="0 0 24 24" width={size}>
          <Path
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={p0}
            d={DOTS[0]}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={p1}
            d={DOTS[1]}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={p2}
            d={DOTS[2]}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={p3}
            d={DOTS[3]}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={p4}
            d={DOTS[4]}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={p5}
            d={DOTS[5]}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={p6}
            d={DOTS[6]}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={p7}
            d={DOTS[7]}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={p8}
            d={DOTS[8]}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={p9}
            d={DOTS[9]}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={p10}
            d={DOTS[10]}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={p11}
            d={DOTS[11]}
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

CalendarDaysIcon.displayName = "CalendarDaysIcon";

export { CalendarDaysIcon };
