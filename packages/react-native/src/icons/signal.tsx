import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import Svg, { G, Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedG = Animated.createAnimatedComponent(G);

export type SignalIconHandle = IconHandle;

const SignalIcon = forwardRef<SignalIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const s1Scale = useSharedValue(1);
    const s1Opacity = useSharedValue(1);
    const s2Scale = useSharedValue(1);
    const s2Opacity = useSharedValue(1);
    const s3Scale = useSharedValue(1);
    const s3Opacity = useSharedValue(1);

    const startAnimation = useCallback(() => {
      s1Scale.value = withDelay(200, withRepeat(withTiming(0, { duration: 200 }), 1));
      s1Opacity.value = withDelay(200, withRepeat(withTiming(0, { duration: 200 }), 1));
      s2Scale.value = withDelay(400, withRepeat(withTiming(0, { duration: 200 }), 1));
      s2Opacity.value = withDelay(400, withRepeat(withTiming(0, { duration: 200 }), 1));
      s3Scale.value = withDelay(600, withRepeat(withTiming(0, { duration: 200 }), 1));
      s3Opacity.value = withDelay(600, withRepeat(withTiming(0, { duration: 200 }), 1));
    }, [s1Scale, s1Opacity, s2Scale, s2Opacity, s3Scale, s3Opacity]);

    const stopAnimation = useCallback(() => {
      s1Scale.value = withTiming(1, { duration: 200 });
      s1Opacity.value = withTiming(1, { duration: 200 });
      s2Scale.value = withTiming(1, { duration: 200 });
      s2Opacity.value = withTiming(1, { duration: 200 });
      s3Scale.value = withTiming(1, { duration: 200 });
      s3Opacity.value = withTiming(1, { duration: 200 });
    }, [s1Scale, s1Opacity, s2Scale, s2Opacity, s3Scale, s3Opacity]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const s1Props = useAnimatedProps(() => ({
      scale: s1Scale.value,
      opacity: s1Opacity.value,
    }));

    const s2Props = useAnimatedProps(() => ({
      scale: s2Scale.value,
      opacity: s2Opacity.value,
    }));

    const s3Props = useAnimatedProps(() => ({
      scale: s3Scale.value,
      opacity: s3Opacity.value,
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
              d="M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <AnimatedG animatedProps={s1Props}>
              <Path
                d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={s2Props}>
              <Path
                d="M7.227 16.773a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={s3Props}>
              <Path
                d="M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788"
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

SignalIcon.displayName = "SignalIcon";

export { SignalIcon };
