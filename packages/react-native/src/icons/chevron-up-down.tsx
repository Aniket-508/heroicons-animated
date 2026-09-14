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

export type ChevronUpDownIconHandle = IconHandle;

const ChevronUpDownIcon = forwardRef<ChevronUpDownIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const p0TranslateY = useSharedValue(0);
    const p1TranslateY = useSharedValue(0);

    const startAnimation = useCallback(() => {
      p0TranslateY.value = withSequence(
        withTiming(0, { duration: 167 }),
        withTiming(-2, { duration: 167 }),
        withTiming(0, { duration: 167 })
      );
      p1TranslateY.value = withSequence(
        withTiming(0, { duration: 167 }),
        withTiming(2, { duration: 167 }),
        withTiming(0, { duration: 167 })
      );
    }, [p0TranslateY, p1TranslateY]);

    const stopAnimation = useCallback(() => {
      p0TranslateY.value = withTiming(0, { duration: 200 });
      p1TranslateY.value = withTiming(0, { duration: 200 });
    }, [p0TranslateY, p1TranslateY]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const p0Props = useAnimatedProps(() => ({
      y: p0TranslateY.value,
    }));

    const p1Props = useAnimatedProps(() => ({
      y: p1TranslateY.value,
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
                d="M8.25 9 12 5.25 15.75 9"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={p1Props}>
              <Path
                d="M8.25 15 12 18.75 15.75 15"
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

ChevronUpDownIcon.displayName = "ChevronUpDownIcon";

export { ChevronUpDownIcon };
