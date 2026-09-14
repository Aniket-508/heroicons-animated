import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export type PauseCircleIconHandle = IconHandle;

const PauseCircleIcon = forwardRef<PauseCircleIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const leftBarY = useSharedValue(0);
    const rightBarY = useSharedValue(0);

    const startAnimation = useCallback(() => {
      leftBarY.value = withSequence(
        withTiming(0, { duration: 125 }),
        withTiming(2, { duration: 125 }),
        withTiming(0, { duration: 125 }),
        withTiming(0, { duration: 125 })
      );
      rightBarY.value = withSequence(
        withTiming(0, { duration: 125 }),
        withTiming(0, { duration: 125 }),
        withTiming(2, { duration: 125 }),
        withTiming(0, { duration: 125 })
      );
    }, [leftBarY, rightBarY]);

    const stopAnimation = useCallback(() => {
      leftBarY.value = withTiming(0, { duration: 200 });
      rightBarY.value = withTiming(0, { duration: 200 });
    }, [leftBarY, rightBarY]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const leftBarProps = useAnimatedProps(() => ({
      y: leftBarY.value,
    }));
    const rightBarProps = useAnimatedProps(() => ({
      y: rightBarY.value,
    }));

    return (
      <IconWrapper
        controlled={controlled}
        onPress={onPress}
        onPressIn={startAnimation}
        onPressOut={stopAnimation}
      >
        <Svg fill="none" height={size} style={style} viewBox="0 0 24 24" width={size}>
          <Path
            d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={leftBarProps}
            d="M9.75 9v6"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={rightBarProps}
            d="M14.25 9v6"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
        </Svg>
      </IconWrapper>
    );
  }
);

PauseCircleIcon.displayName = "PauseCircleIcon";

export { PauseCircleIcon };
