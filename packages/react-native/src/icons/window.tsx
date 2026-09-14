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

export type WindowIconHandle = IconHandle;

const WindowIcon = forwardRef<WindowIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const s0Scale = useSharedValue(1);
    const s0Opacity = useSharedValue(1);
    const ns0Scale = useSharedValue(1);
    const ns0Opacity = useSharedValue(1);
    const ns1Scale = useSharedValue(1);
    const ns1Opacity = useSharedValue(1);

    const startAnimation = useCallback(() => {
      s0Scale.value = withSequence(
        withTiming(0, { duration: 100 }),
        withTiming(1.3, { duration: 100 }),
        withTiming(1, { duration: 100 })
      );
      s0Opacity.value = withSequence(
        withTiming(0, { duration: 100 }),
        withTiming(1, { duration: 100 }),
        withTiming(1, { duration: 100 })
      );
      ns0Scale.value = withSequence(
        withTiming(0, { duration: 100 }),
        withTiming(1.3, { duration: 100 }),
        withTiming(1, { duration: 100 })
      );
      ns0Opacity.value = withSequence(
        withTiming(0, { duration: 100 }),
        withTiming(1, { duration: 100 }),
        withTiming(1, { duration: 100 })
      );
      ns1Scale.value = withSequence(
        withTiming(0, { duration: 100 }),
        withTiming(1.3, { duration: 100 }),
        withTiming(1, { duration: 100 })
      );
      ns1Opacity.value = withSequence(
        withTiming(0, { duration: 100 }),
        withTiming(1, { duration: 100 }),
        withTiming(1, { duration: 100 })
      );
    }, [s0Scale, s0Opacity, ns0Scale, ns0Opacity, ns1Scale, ns1Opacity]);

    const stopAnimation = useCallback(() => {
      s0Scale.value = withTiming(1, { duration: 200 });
      s0Opacity.value = withTiming(1, { duration: 200 });
      ns0Scale.value = withTiming(1, { duration: 200 });
      ns0Opacity.value = withTiming(1, { duration: 200 });
      ns1Scale.value = withTiming(1, { duration: 200 });
      ns1Opacity.value = withTiming(1, { duration: 200 });
    }, [s0Scale, s0Opacity, ns0Scale, ns0Opacity, ns1Scale, ns1Opacity]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const s0Props = useAnimatedProps(() => ({
      scale: s0Scale.value,
      opacity: s0Opacity.value,
    }));

    const ns0Props = useAnimatedProps(() => ({
      scale: ns0Scale.value,
      opacity: ns0Opacity.value,
    }));

    const ns1Props = useAnimatedProps(() => ({
      scale: ns1Scale.value,
      opacity: ns1Opacity.value,
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
            <Path
              d="M3 8.25V18C3 19.2426 4.00736 20.25 5.25 20.25H18.75C19.9926 20.25 21 19.2426 21 18V8.25M3 8.25V6C3 4.75736 4.00736 3.75 5.25 3.75H18.75C19.9926 3.75 21 4.75736 21 6V8.25M3 8.25H21"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <AnimatedG animatedProps={s0Props}>
              <Path
                d="M5.25 6H5.2575V6.0075H5.25V6Z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={ns0Props}>
              <Path
                d="M7.5 6H7.5075V6.0075H7.5V6Z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={ns1Props}>
              <Path
                d="M9.75 6H9.7575V6.0075H9.75V6Z"
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

WindowIcon.displayName = "WindowIcon";

export { WindowIcon };
