import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export type ChatBubbleLeftEllipsisIconHandle = IconHandle;

const ChatBubbleLeftEllipsisIcon = forwardRef<ChatBubbleLeftEllipsisIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const o0 = useSharedValue(1);
    const o1 = useSharedValue(1);
    const o2 = useSharedValue(1);

    const pulse = (custom: number) => {
      const t0 = 0;
      const t1 = 0.1;
      const t2 = 0.1 + custom * 0.1;
      const t3 = 0.2 + custom * 0.1;
      const t4 = 0.5;
      const t5 = 0.6;
      const t6 = 0.6 + custom * 0.1;
      const t7 = 0.7 + custom * 0.1;
      const t8 = 1;

      return withSequence(
        withTiming(0, { duration: (t1 - t0) * 1500 }),
        withTiming(0, { duration: (t2 - t1) * 1500 }),
        withTiming(1, { duration: (t3 - t2) * 1500 }),
        withTiming(1, { duration: (t4 - t3) * 1500 }),
        withTiming(0, { duration: (t5 - t4) * 1500 }),
        withTiming(0, { duration: (t6 - t5) * 1500 }),
        withTiming(1, { duration: (t7 - t6) * 1500 }),
        withTiming(1, { duration: (t8 - t7) * 1500 })
      );
    };

    const startAnimation = useCallback(() => {
      o0.value = pulse(0);
      o1.value = pulse(1);
      o2.value = pulse(2);
    }, [o0, o1, o2]);

    const stopAnimation = useCallback(() => {
      o0.value = withTiming(1, { duration: 200 });
      o1.value = withTiming(1, { duration: 200 });
      o2.value = withTiming(1, { duration: 200 });
    }, [o0, o1, o2]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const p0 = useAnimatedProps(() => ({ opacity: o0.value }));
    const p1 = useAnimatedProps(() => ({ opacity: o1.value }));
    const p2 = useAnimatedProps(() => ({ opacity: o2.value }));

    return (
      <IconWrapper
        controlled={controlled}
        onPress={onPress}
        onPressIn={startAnimation}
        onPressOut={stopAnimation}
      >
        <Svg fill="none" height={size} style={style} viewBox="0 0 24 24" width={size}>
          <AnimatedPath
            animatedProps={p0}
            d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={p1}
            d="M12.75 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={p2}
            d="M16.875 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <Path
            d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
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

ChatBubbleLeftEllipsisIcon.displayName = "ChatBubbleLeftEllipsisIcon";

export { ChatBubbleLeftEllipsisIcon };
