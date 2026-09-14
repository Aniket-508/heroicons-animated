import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

export type PencilSquareIconHandle = IconHandle;

const PencilSquareIcon = forwardRef<PencilSquareIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const rotate = useSharedValue(0);
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const startAnimation = useCallback(() => {
      rotate.value = withSequence(
        withTiming(-0.5, { duration: 200 }),
        withTiming(0.5, { duration: 200 }),
        withTiming(-0.5, { duration: 200 })
      );
      translateX.value = withSequence(
        withTiming(0, { duration: 150 }),
        withTiming(-1, { duration: 150 }),
        withTiming(1, { duration: 150 }),
        withTiming(0, { duration: 150 })
      );
      translateY.value = withSequence(
        withTiming(0, { duration: 150 }),
        withTiming(1, { duration: 150 }),
        withTiming(-1, { duration: 150 }),
        withTiming(0, { duration: 150 })
      );
    }, [rotate, translateX, translateY]);

    const stopAnimation = useCallback(() => {
      rotate.value = withTiming(0, { duration: 200 });
      translateX.value = withTiming(0, { duration: 200 });
      translateY.value = withTiming(0, { duration: 200 });
    }, [rotate, translateX, translateY]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [
        { rotate: `${rotate.value}deg` },
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
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
            <Path
              d="M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499"
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

PencilSquareIcon.displayName = "PencilSquareIcon";

export { PencilSquareIcon };
