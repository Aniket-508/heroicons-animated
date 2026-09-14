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

export type EllipsisVerticalIconHandle = IconHandle;

const DOTS = [
  {
    d: "M12 6.75C11.5858 6.75 11.25 6.41421 11.25 6C11.25 5.58579 11.5858 5.25 12 5.25C12.4142 5.25 12.75 5.58579 12.75 6C12.75 6.41421 12.4142 6.75 12 6.75Z",
    originX: 12,
    originY: 6,
  },
  {
    d: "M12 12.75C11.5858 12.75 11.25 12.4142 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25C12.4142 11.25 12.75 11.5858 12.75 12C12.75 12.4142 12.4142 12.75 12 12.75Z",
    originX: 12,
    originY: 12,
  },
  {
    d: "M12 18.75C11.5858 18.75 11.25 18.4142 11.25 18C11.25 17.5858 11.5858 17.25 12 17.25C12.4142 17.25 12.75 17.5858 12.75 18C12.75 18.4142 12.4142 18.75 12 18.75Z",
    originX: 12,
    originY: 18,
  },
] as const;

const EllipsisVerticalIcon = forwardRef<EllipsisVerticalIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const s0 = useSharedValue(1);
    const s1 = useSharedValue(1);
    const s2 = useSharedValue(1);

    const startAnimation = useCallback(() => {
      s0.value = withDelay(
        0,
        withSequence(withTiming(1.3, { duration: 200 }), withTiming(1, { duration: 200 }))
      );
      s1.value = withDelay(
        50,
        withSequence(withTiming(1.3, { duration: 200 }), withTiming(1, { duration: 200 }))
      );
      s2.value = withDelay(
        100,
        withSequence(withTiming(1.3, { duration: 200 }), withTiming(1, { duration: 200 }))
      );
    }, [s0, s1, s2]);

    const stopAnimation = useCallback(() => {
      s0.value = withTiming(1, { duration: 200 });
      s1.value = withTiming(1, { duration: 200 });
      s2.value = withTiming(1, { duration: 200 });
    }, [s0, s1, s2]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const p0Props = useAnimatedProps(() => ({
      scale: s0.value,
      originX: DOTS[0].originX,
      originY: DOTS[0].originY,
    }));
    const p1Props = useAnimatedProps(() => ({
      scale: s1.value,
      originX: DOTS[1].originX,
      originY: DOTS[1].originY,
    }));
    const p2Props = useAnimatedProps(() => ({
      scale: s2.value,
      originX: DOTS[2].originX,
      originY: DOTS[2].originY,
    }));

    return (
      <IconWrapper
        controlled={controlled}
        onPress={onPress}
        onPressIn={startAnimation}
        onPressOut={stopAnimation}
      >
        <Svg fill="none" height={size} style={style} viewBox="0 0 24 24" width={size}>
          <AnimatedPath
            animatedProps={p0Props}
            d={DOTS[0].d}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={p1Props}
            d={DOTS[1].d}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={p2Props}
            d={DOTS[2].d}
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

EllipsisVerticalIcon.displayName = "EllipsisVerticalIcon";

export { EllipsisVerticalIcon };
