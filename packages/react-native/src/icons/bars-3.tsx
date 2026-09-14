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

export type Bars3IconHandle = IconHandle;

const Bars3Icon = forwardRef<Bars3IconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const b0 = useSharedValue(0);
    const b1 = useSharedValue(0);
    const b2 = useSharedValue(0);

    const startAnimation = useCallback(() => {
      b0.value = withDelay(
        0,
        withSequence(withTiming(1, { duration: 150 }), withTiming(0, { duration: 150 }))
      );
      b1.value = withDelay(
        100,
        withSequence(withTiming(1, { duration: 150 }), withTiming(0, { duration: 150 }))
      );
      b2.value = withDelay(
        200,
        withSequence(withTiming(1, { duration: 150 }), withTiming(0, { duration: 150 }))
      );
    }, [b0, b1, b2]);

    const stopAnimation = useCallback(() => {
      b0.value = withTiming(0, { duration: 200 });
      b1.value = withTiming(0, { duration: 200 });
      b2.value = withTiming(0, { duration: 200 });
    }, [b0, b1, b2]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const b0Props = useAnimatedProps(() => {
      const start = 3.75 + 3.3 * b0.value;
      const length = 16.5 - 6.6 * b0.value;
      return { d: `M${start.toFixed(3)} 6.75h${length.toFixed(3)}` };
    });
    const b1Props = useAnimatedProps(() => {
      const start = 3.75 + 3.3 * b1.value;
      const length = 16.5 - 6.6 * b1.value;
      return { d: `M${start.toFixed(3)} 12h${length.toFixed(3)}` };
    });
    const b2Props = useAnimatedProps(() => {
      const start = 3.75 + 3.3 * b2.value;
      const length = 16.5 - 6.6 * b2.value;
      return { d: `M${start.toFixed(3)} 17.25h${length.toFixed(3)}` };
    });

    return (
      <IconWrapper
        controlled={controlled}
        onPress={onPress}
        onPressIn={startAnimation}
        onPressOut={stopAnimation}
      >
        <Svg fill="none" height={size} style={style} viewBox="0 0 24 24" width={size}>
          <AnimatedPath
            animatedProps={b0Props}
            d="M3.75 6.75h16.5"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={b1Props}
            d="M3.75 12h16.5"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={b2Props}
            d="M3.75 17.25h16.5"
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

Bars3Icon.displayName = "Bars3Icon";

export { Bars3Icon };
