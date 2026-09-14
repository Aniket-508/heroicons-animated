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

export type GiftIconHandle = IconHandle;

const GiftIcon = forwardRef<GiftIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const scale = useSharedValue(1);
    const rotate = useSharedValue(0);

    const startAnimation = useCallback(() => {
      scale.value = withSequence(
        withTiming(1, { duration: 167 }),
        withTiming(1.05, { duration: 167 }),
        withTiming(1, { duration: 167 })
      );
      rotate.value = withSequence(
        withTiming(0, { duration: 83 }),
        withTiming(-5, { duration: 83 }),
        withTiming(5, { duration: 83 }),
        withTiming(-3, { duration: 83 }),
        withTiming(3, { duration: 83 }),
        withTiming(0, { duration: 83 })
      );
    }, [scale, rotate]);

    const stopAnimation = useCallback(() => {
      scale.value = withTiming(1, { duration: 200 });
      rotate.value = withTiming(0, { duration: 200 });
    }, [scale, rotate]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }, { rotate: `${rotate.value}deg` }],
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
              d="M20.625 11.5046V19.7546C20.625 20.5831 19.9534 21.2546 19.125 21.2546H4.875C4.04657 21.2546 3.375 20.5831 3.375 19.7546V11.5046M11.625 5.12964C11.625 3.67989 10.4497 2.50464 9 2.50464C7.55025 2.50464 6.375 3.67989 6.375 5.12964C6.375 6.57939 7.55025 7.75464 9 7.75464C9.73451 7.75464 11.625 7.75464 11.625 7.75464M11.625 5.12964C11.625 5.84488 11.625 7.75464 11.625 7.75464M11.625 5.12964C11.625 3.67989 12.8003 2.50464 14.25 2.50464C15.6997 2.50464 16.875 3.67989 16.875 5.12964C16.875 6.57939 15.6997 7.75464 14.25 7.75464C13.5155 7.75464 11.625 7.75464 11.625 7.75464M11.625 7.75464V21.2546M3 11.5046H21C21.6213 11.5046 22.125 11.001 22.125 10.3796V8.87964C22.125 8.25832 21.6213 7.75464 21 7.75464H3C2.37868 7.75464 1.875 8.25832 1.875 8.87964V10.3796C1.875 11.001 2.37868 11.5046 3 11.5046Z"
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

GiftIcon.displayName = "GiftIcon";

export { GiftIcon };
