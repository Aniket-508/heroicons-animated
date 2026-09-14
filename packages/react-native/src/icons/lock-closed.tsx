import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export type LockClosedIconHandle = IconHandle;

const LockClosedIcon = forwardRef<LockClosedIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const scale = useSharedValue(1);
    const rotate = useSharedValue(0);
    const shackleY = useSharedValue(0);

    const startAnimation = useCallback(() => {
      scale.value = withSequence(
        withTiming(1, { duration: 125 }),
        withTiming(1.02, { duration: 125 }),
        withTiming(0.98, { duration: 125 }),
        withTiming(1, { duration: 125 })
      );
      rotate.value = withSequence(
        withTiming(-3, { duration: 100 }),
        withTiming(2, { duration: 100 }),
        withTiming(-2, { duration: 100 }),
        withTiming(1, { duration: 100 }),
        withTiming(0, { duration: 100 })
      );
      shackleY.value = withSequence(
        withTiming(0, { duration: 100 }),
        withTiming(-1, { duration: 100 }),
        withTiming(0, { duration: 100 })
      );
    }, [scale, rotate, shackleY]);

    const stopAnimation = useCallback(() => {
      scale.value = withTiming(1, { duration: 200 });
      rotate.value = withTiming(0, { duration: 200 });
      shackleY.value = withTiming(0, { duration: 200 });
    }, [scale, rotate, shackleY]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }, { rotate: `${rotate.value}deg` }],
    }));

    const shackleProps = useAnimatedProps(() => ({
      y: shackleY.value,
    }));

    return (
      <IconWrapper
        controlled={controlled}
        onPress={onPress}
        onPressIn={startAnimation}
        onPressOut={stopAnimation}
      >
        <Animated.View style={[animatedStyle, style]}>
          <Svg fill="none" height={size} viewBox="0 0 24 24" width={size}>
            <AnimatedPath
              animatedProps={shackleProps}
              d="M16.5 10.5V6.75C16.5 4.26472 14.4853 2.25 12 2.25C9.51472 2.25 7.5 4.26472 7.5 6.75V10.5"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M6.75 21.75H17.25C18.4926 21.75 19.5 20.7426 19.5 19.5V12.75C19.5 11.5074 18.4926 10.5 17.25 10.5H6.75C5.50736 10.5 4.5 11.5074 4.5 12.75V19.5C4.5 20.7426 5.50736 21.75 6.75 21.75Z"
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

LockClosedIcon.displayName = "LockClosedIcon";

export { LockClosedIcon };
