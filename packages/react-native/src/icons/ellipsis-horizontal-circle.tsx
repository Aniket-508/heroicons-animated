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

export type EllipsisHorizontalCircleIconHandle = IconHandle;

const DOTS = [
  {
    d: "M8.625 12C8.625 12.2071 8.45711 12.375 8.25 12.375C8.04289 12.375 7.875 12.2071 7.875 12C7.875 11.7929 8.04289 11.625 8.25 11.625C8.45711 11.625 8.625 11.7929 8.625 12ZM8.625 12H8.25",
    originX: 8.25,
    originY: 12,
  },
  {
    d: "M12.375 12C12.375 12.2071 12.2071 12.375 12 12.375C11.7929 12.375 11.625 12.2071 11.625 12C11.625 11.7929 11.7929 11.625 12 11.625C12.2071 11.625 12.375 11.7929 12.375 12ZM12.375 12H12",
    originX: 12,
    originY: 12,
  },
  {
    d: "M16.125 12C16.125 12.2071 15.9571 12.375 15.75 12.375C15.5429 12.375 15.375 12.2071 15.375 12C15.375 11.7929 15.5429 11.625 15.75 11.625C15.9571 11.625 16.125 11.7929 16.125 12ZM16.125 12H15.75",
    originX: 15.75,
    originY: 12,
  },
] as const;

const EllipsisHorizontalCircleIcon = forwardRef<EllipsisHorizontalCircleIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const s0 = useSharedValue(1);
    const s1 = useSharedValue(1);
    const s2 = useSharedValue(1);

    const startAnimation = useCallback(() => {
      s0.value = withDelay(
        0,
        withSequence(withTiming(1.2, { duration: 200 }), withTiming(1, { duration: 200 }))
      );
      s1.value = withDelay(
        50,
        withSequence(withTiming(1.2, { duration: 200 }), withTiming(1, { duration: 200 }))
      );
      s2.value = withDelay(
        100,
        withSequence(withTiming(1.2, { duration: 200 }), withTiming(1, { duration: 200 }))
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
          <Path
            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
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

EllipsisHorizontalCircleIcon.displayName = "EllipsisHorizontalCircleIcon";

export { EllipsisHorizontalCircleIcon };
