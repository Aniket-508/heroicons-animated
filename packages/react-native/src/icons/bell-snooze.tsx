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
const AnimatedPath = Animated.createAnimatedComponent(Path);

export type BellSnoozeIconHandle = IconHandle;

const BellSnoozeIcon = forwardRef<BellSnoozeIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const scale = useSharedValue(1);
    const rotate = useSharedValue(0);
    const snoozeOpacity = useSharedValue(1);
    const snoozeY = useSharedValue(0);
    const snoozeScale = useSharedValue(1);

    const startAnimation = useCallback(() => {
      scale.value = withSequence(
        withTiming(1, { duration: 200 }),
        withTiming(0.97, { duration: 200 }),
        withTiming(0.97, { duration: 200 }),
        withTiming(1, { duration: 200 })
      );
      rotate.value = withSequence(
        withTiming(0, { duration: 200 }),
        withTiming(-8, { duration: 200 }),
        withTiming(-8, { duration: 200 }),
        withTiming(0, { duration: 200 })
      );
      snoozeOpacity.value = withSequence(
        withTiming(1, { duration: 200 }),
        withTiming(1, { duration: 200 }),
        withTiming(0.6, { duration: 200 }),
        withTiming(1, { duration: 200 })
      );
      snoozeY.value = withSequence(
        withTiming(0, { duration: 200 }),
        withTiming(-1, { duration: 200 }),
        withTiming(-2, { duration: 200 }),
        withTiming(0, { duration: 200 })
      );
      snoozeScale.value = withSequence(
        withTiming(1, { duration: 200 }),
        withTiming(1.1, { duration: 200 }),
        withTiming(1.15, { duration: 200 }),
        withTiming(1, { duration: 200 })
      );
    }, [scale, rotate, snoozeOpacity, snoozeY, snoozeScale]);

    const stopAnimation = useCallback(() => {
      scale.value = withTiming(1, { duration: 200 });
      rotate.value = withTiming(0, { duration: 200 });
      snoozeOpacity.value = withTiming(1, { duration: 200 });
      snoozeY.value = withTiming(0, { duration: 200 });
      snoozeScale.value = withTiming(1, { duration: 200 });
    }, [scale, rotate, snoozeOpacity, snoozeY, snoozeScale]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const bellProps = useAnimatedProps(() => ({
      rotation: rotate.value,
      scale: scale.value,
      originX: 12,
      originY: 12,
    }));

    const snoozeProps = useAnimatedProps(() => ({
      opacity: snoozeOpacity.value,
      y: snoozeY.value,
      scale: snoozeScale.value,
      originX: 12,
      originY: 10.5,
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
            <AnimatedG animatedProps={bellProps}>
              <Path
                d="M14.8569 17.0817C16.7514 16.857 18.5783 16.4116 20.3111 15.7719C18.8743 14.177 17.9998 12.0656 17.9998 9.75V9.04919C17.9999 9.03281 18 9.01641 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9L5.9998 9.75C5.9998 12.0656 5.12527 14.177 3.68848 15.7719C5.4214 16.4116 7.24843 16.857 9.14314 17.0818M14.8569 17.0817C13.92 17.1928 12.9666 17.25 11.9998 17.25C11.0332 17.25 10.0799 17.1929 9.14314 17.0818M14.8569 17.0817C14.9498 17.3711 15 17.6797 15 18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18C9 17.6797 9.05019 17.3712 9.14314 17.0818"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={snoozeProps}>
              <AnimatedPath
                d="M10.5 8.25H13.5L10.5 12.75H13.5"
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

BellSnoozeIcon.displayName = "BellSnoozeIcon";

export { BellSnoozeIcon };
