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

export type ArrowUturnRightIconHandle = IconHandle;

const ArrowUturnRightIcon = forwardRef<ArrowUturnRightIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const scaleX = useSharedValue(1);
    const translateX = useSharedValue(0);

    const startAnimation = useCallback(() => {
      scaleX.value = withSequence(
        withTiming(1, { duration: 150 }),
        withTiming(1.15, { duration: 150 }),
        withTiming(1, { duration: 150 })
      );
      translateX.value = withSequence(
        withTiming(0, { duration: 150 }),
        withTiming(1.5, { duration: 150 }),
        withTiming(0, { duration: 150 })
      );
    }, [scaleX, translateX]);

    const stopAnimation = useCallback(() => {
      scaleX.value = withTiming(1, { duration: 200 });
      translateX.value = withTiming(0, { duration: 200 });
    }, [scaleX, translateX]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const arrowGroupProps = useAnimatedProps(() => ({
      scaleX: scaleX.value,
      x: translateX.value,
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
              d="M21 9H9a6 6 0 0 0 0 12h3"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <AnimatedG animatedProps={arrowGroupProps}>
              <Path
                d="m15 15 6-6m0 0-6-6m6 6"
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

ArrowUturnRightIcon.displayName = "ArrowUturnRightIcon";

export { ArrowUturnRightIcon };
