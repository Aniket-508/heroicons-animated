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

export type NewspaperIconHandle = IconHandle;

const NewspaperIcon = forwardRef<NewspaperIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const p0Opacity = useSharedValue(1);
    const p1Opacity = useSharedValue(1);
    const p2Opacity = useSharedValue(1);
    const p3Opacity = useSharedValue(1);
    const p4Opacity = useSharedValue(1);

    const startAnimation = useCallback(() => {
      p0Opacity.value = withSequence(
        withTiming(0, { duration: 150 }),
        withTiming(1, { duration: 150 })
      );
      p1Opacity.value = withSequence(
        withTiming(0, { duration: 150 }),
        withTiming(1, { duration: 150 })
      );
      p2Opacity.value = withSequence(
        withTiming(0, { duration: 150 }),
        withTiming(1, { duration: 150 })
      );
      p3Opacity.value = withSequence(
        withTiming(0, { duration: 150 }),
        withTiming(1, { duration: 150 })
      );
      p4Opacity.value = withSequence(
        withTiming(0, { duration: 150 }),
        withTiming(1, { duration: 150 })
      );
    }, [p0Opacity, p1Opacity, p2Opacity, p3Opacity, p4Opacity]);

    const stopAnimation = useCallback(() => {
      p0Opacity.value = withTiming(1, { duration: 200 });
      p1Opacity.value = withTiming(1, { duration: 200 });
      p2Opacity.value = withTiming(1, { duration: 200 });
      p3Opacity.value = withTiming(1, { duration: 200 });
      p4Opacity.value = withTiming(1, { duration: 200 });
    }, [p0Opacity, p1Opacity, p2Opacity, p3Opacity, p4Opacity]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const p0Props = useAnimatedProps(() => ({
      opacity: p0Opacity.value,
    }));

    const p1Props = useAnimatedProps(() => ({
      opacity: p1Opacity.value,
    }));

    const p2Props = useAnimatedProps(() => ({
      opacity: p2Opacity.value,
    }));

    const p3Props = useAnimatedProps(() => ({
      opacity: p3Opacity.value,
    }));

    const p4Props = useAnimatedProps(() => ({
      opacity: p4Opacity.value,
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
              d="M16.5 7.5h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <AnimatedG animatedProps={p0Props}>
              <Path
                d="M6 7.5h3v3H6v-3Z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={p1Props}>
              <Path
                d="M12 7.5h1.5"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={p2Props}>
              <Path
                d="M12 10.5h1.5"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={p3Props}>
              <Path
                d="M6 13.5h7.5"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={p4Props}>
              <Path
                d="M6 16.5h7.5"
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

NewspaperIcon.displayName = "NewspaperIcon";

export { NewspaperIcon };
