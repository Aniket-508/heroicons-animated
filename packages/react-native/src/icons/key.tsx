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

export type KeyIconHandle = IconHandle;

const KeyIcon = forwardRef<KeyIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const rotate = useSharedValue(0);
    const translateY = useSharedValue(0);

    const startAnimation = useCallback(() => {
      rotate.value = withSequence(
        withTiming(0, { duration: 225 }),
        withTiming(3, { duration: 225 }),
        withTiming(-3, { duration: 225 }),
        withTiming(0, { duration: 225 })
      );
      translateY.value = withSequence(
        withTiming(0, { duration: 180 }),
        withTiming(-3, { duration: 180 }),
        withTiming(0, { duration: 180 }),
        withTiming(-2, { duration: 180 }),
        withTiming(0, { duration: 180 })
      );
    }, [rotate, translateY]);

    const stopAnimation = useCallback(() => {
      rotate.value = withTiming(0, { duration: 200 });
      translateY.value = withTiming(0, { duration: 200 });
    }, [rotate, translateY]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ rotate: `${rotate.value}deg` }, { translateY: translateY.value }],
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
              d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
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

KeyIcon.displayName = "KeyIcon";

export { KeyIcon };
