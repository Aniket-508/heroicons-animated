import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, { G, Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedG = Animated.createAnimatedComponent(G);
const AnimatedPath = Animated.createAnimatedComponent(Path);

export type CursorArrowRippleIconHandle = IconHandle;

const CursorArrowRippleIcon = forwardRef<CursorArrowRippleIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const ripple0Opacity = useSharedValue(1);
    const ripple1Opacity = useSharedValue(1);

    const startAnimation = useCallback(() => {
      translateX.value = withSequence(
        withTiming(0, { duration: 250 }),
        withTiming(0, { duration: 250 }),
        withTiming(-3, { duration: 250 }),
        withTiming(0, { duration: 250 })
      );
      translateY.value = withSequence(
        withTiming(0, { duration: 250 }),
        withTiming(-4, { duration: 250 }),
        withTiming(0, { duration: 250 }),
        withTiming(0, { duration: 250 })
      );
      ripple0Opacity.value = withDelay(
        1300,
        withSequence(withTiming(0, { duration: 1 }), withTiming(1, { duration: 300 }))
      );
      ripple1Opacity.value = withDelay(
        1000,
        withSequence(withTiming(0, { duration: 1 }), withTiming(1, { duration: 300 }))
      );
    }, [translateX, translateY, ripple0Opacity, ripple1Opacity]);

    const stopAnimation = useCallback(() => {
      translateX.value = withTiming(0, { duration: 200 });
      translateY.value = withTiming(0, { duration: 200 });
      ripple0Opacity.value = withTiming(1, { duration: 200 });
      ripple1Opacity.value = withTiming(1, { duration: 200 });
    }, [translateX, translateY, ripple0Opacity, ripple1Opacity]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const cursorProps = useAnimatedProps(() => ({
      x: translateX.value,
      y: translateY.value,
    }));

    const ripple0Props = useAnimatedProps(() => ({
      opacity: ripple0Opacity.value,
    }));
    const ripple1Props = useAnimatedProps(() => ({
      opacity: ripple1Opacity.value,
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
            <AnimatedG animatedProps={cursorProps}>
              <Path
                d="M15.0423 21.6718L13.6835 16.6007M13.6835 16.6007L11.1741 18.826L11.7425 9.35623L16.9697 17.2731L13.6835 16.6007Z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedPath
              animatedProps={ripple0Props}
              d="M6.16637 16.3336C2.94454 13.1118 2.94454 7.88819 6.16637 4.66637C9.38819 1.44454 14.6118 1.44454 17.8336 4.66637C19.4445 6.27724 20.25 8.38854 20.25 10.4999"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <AnimatedPath
              animatedProps={ripple1Props}
              d="M8.28769 14.2123C6.23744 12.1621 6.23744 8.83794 8.28769 6.78769C10.3379 4.73744 13.6621 4.73744 15.7123 6.78769C16.7374 7.8128 17.25 9.15637 17.25 10.4999"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
          </Svg>
        </Animated.View>
      </IconWrapper>
    );
  }
);

CursorArrowRippleIcon.displayName = "CursorArrowRippleIcon";

export { CursorArrowRippleIcon };
