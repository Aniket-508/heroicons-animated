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

export type ArrowTurnLeftDownIconHandle = IconHandle;

const ArrowTurnLeftDownIcon = forwardRef<ArrowTurnLeftDownIconHandle, IconProps>(
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
        withTiming(2, { duration: 150 }),
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

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scaleY: scaleY.value }, { translateY: translateY.value }],
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
              d="m11.99 16.5-3.75 3.75m0 0L4.49 16.5m3.75 3.75V3.75h11.25"
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

ArrowTurnLeftDownIcon.displayName = "ArrowTurnLeftDownIcon";

export { ArrowTurnLeftDownIcon };
