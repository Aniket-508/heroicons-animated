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

export type ReceiptRefundIconHandle = IconHandle;

const ReceiptRefundIcon = forwardRef<ReceiptRefundIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const translateX = useSharedValue(0);
    const opacity = useSharedValue(1);

    const startAnimation = useCallback(() => {
      translateX.value = withSequence(
        withTiming(4, { duration: 200 }),
        withTiming(0, { duration: 200 })
      );
      opacity.value = withSequence(
        withTiming(0, { duration: 200 }),
        withTiming(1, { duration: 200 })
      );
    }, [translateX, opacity]);

    const stopAnimation = useCallback(() => {
      translateX.value = withTiming(0, { duration: 200 });
      opacity.value = withTiming(1, { duration: 200 });
    }, [translateX, opacity]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateX: translateX.value }],
      opacity: opacity.value,
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
              d="M19.5 4.75699V21.75L15.75 20.25L12 21.75L8.25 20.25L4.5 21.75V4.75699C4.5 3.649 5.30608 2.70014 6.40668 2.57241C8.24156 2.35947 10.108 2.25 12 2.25C13.892 2.25 15.7584 2.35947 17.5933 2.57241C18.6939 2.70014 19.5 3.649 19.5 4.75699Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M8.25 9.75H13.125C14.5747 9.75 15.75 10.9253 15.75 12.375C15.75 13.8247 14.5747 15 13.125 15H12"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12"
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

ReceiptRefundIcon.displayName = "ReceiptRefundIcon";

export { ReceiptRefundIcon };
