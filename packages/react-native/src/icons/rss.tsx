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

export type RssIconHandle = IconHandle;

const RssIcon = forwardRef<RssIconHandle, IconProps>(
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
              d="M6 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <AnimatedG animatedProps={s1Props}>
              <Path
                d="M12.75 19.5v-.75a7.5 7.5 0 0 0-7.5-7.5H4.5"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={s2Props}>
              <Path
                d="M4.5 4.5h.75c7.87 0 14.25 6.38 14.25 14.25v.75"
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

RssIcon.displayName = "RssIcon";

export { RssIcon };
