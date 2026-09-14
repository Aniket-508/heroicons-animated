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

export type ArrowUturnDownIconHandle = IconHandle;

const ArrowUturnDownIcon = forwardRef<ArrowUturnDownIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const scaleY = useSharedValue(1);
    const translateY = useSharedValue(0);

    const startAnimation = useCallback(() => {
      scaleY.value = withSequence(
        withTiming(1, { duration: 150 }),
        withTiming(1.15, { duration: 150 }),
        withTiming(1, { duration: 150 })
      );
      translateY.value = withSequence(
        withTiming(0, { duration: 150 }),
        withTiming(1.5, { duration: 150 }),
        withTiming(0, { duration: 150 })
      );
    }, [scaleY, translateY]);

    const stopAnimation = useCallback(() => {
      scaleY.value = withTiming(1, { duration: 200 });
      translateY.value = withTiming(0, { duration: 200 });
    }, [scaleY, translateY]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const arrowGroupProps = useAnimatedProps(() => ({
      scaleY: scaleY.value,
      y: translateY.value,
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
              d="M9 21V9a6 6 0 0 1 12 0v3"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <AnimatedG animatedProps={arrowGroupProps}>
              <Path
                d="m15 15-6 6m0 0-6-6m6 6"
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

ArrowUturnDownIcon.displayName = "ArrowUturnDownIcon";

export { ArrowUturnDownIcon };
