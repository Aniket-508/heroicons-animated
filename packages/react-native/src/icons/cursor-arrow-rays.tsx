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

export type CursorArrowRaysIconHandle = IconHandle;

const CursorArrowRaysIcon = forwardRef<CursorArrowRaysIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const p0TranslateX = useSharedValue(0);
    const p0TranslateY = useSharedValue(0);
    const rayOpacity = useSharedValue(1);
    const rayProgress = useSharedValue(0);

    const startAnimation = useCallback(() => {
      p0TranslateX.value = withSequence(
        withTiming(0, { duration: 250 }),
        withTiming(0, { duration: 250 }),
        withTiming(-3, { duration: 250 }),
        withTiming(0, { duration: 250 })
      );
      p0TranslateY.value = withSequence(
        withTiming(0, { duration: 250 }),
        withTiming(-4, { duration: 250 }),
        withTiming(0, { duration: 250 }),
        withTiming(0, { duration: 250 })
      );
      rayProgress.value = withDelay(
        1300,
        withSequence(
          withTiming(1, { duration: 220 }),
          withTiming(2, { duration: 220 }),
          withTiming(3, { duration: 220 })
        )
      );
      rayOpacity.value = withDelay(
        1300,
        withSequence(
          withTiming(0, { duration: 120 }),
          withTiming(1, { duration: 120 }),
          withTiming(0, { duration: 120 }),
          withTiming(0, { duration: 120 }),
          withTiming(0, { duration: 120 }),
          withTiming(0, { duration: 120 }),
          withTiming(1, { duration: 120 })
        )
      );
    }, [p0TranslateX, p0TranslateY, rayOpacity, rayProgress]);

    const stopAnimation = useCallback(() => {
      p0TranslateX.value = withTiming(0, { duration: 200 });
      p0TranslateY.value = withTiming(0, { duration: 200 });
      rayProgress.value = withTiming(0, { duration: 200 });
      rayOpacity.value = withTiming(1, { duration: 200 });
    }, [p0TranslateX, p0TranslateY, rayOpacity, rayProgress]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const makeRayProps = (dx: number, dy: number) =>
      useAnimatedProps(() => {
        const p = rayProgress.value;
        let x = 0;
        let y = 0;

        if (p <= 1) {
          x = dx * p;
          y = dy * p;
        } else if (p <= 2) {
          x = dx * (2 - p);
          y = dy * (2 - p);
        }

        return {
          x,
          y,
          opacity: rayOpacity.value,
        };
      });

    const ray0Props = makeRayProps(0, -2);
    const ray1Props = makeRayProps(2, -2);
    const ray2Props = makeRayProps(2, 0);
    const ray3Props = makeRayProps(-2, 2);
    const ray4Props = makeRayProps(-2, 0);
    const ray5Props = makeRayProps(-2, -2);

    const cursorProps = useAnimatedProps(() => ({
      x: p0TranslateX.value,
      y: p0TranslateY.value,
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
            <AnimatedG animatedProps={ray0Props}>
              <Path
                d="M12 2.25V4.5"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={ray1Props}>
              <Path
                d="M17.8336 4.66637L16.2426 6.25736"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={ray2Props}>
              <Path
                d="M20.25 10.5H18"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={ray3Props}>
              <Path
                d="M7.75736 14.7426L6.16637 16.3336"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={ray4Props}>
              <Path
                d="M6 10.5H3.75"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={ray5Props}>
              <Path
                d="M7.75736 6.25736L6.16637 4.66637"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={cursorProps}>
              <Path
                d="M15.0423 21.6718L13.6835 16.6007M13.6835 16.6007L11.1741 18.826L11.7425 9.35623L16.9697 17.2731L13.6835 16.6007Z"
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

CursorArrowRaysIcon.displayName = "CursorArrowRaysIcon";

export { CursorArrowRaysIcon };
