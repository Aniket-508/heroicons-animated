import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle, G, Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedG = Animated.createAnimatedComponent(G);
const AnimatedPath = Animated.createAnimatedComponent(Path);

export type FaceFrownIconHandle = IconHandle;

const FaceFrownIcon = forwardRef<FaceFrownIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const faceScale = useSharedValue(1);
    const faceRotate = useSharedValue(0);
    const mouthPhase = useSharedValue(0);
    const mouthLength = useSharedValue(1);
    const leftEyeScale = useSharedValue(1);
    const rightEyeScale = useSharedValue(1);
    const leftEyeY = useSharedValue(0);
    const rightEyeY = useSharedValue(0);

    const startAnimation = useCallback(() => {
      faceScale.value = withSequence(
        withTiming(1.15, { duration: 240 }),
        withTiming(1.05, { duration: 240 }),
        withTiming(1.08, { duration: 320 })
      );
      faceRotate.value = withSequence(
        withTiming(-2, { duration: 240 }),
        withTiming(2, { duration: 240 }),
        withTiming(0, { duration: 320 })
      );
      mouthPhase.value = withSequence(
        withTiming(0, { duration: 100 }),
        withTiming(1, { duration: 250 }),
        withTiming(2, { duration: 250 })
      );
      mouthLength.value = withSequence(
        withTiming(0.3, { duration: 100 }),
        withTiming(1, { duration: 250 }),
        withTiming(1, { duration: 250 })
      );

      leftEyeScale.value = withSequence(
        withTiming(1.3, { duration: 180 }),
        withTiming(0.9, { duration: 180 }),
        withTiming(1.1, { duration: 240 })
      );
      leftEyeY.value = withSequence(
        withTiming(-0.5, { duration: 180 }),
        withTiming(0.3, { duration: 180 }),
        withTiming(0, { duration: 240 })
      );

      rightEyeScale.value = withSequence(
        withTiming(0.9, { duration: 180 }),
        withTiming(1.3, { duration: 180 }),
        withTiming(1.1, { duration: 240 })
      );
      rightEyeY.value = withSequence(
        withTiming(-0.5, { duration: 180 }),
        withTiming(0.3, { duration: 180 }),
        withTiming(0, { duration: 240 })
      );
    }, [
      faceScale,
      faceRotate,
      mouthPhase,
      mouthLength,
      leftEyeScale,
      rightEyeScale,
      leftEyeY,
      rightEyeY,
    ]);

    const stopAnimation = useCallback(() => {
      faceScale.value = withTiming(1, { duration: 200 });
      faceRotate.value = withTiming(0, { duration: 200 });
      mouthPhase.value = withTiming(0, { duration: 200 });
      mouthLength.value = withTiming(1, { duration: 200 });
      leftEyeScale.value = withTiming(1, { duration: 200 });
      rightEyeScale.value = withTiming(1, { duration: 200 });
      leftEyeY.value = withTiming(0, { duration: 200 });
      rightEyeY.value = withTiming(0, { duration: 200 });
    }, [
      faceScale,
      faceRotate,
      mouthPhase,
      mouthLength,
      leftEyeScale,
      rightEyeScale,
      leftEyeY,
      rightEyeY,
    ]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const faceStyle = useAnimatedStyle(() => ({
      transform: [{ scale: faceScale.value }, { rotate: `${faceRotate.value}deg` }],
    }));

    const mouthProps = useAnimatedProps(() => ({
      opacity: 1,
      d:
        mouthPhase.value < 0.5
          ? "M15.1823 16.3179C14.3075 15.4432 13.1623 15.0038 12.0158 14.9999C10.859 14.996 9.70095 15.4353 8.81834 16.3179"
          : mouthPhase.value < 1.5
            ? "M15.5 17C14.5 16 13 15.5 12 15.5C11 15.5 9.5 16 8.5 17"
            : "M15.1823 16.3179C14.3075 15.4432 13.1623 15.0038 12.0158 14.9999C10.859 14.996 9.70095 15.4353 8.81834 16.3179",
      pathLength: mouthLength.value,
    }));

    const leftEyeProps = useAnimatedProps(() => ({
      scale: leftEyeScale.value,
      y: leftEyeY.value,
      originX: 9.375,
      originY: 9.75,
    }));
    const rightEyeProps = useAnimatedProps(() => ({
      scale: rightEyeScale.value,
      y: rightEyeY.value,
      originX: 14.625,
      originY: 9.75,
    }));

    return (
      <IconWrapper
        controlled={controlled}
        onPress={onPress}
        onPressIn={startAnimation}
        onPressOut={stopAnimation}
      >
        <Animated.View style={[faceStyle, style]}>
          <Svg fill="none" height={size} viewBox="0 0 24 24" width={size}>
            <Circle cx="12" cy="12" r="9" stroke={color} strokeWidth={strokeWidth} />
            <AnimatedPath
              animatedProps={mouthProps}
              d="M15.1823 16.3179C14.3075 15.4432 13.1623 15.0038 12.0158 14.9999C10.859 14.996 9.70095 15.4353 8.81834 16.3179"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <AnimatedG animatedProps={leftEyeProps}>
              <Path
                d="M9.75 9.75C9.75 10.1642 9.58211 10.5 9.375 10.5C9.16789 10.5 9 10.1642 9 9.75C9 9.33579 9.16789 9 9.375 9C9.58211 9 9.75 9.33579 9.75 9.75Z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={rightEyeProps}>
              <Path
                d="M15 9.75C15 10.1642 14.8321 10.5 14.625 10.5C14.4179 10.5 14.25 10.1642 14.25 9.75C14.25 9.33579 14.4179 9 14.625 9C14.8321 9 15 9.33579 15 9.75Z"
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

FaceFrownIcon.displayName = "FaceFrownIcon";

export { FaceFrownIcon };
