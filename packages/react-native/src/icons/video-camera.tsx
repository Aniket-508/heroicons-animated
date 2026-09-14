import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle, Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export type VideoCameraIconHandle = IconHandle;

const VideoCameraIcon = forwardRef<VideoCameraIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const scale = useSharedValue(1);
    const recordOpacity = useSharedValue(0);

    const startAnimation = useCallback(() => {
      scale.value = withSequence(
        withTiming(1, { duration: 133 }),
        withTiming(1.05, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
      recordOpacity.value = withSequence(
        withTiming(1, { duration: 200 }),
        withTiming(0, { duration: 200 }),
        withTiming(1, { duration: 200 }),
        withTiming(0, { duration: 200 })
      );
    }, [scale, recordOpacity]);

    const stopAnimation = useCallback(() => {
      scale.value = withTiming(1, { duration: 200 });
      recordOpacity.value = withTiming(0, { duration: 200 });
    }, [scale, recordOpacity]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
    }));

    const recordProps = useAnimatedProps(() => ({
      opacity: recordOpacity.value,
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
              d="M15.75 10.5L20.4697 5.78033C20.9421 5.30786 21.75 5.64248 21.75 6.31066V17.6893C21.75 18.3575 20.9421 18.6921 20.4697 18.2197L15.75 13.5M4.5 18.75H13.5C14.7426 18.75 15.75 17.7426 15.75 16.5V7.5C15.75 6.25736 14.7426 5.25 13.5 5.25H4.5C3.25736 5.25 2.25 6.25736 2.25 7.5V16.5C2.25 17.7426 3.25736 18.75 4.5 18.75Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <AnimatedCircle
              animatedProps={recordProps}
              cx="5"
              cy="7.5"
              fill="red"
              r="1"
              stroke="none"
            />
          </Svg>
        </Animated.View>
      </IconWrapper>
    );
  }
);

VideoCameraIcon.displayName = "VideoCameraIcon";

export { VideoCameraIcon };
