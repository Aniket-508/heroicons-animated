import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

export type CloudIconHandle = IconHandle;

const CloudIcon = forwardRef<CloudIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const startAnimation = useCallback(() => {
      translateX.value = withTiming(1.1, { duration: 400 });
      translateY.value = withTiming(-1.1, { duration: 400 });
    }, [translateX, translateY]);

    const stopAnimation = useCallback(() => {
      translateX.value = withTiming(0, { duration: 200 });
      translateY.value = withTiming(0, { duration: 200 });
    }, [translateX, translateY]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateX: translateX.value }, { translateY: translateY.value }],
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
              d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
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

CloudIcon.displayName = "CloudIcon";

export { CloudIcon };
