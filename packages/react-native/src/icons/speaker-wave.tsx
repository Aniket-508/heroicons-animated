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

export type SpeakerWaveIconHandle = IconHandle;

const SpeakerWaveIcon = forwardRef<SpeakerWaveIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const s1Scale = useSharedValue(1);
    const s1Opacity = useSharedValue(1);
    const s2Scale = useSharedValue(1);
    const s2Opacity = useSharedValue(1);

    const startAnimation = useCallback(() => {
      s1Scale.value = withDelay(200, withRepeat(withTiming(0, { duration: 200 }), 1));
      s1Opacity.value = withDelay(200, withRepeat(withTiming(0, { duration: 200 }), 1));
      s2Scale.value = withDelay(400, withRepeat(withTiming(0, { duration: 200 }), 1));
      s2Opacity.value = withDelay(400, withRepeat(withTiming(0, { duration: 200 }), 1));
    }, [s1Scale, s1Opacity, s2Scale, s2Opacity]);

    const stopAnimation = useCallback(() => {
      s1Scale.value = withTiming(1, { duration: 200 });
      s1Opacity.value = withTiming(1, { duration: 200 });
      s2Scale.value = withTiming(1, { duration: 200 });
      s2Opacity.value = withTiming(1, { duration: 200 });
    }, [s1Scale, s1Opacity, s2Scale, s2Opacity]);

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
              d="M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <AnimatedG animatedProps={s1Props}>
              <Path
                d="M16.463 8.288a5.25 5.25 0 0 1 0 7.424"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={s2Props}>
              <Path
                d="M19.114 5.636a9 9 0 0 1 0 12.728"
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

SpeakerWaveIcon.displayName = "SpeakerWaveIcon";

export { SpeakerWaveIcon };
