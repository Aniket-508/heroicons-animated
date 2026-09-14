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

export type LockOpenIconHandle = IconHandle;

const LockOpenIcon = forwardRef<LockOpenIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const scale = useSharedValue(1);
    const shackleY = useSharedValue(0);

    const startAnimation = useCallback(() => {
      scale.value = withSequence(
        withTiming(1, { duration: 133 }),
        withTiming(1.05, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
      shackleY.value = withSequence(
        withTiming(0, { duration: 133 }),
        withTiming(-1.25, { duration: 133 }),
        withTiming(0, { duration: 133 })
      );
    }, [scale, shackleY]);

    const stopAnimation = useCallback(() => {
      scale.value = withTiming(1, { duration: 200 });
      shackleY.value = withTiming(0, { duration: 200 });
    }, [scale, shackleY]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
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
              d="M13.5 10.5V6.75C13.5 4.26472 15.5147 2.25 18 2.25C20.4853 2.25 22.5 4.26472 22.5 6.75V10.5"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M3.75 21.75H14.25C15.4926 21.75 16.5 20.7426 16.5 19.5V12.75C16.5 11.5074 15.4926 10.5 14.25 10.5H3.75C2.50736 10.5 1.5 11.5074 1.5 12.75V19.5C1.5 20.7426 2.50736 21.75 3.75 21.75Z"
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

LockOpenIcon.displayName = "LockOpenIcon";

export { LockOpenIcon };
