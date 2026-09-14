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

export type CpuChipIconHandle = IconHandle;

const CpuChipIcon = forwardRef<CpuChipIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const p0ScaleY = useSharedValue(1);
    const p0Opacity = useSharedValue(1);
    const p1ScaleY = useSharedValue(1);
    const p1Opacity = useSharedValue(1);
    const p2ScaleY = useSharedValue(1);
    const p2Opacity = useSharedValue(1);
    const p3ScaleX = useSharedValue(1);
    const p3Opacity = useSharedValue(1);
    const p4ScaleX = useSharedValue(1);
    const p4Opacity = useSharedValue(1);
    const p5ScaleX = useSharedValue(1);
    const p5Opacity = useSharedValue(1);
    const p6ScaleX = useSharedValue(1);
    const p6Opacity = useSharedValue(1);
    const p7ScaleX = useSharedValue(1);
    const p7Opacity = useSharedValue(1);
    const p8ScaleX = useSharedValue(1);
    const p8Opacity = useSharedValue(1);
    const p9ScaleY = useSharedValue(1);
    const p9Opacity = useSharedValue(1);
    const p10ScaleY = useSharedValue(1);
    const p10Opacity = useSharedValue(1);
    const p11ScaleY = useSharedValue(1);
    const p11Opacity = useSharedValue(1);

    const startAnimation = useCallback(() => {
      p0ScaleY.value = withSequence(
        withTiming(1, { duration: 133 }),
        withTiming(1.5, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
      p0Opacity.value = withSequence(
        withTiming(1, { duration: 133 }),
        withTiming(0.8, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
      p1ScaleY.value = withSequence(
        withTiming(1, { duration: 133 }),
        withTiming(1.5, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
      p1Opacity.value = withSequence(
        withTiming(1, { duration: 133 }),
        withTiming(0.8, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
      p2ScaleY.value = withSequence(
        withTiming(1, { duration: 133 }),
        withTiming(1.5, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
      p2Opacity.value = withSequence(
        withTiming(1, { duration: 133 }),
        withTiming(0.8, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
      p3ScaleX.value = withSequence(
        withTiming(1, { duration: 133 }),
        withTiming(1.5, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
      p3Opacity.value = withSequence(
        withTiming(1, { duration: 133 }),
        withTiming(0.8, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
      p4ScaleX.value = withSequence(
        withTiming(1, { duration: 133 }),
        withTiming(1.5, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
      p4Opacity.value = withSequence(
        withTiming(1, { duration: 133 }),
        withTiming(0.8, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
      p5ScaleX.value = withSequence(
        withTiming(1, { duration: 133 }),
        withTiming(1.5, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
      p5Opacity.value = withSequence(
        withTiming(1, { duration: 133 }),
        withTiming(0.8, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
      p6ScaleX.value = withSequence(
        withTiming(1, { duration: 133 }),
        withTiming(1.5, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
      p6Opacity.value = withSequence(
        withTiming(1, { duration: 133 }),
        withTiming(0.8, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
      p7ScaleX.value = withSequence(
        withTiming(1, { duration: 133 }),
        withTiming(1.5, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
      p7Opacity.value = withSequence(
        withTiming(1, { duration: 133 }),
        withTiming(0.8, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
      p8ScaleX.value = withSequence(
        withTiming(1, { duration: 133 }),
        withTiming(1.5, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
      p8Opacity.value = withSequence(
        withTiming(1, { duration: 133 }),
        withTiming(0.8, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
      p9ScaleY.value = withSequence(
        withTiming(1, { duration: 133 }),
        withTiming(1.5, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
      p9Opacity.value = withSequence(
        withTiming(1, { duration: 133 }),
        withTiming(0.8, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
      p10ScaleY.value = withSequence(
        withTiming(1, { duration: 133 }),
        withTiming(1.5, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
      p10Opacity.value = withSequence(
        withTiming(1, { duration: 133 }),
        withTiming(0.8, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
      p11ScaleY.value = withSequence(
        withTiming(1, { duration: 133 }),
        withTiming(1.5, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
      p11Opacity.value = withSequence(
        withTiming(1, { duration: 133 }),
        withTiming(0.8, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
    }, [
      p0ScaleY,
      p0Opacity,
      p1ScaleY,
      p1Opacity,
      p2ScaleY,
      p2Opacity,
      p3ScaleX,
      p3Opacity,
      p4ScaleX,
      p4Opacity,
      p5ScaleX,
      p5Opacity,
      p6ScaleX,
      p6Opacity,
      p7ScaleX,
      p7Opacity,
      p8ScaleX,
      p8Opacity,
      p9ScaleY,
      p9Opacity,
      p10ScaleY,
      p10Opacity,
      p11ScaleY,
      p11Opacity,
    ]);

    const stopAnimation = useCallback(() => {
      p0ScaleY.value = withTiming(1, { duration: 200 });
      p0Opacity.value = withTiming(1, { duration: 200 });
      p1ScaleY.value = withTiming(1, { duration: 200 });
      p1Opacity.value = withTiming(1, { duration: 200 });
      p2ScaleY.value = withTiming(1, { duration: 200 });
      p2Opacity.value = withTiming(1, { duration: 200 });
      p3ScaleX.value = withTiming(1, { duration: 200 });
      p3Opacity.value = withTiming(1, { duration: 200 });
      p4ScaleX.value = withTiming(1, { duration: 200 });
      p4Opacity.value = withTiming(1, { duration: 200 });
      p5ScaleX.value = withTiming(1, { duration: 200 });
      p5Opacity.value = withTiming(1, { duration: 200 });
      p6ScaleX.value = withTiming(1, { duration: 200 });
      p6Opacity.value = withTiming(1, { duration: 200 });
      p7ScaleX.value = withTiming(1, { duration: 200 });
      p7Opacity.value = withTiming(1, { duration: 200 });
      p8ScaleX.value = withTiming(1, { duration: 200 });
      p8Opacity.value = withTiming(1, { duration: 200 });
      p9ScaleY.value = withTiming(1, { duration: 200 });
      p9Opacity.value = withTiming(1, { duration: 200 });
      p10ScaleY.value = withTiming(1, { duration: 200 });
      p10Opacity.value = withTiming(1, { duration: 200 });
      p11ScaleY.value = withTiming(1, { duration: 200 });
      p11Opacity.value = withTiming(1, { duration: 200 });
    }, [
      p0ScaleY,
      p0Opacity,
      p1ScaleY,
      p1Opacity,
      p2ScaleY,
      p2Opacity,
      p3ScaleX,
      p3Opacity,
      p4ScaleX,
      p4Opacity,
      p5ScaleX,
      p5Opacity,
      p6ScaleX,
      p6Opacity,
      p7ScaleX,
      p7Opacity,
      p8ScaleX,
      p8Opacity,
      p9ScaleY,
      p9Opacity,
      p10ScaleY,
      p10Opacity,
      p11ScaleY,
      p11Opacity,
    ]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const p0Props = useAnimatedProps(() => ({
      scaleY: p0ScaleY.value,
      opacity: p0Opacity.value,
    }));

    const p1Props = useAnimatedProps(() => ({
      scaleY: p1ScaleY.value,
      opacity: p1Opacity.value,
    }));

    const p2Props = useAnimatedProps(() => ({
      scaleY: p2ScaleY.value,
      opacity: p2Opacity.value,
    }));

    const p3Props = useAnimatedProps(() => ({
      scaleX: p3ScaleX.value,
      opacity: p3Opacity.value,
    }));

    const p4Props = useAnimatedProps(() => ({
      scaleX: p4ScaleX.value,
      opacity: p4Opacity.value,
    }));

    const p5Props = useAnimatedProps(() => ({
      scaleX: p5ScaleX.value,
      opacity: p5Opacity.value,
    }));

    const p6Props = useAnimatedProps(() => ({
      scaleX: p6ScaleX.value,
      opacity: p6Opacity.value,
    }));

    const p7Props = useAnimatedProps(() => ({
      scaleX: p7ScaleX.value,
      opacity: p7Opacity.value,
    }));

    const p8Props = useAnimatedProps(() => ({
      scaleX: p8ScaleX.value,
      opacity: p8Opacity.value,
    }));

    const p9Props = useAnimatedProps(() => ({
      scaleY: p9ScaleY.value,
      opacity: p9Opacity.value,
    }));

    const p10Props = useAnimatedProps(() => ({
      scaleY: p10ScaleY.value,
      opacity: p10Opacity.value,
    }));

    const p11Props = useAnimatedProps(() => ({
      scaleY: p11ScaleY.value,
      opacity: p11Opacity.value,
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
              d="M6.75 19.5H17.25C18.4926 19.5 19.5 18.4926 19.5 17.25V6.75C19.5 5.50736 18.4926 4.5 17.25 4.5H6.75C5.50736 4.5 4.5 5.50736 4.5 6.75V17.25C4.5 18.4926 5.50736 19.5 6.75 19.5ZM7.5 7.5H16.5V16.5H7.5V7.5Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <AnimatedG animatedProps={p0Props}>
              <Path
                d="M8.25 3V4.5"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={p1Props}>
              <Path
                d="M12 3V4.5"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={p2Props}>
              <Path
                d="M15.75 3V4.5"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={p3Props}>
              <Path
                d="M4.5 8.25H3"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={p4Props}>
              <Path
                d="M4.5 12H3"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={p5Props}>
              <Path
                d="M4.5 15.75H3"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={p6Props}>
              <Path
                d="M21 8.25H19.5"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={p7Props}>
              <Path
                d="M21 12H19.5"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={p8Props}>
              <Path
                d="M21 15.75H19.5"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={p9Props}>
              <Path
                d="M8.25 19.5V21"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={p10Props}>
              <Path
                d="M12 19.5V21"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={p11Props}>
              <Path
                d="M15.75 19.5V21"
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

CpuChipIcon.displayName = "CpuChipIcon";

export { CpuChipIcon };
