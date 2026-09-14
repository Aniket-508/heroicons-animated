import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export type ChatBubbleBottomCenterTextIconHandle = IconHandle;

const ChatBubbleBottomCenterTextIcon = forwardRef<ChatBubbleBottomCenterTextIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const l0Opacity = useSharedValue(1);
    const l1Opacity = useSharedValue(1);
    const l0Length = useSharedValue(1);
    const l1Length = useSharedValue(1);

    const startAnimation = useCallback(() => {
      l0Opacity.value = withDelay(
        0,
        withSequence(
          withTiming(0, { duration: 300 }),
          withDelay(100, withTiming(1, { duration: 300 }))
        )
      );
      l0Length.value = withDelay(
        0,
        withSequence(
          withTiming(0, { duration: 300 }),
          withDelay(100, withTiming(1, { duration: 300 }))
        )
      );
      l1Opacity.value = withDelay(
        100,
        withSequence(
          withTiming(0, { duration: 300 }),
          withDelay(100, withTiming(1, { duration: 300 }))
        )
      );
      l1Length.value = withDelay(
        100,
        withSequence(
          withTiming(0, { duration: 300 }),
          withDelay(100, withTiming(1, { duration: 300 }))
        )
      );
    }, [l0Opacity, l1Opacity, l0Length, l1Length]);

    const stopAnimation = useCallback(() => {
      l0Opacity.value = withTiming(1, { duration: 200 });
      l1Opacity.value = withTiming(1, { duration: 200 });
      l0Length.value = withTiming(1, { duration: 200 });
      l1Length.value = withTiming(1, { duration: 200 });
    }, [l0Opacity, l1Opacity, l0Length, l1Length]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const l0Props = useAnimatedProps(() => ({
      opacity: l0Opacity.value,
      pathLength: l0Length.value,
    }));
    const l1Props = useAnimatedProps(() => ({
      opacity: l1Opacity.value,
      pathLength: l1Length.value,
    }));

    return (
      <IconWrapper
        controlled={controlled}
        onPress={onPress}
        onPressIn={startAnimation}
        onPressOut={stopAnimation}
      >
        <Svg fill="none" height={size} style={style} viewBox="0 0 24 24" width={size}>
          <AnimatedPath
            animatedProps={l0Props}
            d="M7.5 8.25h9"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={l1Props}
            d="M7.5 11.25H12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <Path
            d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
        </Svg>
      </IconWrapper>
    );
  }
);

ChatBubbleBottomCenterTextIcon.displayName = "ChatBubbleBottomCenterTextIcon";

export { ChatBubbleBottomCenterTextIcon };
