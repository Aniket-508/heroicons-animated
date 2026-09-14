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

export type VariableIconHandle = IconHandle;

const VariableIcon = forwardRef<VariableIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const scaleX = useSharedValue(1);

    const startAnimation = useCallback(() => {
      scaleX.value = withSequence(
        withTiming(1, { duration: 125 }),
        withTiming(1.1, { duration: 125 }),
        withTiming(0.9, { duration: 125 }),
        withTiming(1, { duration: 125 })
      );
    }, [scaleX]);

    const stopAnimation = useCallback(() => {
      scaleX.value = withTiming(1, { duration: 200 });
    }, [scaleX]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scaleX: scaleX.value }],
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
              d="M4.74455 3C3.61952 5.77929 3 8.8173 3 12C3 15.1827 3.61952 18.2207 4.74455 21M19.5 3C20.4673 5.77929 21 8.8173 21 12C21 15.1827 20.4673 18.2207 19.5 21M8.25 8.88462L9.6945 7.99569C10.1061 7.74241 10.6463 7.93879 10.7991 8.39726L13.2009 15.6027C13.3537 16.0612 13.8939 16.2576 14.3055 16.0043L15.75 15.1154M7.5 15.8654L7.71335 15.9556C8.45981 16.2715 9.32536 16.012 9.77495 15.3376L14.225 8.66243C14.6746 7.98804 15.5402 7.72854 16.2867 8.04435L16.5 8.13462"
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

VariableIcon.displayName = "VariableIcon";

export { VariableIcon };
