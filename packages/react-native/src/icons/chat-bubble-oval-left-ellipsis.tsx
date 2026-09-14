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

export type ChatBubbleOvalLeftEllipsisIconHandle = IconHandle;

const ChatBubbleOvalLeftEllipsisIcon = forwardRef<ChatBubbleOvalLeftEllipsisIconHandle, IconProps>(
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
            d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={p1}
            d="M12.75 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={p2}
            d="M16.875 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <Path
            d="M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
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

ChatBubbleOvalLeftEllipsisIcon.displayName = "ChatBubbleOvalLeftEllipsisIcon";

export { ChatBubbleOvalLeftEllipsisIcon };
