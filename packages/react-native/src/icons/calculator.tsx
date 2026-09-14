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

export type CalculatorIconHandle = IconHandle;

const CalculatorIcon = forwardRef<CalculatorIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const s0Scale = useSharedValue(1);
    const s0Opacity = useSharedValue(1);
    const s2Scale = useSharedValue(1);
    const s2Opacity = useSharedValue(1);
    const s1Scale = useSharedValue(1);
    const s1Opacity = useSharedValue(1);
    const s4Scale = useSharedValue(1);
    const s4Opacity = useSharedValue(1);
    const s3Scale = useSharedValue(1);
    const s3Opacity = useSharedValue(1);
    const s5Scale = useSharedValue(1);
    const s5Opacity = useSharedValue(1);
    const ns0Opacity = useSharedValue(1);
    const ns1Scale = useSharedValue(1);
    const ns1Opacity = useSharedValue(1);

    const startAnimation = useCallback(() => {
      s0Scale.value = withSequence(
        withTiming(1, { duration: 50 }),
        withTiming(1.5, { duration: 50 }),
        withTiming(1, { duration: 50 })
      );
      s0Opacity.value = withSequence(
        withTiming(1, { duration: 50 }),
        withTiming(0.5, { duration: 50 }),
        withTiming(1, { duration: 50 })
      );
      s2Scale.value = withDelay(
        160,
        withSequence(
          withTiming(1, { duration: 50 }),
          withTiming(1.5, { duration: 50 }),
          withTiming(1, { duration: 50 })
        )
      );
      s2Opacity.value = withDelay(
        160,
        withSequence(
          withTiming(1, { duration: 50 }),
          withTiming(0.5, { duration: 50 }),
          withTiming(1, { duration: 50 })
        )
      );
      s1Scale.value = withDelay(
        80,
        withSequence(
          withTiming(1, { duration: 50 }),
          withTiming(1.5, { duration: 50 }),
          withTiming(1, { duration: 50 })
        )
      );
      s1Opacity.value = withDelay(
        80,
        withSequence(
          withTiming(1, { duration: 50 }),
          withTiming(0.5, { duration: 50 }),
          withTiming(1, { duration: 50 })
        )
      );
      s4Scale.value = withDelay(
        320,
        withSequence(
          withTiming(1, { duration: 50 }),
          withTiming(1.5, { duration: 50 }),
          withTiming(1, { duration: 50 })
        )
      );
      s4Opacity.value = withDelay(
        320,
        withSequence(
          withTiming(1, { duration: 50 }),
          withTiming(0.5, { duration: 50 }),
          withTiming(1, { duration: 50 })
        )
      );
      s3Scale.value = withDelay(
        240,
        withSequence(
          withTiming(1, { duration: 50 }),
          withTiming(1.5, { duration: 50 }),
          withTiming(1, { duration: 50 })
        )
      );
      s3Opacity.value = withDelay(
        240,
        withSequence(
          withTiming(1, { duration: 50 }),
          withTiming(0.5, { duration: 50 }),
          withTiming(1, { duration: 50 })
        )
      );
      s5Scale.value = withDelay(
        400,
        withSequence(
          withTiming(1, { duration: 50 }),
          withTiming(1.5, { duration: 50 }),
          withTiming(1, { duration: 50 })
        )
      );
      s5Opacity.value = withDelay(
        400,
        withSequence(
          withTiming(1, { duration: 50 }),
          withTiming(0.5, { duration: 50 }),
          withTiming(1, { duration: 50 })
        )
      );
      ns0Opacity.value = withDelay(
        650,
        withSequence(
          withTiming(1, { duration: 67 }),
          withTiming(0.4, { duration: 67 }),
          withTiming(1, { duration: 67 })
        )
      );
      ns1Scale.value = withDelay(
        500,
        withSequence(
          withTiming(1, { duration: 67 }),
          withTiming(1.3, { duration: 67 }),
          withTiming(1, { duration: 67 })
        )
      );
      ns1Opacity.value = withDelay(
        500,
        withSequence(
          withTiming(1, { duration: 67 }),
          withTiming(0.6, { duration: 67 }),
          withTiming(1, { duration: 67 })
        )
      );
    }, [
      s0Scale,
      s0Opacity,
      s2Scale,
      s2Opacity,
      s1Scale,
      s1Opacity,
      s4Scale,
      s4Opacity,
      s3Scale,
      s3Opacity,
      s5Scale,
      s5Opacity,
      ns0Opacity,
      ns1Scale,
      ns1Opacity,
    ]);

    const stopAnimation = useCallback(() => {
      s0Scale.value = withTiming(1, { duration: 200 });
      s0Opacity.value = withTiming(1, { duration: 200 });
      s2Scale.value = withTiming(1, { duration: 200 });
      s2Opacity.value = withTiming(1, { duration: 200 });
      s1Scale.value = withTiming(1, { duration: 200 });
      s1Opacity.value = withTiming(1, { duration: 200 });
      s4Scale.value = withTiming(1, { duration: 200 });
      s4Opacity.value = withTiming(1, { duration: 200 });
      s3Scale.value = withTiming(1, { duration: 200 });
      s3Opacity.value = withTiming(1, { duration: 200 });
      s5Scale.value = withTiming(1, { duration: 200 });
      s5Opacity.value = withTiming(1, { duration: 200 });
      ns0Opacity.value = withTiming(1, { duration: 200 });
      ns1Scale.value = withTiming(1, { duration: 200 });
      ns1Opacity.value = withTiming(1, { duration: 200 });
    }, [
      s0Scale,
      s0Opacity,
      s2Scale,
      s2Opacity,
      s1Scale,
      s1Opacity,
      s4Scale,
      s4Opacity,
      s3Scale,
      s3Opacity,
      s5Scale,
      s5Opacity,
      ns0Opacity,
      ns1Scale,
      ns1Opacity,
    ]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const s0Props = useAnimatedProps(() => ({
      scale: s0Scale.value,
      opacity: s0Opacity.value,
    }));

    const s2Props = useAnimatedProps(() => ({
      scale: s2Scale.value,
      opacity: s2Opacity.value,
    }));

    const s1Props = useAnimatedProps(() => ({
      scale: s1Scale.value,
      opacity: s1Opacity.value,
    }));

    const s4Props = useAnimatedProps(() => ({
      scale: s4Scale.value,
      opacity: s4Opacity.value,
    }));

    const s3Props = useAnimatedProps(() => ({
      scale: s3Scale.value,
      opacity: s3Opacity.value,
    }));

    const s5Props = useAnimatedProps(() => ({
      scale: s5Scale.value,
      opacity: s5Opacity.value,
    }));

    const ns0Props = useAnimatedProps(() => ({
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
              d="M12 2.25C10.108 2.25 8.24156 2.35947 6.40668 2.57241C5.30608 2.70014 4.5 3.649 4.5 4.75699V19.5C4.5 20.7426 5.50736 21.75 6.75 21.75H17.25C18.4926 21.75 19.5 20.7426 19.5 19.5V4.75699C19.5 3.649 18.6939 2.70014 17.5933 2.57241C15.7584 2.35947 13.892 2.25 12 2.25Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M8.25 13.5H8.2575V13.5075H8.25V13.5Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M8.25 18H8.2575V18.0075H8.25V18Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M10.7476 13.5H10.7551V13.5075H10.7476V13.5Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M10.7476 15.75H10.7551V15.7575H10.7476V15.75Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M13.2524 11.25H13.2599V11.2575H13.2524V11.25Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M13.2524 15.75H13.2599V15.7575H13.2524V15.75Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M13.2524 18H13.2599V18.0075H13.2524V18Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M15.75 13.5H15.7575V13.5075H15.75V13.5Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <AnimatedG animatedProps={s0Props}>
              <Path
                d="M8.25 11.25H8.2575V11.2575H8.25V11.25Z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={s2Props}>
              <Path
                d="M10.7476 11.25H10.7551V11.2575H10.7476V11.25Z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={s1Props}>
              <Path
                d="M13.2524 13.5H13.2599V13.5075H13.2524V13.5Z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={s4Props}>
              <Path
                d="M8.25 15.75H8.2575V15.7575H8.25V15.75Z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={s3Props}>
              <Path
                d="M15.75 11.25H15.7575V11.2575H15.75V11.25Z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={s5Props}>
              <Path
                d="M10.7476 18H10.7551V18.0075H10.7476V18Z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={ns0Props}>
              <Path
                d="M8.25 6H15.75V8.25H8.25V6Z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={ns1Props}>
              <Path
                d="M15.75 15.75V18"
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

CalculatorIcon.displayName = "CalculatorIcon";

export { CalculatorIcon };
