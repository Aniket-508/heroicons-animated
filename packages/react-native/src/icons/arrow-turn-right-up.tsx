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

export type ArrowTurnRightUpIconHandle = IconHandle;

const ArrowTurnRightUpIcon = forwardRef<ArrowTurnRightUpIconHandle, IconProps>(
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
        withTiming(-2, { duration: 150 }),
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
              d="m11.99 7.5 3.75-3.75m0 0 3.75 3.75m-3.75-3.75v16.499H4.49"
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

ArrowTurnRightUpIcon.displayName = "ArrowTurnRightUpIcon";

export { ArrowTurnRightUpIcon };
