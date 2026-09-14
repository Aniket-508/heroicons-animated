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

export type WifiIconHandle = IconHandle;

const WifiIcon = forwardRef<WifiIconHandle, IconProps>(
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
              d="M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <AnimatedG animatedProps={s1Props}>
              <Path
                d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={s2Props}>
              <Path
                d="M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={s3Props}>
              <Path
                d="M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0"
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

WifiIcon.displayName = "WifiIcon";

export { WifiIcon };
