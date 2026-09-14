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

export type EnvelopeIconHandle = IconHandle;

const EnvelopeIcon = forwardRef<EnvelopeIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const rotate = useSharedValue(0);

    const startAnimation = useCallback(() => {
      rotate.value = withSequence(
        withTiming(0, { duration: 83 }),
        withTiming(-5, { duration: 83 }),
        withTiming(5, { duration: 83 }),
        withTiming(-3, { duration: 83 }),
        withTiming(3, { duration: 83 }),
        withTiming(0, { duration: 83 })
      );
    }, [rotate]);

    const stopAnimation = useCallback(() => {
      rotate.value = withTiming(0, { duration: 200 });
    }, [rotate]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ rotate: `${rotate.value}deg` }],
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
              d="M21.75 6.75V17.25C21.75 18.4926 20.7426 19.5 19.5 19.5H4.5C3.25736 19.5 2.25 18.4926 2.25 17.25V6.75M21.75 6.75C21.75 5.50736 20.7426 4.5 19.5 4.5H4.5C3.25736 4.5 2.25 5.50736 2.25 6.75M21.75 6.75V6.99271C21.75 7.77405 21.3447 8.49945 20.6792 8.90894L13.1792 13.5243C12.4561 13.9694 11.5439 13.9694 10.8208 13.5243L3.32078 8.90894C2.65535 8.49945 2.25 7.77405 2.25 6.99271V6.75"
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

EnvelopeIcon.displayName = "EnvelopeIcon";

export { EnvelopeIcon };
