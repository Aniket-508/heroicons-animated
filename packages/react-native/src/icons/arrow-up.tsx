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
const AnimatedPath = Animated.createAnimatedComponent(Path);

export type ArrowUpIconHandle = IconHandle;

const ArrowUpIcon = forwardRef<ArrowUpIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const p0TranslateY = useSharedValue(0);
    const p1Phase = useSharedValue(0);

    const startAnimation = useCallback(() => {
      p0TranslateY.value = withSequence(
        withTiming(0, { duration: 133 }),
        withTiming(3, { duration: 133 }),
        withTiming(0, { duration: 133 })
      );
      p1Phase.value = withSequence(
        withTiming(0, { duration: 133 }),
        withTiming(1, { duration: 133 }),
        withTiming(2, { duration: 133 })
      );
    }, [p0TranslateY, p1Phase]);

    const stopAnimation = useCallback(() => {
      p0TranslateY.value = withTiming(0, { duration: 200 });
      p1Phase.value = withTiming(0, { duration: 200 });
    }, [p0TranslateY, p1Phase]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const p0Props = useAnimatedProps(() => ({
      y: p0TranslateY.value,
    }));

    const p1Props = useAnimatedProps(() => ({
      d: p1Phase.value < 0.5 ? "M12 3v18" : p1Phase.value < 1.5 ? "M12 6v15" : "M12 3v18",
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
            <AnimatedG animatedProps={p0Props}>
              <Path
                d="M4.5 10.5 12 3m0 0 7.5 7.5"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedPath
              animatedProps={p1Props}
              d="M12 3v18"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
          </Svg>
        </Animated.View>
      </IconWrapper>
    );
  }
);

ArrowUpIcon.displayName = "ArrowUpIcon";

export { ArrowUpIcon };
