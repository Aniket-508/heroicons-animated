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

export type FaceSmileIconHandle = IconHandle;

const FaceSmileIcon = forwardRef<FaceSmileIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const faceScale = useSharedValue(1);
    const faceRotate = useSharedValue(0);
    const mouthPhase = useSharedValue(0);
    const mouthLength = useSharedValue(1);
    const eyeScale = useSharedValue(1);

    const startAnimation = useCallback(() => {
      faceScale.value = withSequence(
        withTiming(1.15, { duration: 240 }),
        withTiming(1.05, { duration: 240 }),
        withTiming(1.1, { duration: 320 })
      );
      faceRotate.value = withSequence(
        withTiming(-3, { duration: 240 }),
        withTiming(3, { duration: 240 }),
        withTiming(0, { duration: 320 })
      );
      mouthPhase.value = withSequence(
        withTiming(0, { duration: 100 }),
        withTiming(1, { duration: 200 }),
        withTiming(2, { duration: 200 })
      );
      mouthLength.value = withSequence(
        withTiming(0.3, { duration: 100 }),
        withTiming(1, { duration: 250 }),
        withTiming(1, { duration: 250 })
      );
      eyeScale.value = withSequence(
        withTiming(1.5, { duration: 150 }),
        withTiming(0.8, { duration: 150 }),
        withTiming(1.2, { duration: 200 })
      );
    }, [faceScale, faceRotate, mouthPhase, mouthLength, eyeScale]);

    const stopAnimation = useCallback(() => {
      faceScale.value = withTiming(1, { duration: 200 });
      faceRotate.value = withTiming(0, { duration: 200 });
      mouthPhase.value = withTiming(0, { duration: 200 });
      mouthLength.value = withTiming(1, { duration: 200 });
      eyeScale.value = withTiming(1, { duration: 200 });
    }, [faceScale, faceRotate, mouthPhase, mouthLength, eyeScale]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const faceStyle = useAnimatedStyle(() => ({
      transform: [{ scale: faceScale.value }, { rotate: `${faceRotate.value}deg` }],
    }));

    const mouthProps = useAnimatedProps(() => ({
      d:
        mouthPhase.value < 0.5
          ? "M15.182 15.182C13.4246 16.9393 10.5754 16.9393 8.81802 15.182"
          : mouthPhase.value < 1.5
            ? "M14.5 14C13 15.5 11 15.5 9.5 14"
            : "M15.182 15.182C13.4246 16.9393 10.5754 16.9393 8.81802 15.182",
      pathLength: mouthLength.value,
      pathOffset: 0,
    }));

    const leftEyeProps = useAnimatedProps(() => ({
      scale: eyeScale.value,
      originX: 9.375,
      originY: 9.75,
    }));
    const rightEyeProps = useAnimatedProps(() => ({
      scale: eyeScale.value,
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
              d="M15.182 15.182C13.4246 16.9393 10.5754 16.9393 8.81802 15.182"
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

FaceSmileIcon.displayName = "FaceSmileIcon";

export { FaceSmileIcon };
