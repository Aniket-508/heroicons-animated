import { forwardRef, useCallback, useImperativeHandle } from "react";
import { useAnimatedProps, useSharedValue, withSpring } from "react-native-reanimated";
import Svg from "react-native-svg";
import { AnimatedCircle, AnimatedLine } from "../animated-components";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

export type AdjustmentsHorizontalIconHandle = IconHandle;

const springConfig = {
  damping: 12,
  stiffness: 100,
  mass: 0.4,
};

const AdjustmentsHorizontalIcon = forwardRef<AdjustmentsHorizontalIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const progress = useSharedValue(0);

    const startAnimation = useCallback(() => {
      progress.value = withSpring(1, springConfig);
    }, [progress]);

    const stopAnimation = useCallback(() => {
      progress.value = withSpring(0, springConfig);
    }, [progress]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const row1RightProps = useAnimatedProps(() => ({
      x1: 10.5 + 3 * progress.value,
    }));
    const row1LeftProps = useAnimatedProps(() => ({
      x2: 7.5 + 3 * progress.value,
    }));
    const row1DotProps = useAnimatedProps(() => ({
      cx: 9 + 3 * progress.value,
    }));

    const row2RightProps = useAnimatedProps(() => ({
      x1: 16.5 - 3 * progress.value,
    }));
    const row2LeftProps = useAnimatedProps(() => ({
      x2: 13.5 - 3 * progress.value,
    }));
    const row2DotProps = useAnimatedProps(() => ({
      cx: 15 - 3 * progress.value,
    }));

    const row3RightProps = useAnimatedProps(() => ({
      x1: 10.5 + 3 * progress.value,
    }));
    const row3LeftProps = useAnimatedProps(() => ({
      x2: 7.5 + 3 * progress.value,
    }));
    const row3DotProps = useAnimatedProps(() => ({
      cx: 9 + 3 * progress.value,
    }));

    return (
      <IconWrapper
        controlled={controlled}
        onPress={onPress}
        onPressIn={startAnimation}
        onPressOut={stopAnimation}
      >
        <Svg fill="none" height={size} style={style} viewBox="0 0 24 24" width={size}>
          <AnimatedLine
            animatedProps={row1RightProps}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
            x1={10.5}
            x2={20.25}
            y1={6}
            y2={6}
          />
          <AnimatedLine
            animatedProps={row1LeftProps}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
            x1={3.75}
            x2={7.5}
            y1={6}
            y2={6}
          />
          <AnimatedCircle
            animatedProps={row1DotProps}
            cx={9}
            cy={6}
            fill="none"
            r={1.5}
            stroke={color}
            strokeWidth={strokeWidth}
          />

          <AnimatedLine
            animatedProps={row2RightProps}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
            x1={16.5}
            x2={20.25}
            y1={12}
            y2={12}
          />
          <AnimatedLine
            animatedProps={row2LeftProps}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
            x1={3.75}
            x2={13.5}
            y1={12}
            y2={12}
          />
          <AnimatedCircle
            animatedProps={row2DotProps}
            cx={15}
            cy={12}
            fill="none"
            r={1.5}
            stroke={color}
            strokeWidth={strokeWidth}
          />

          <AnimatedLine
            animatedProps={row3RightProps}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
            x1={10.5}
            x2={20.25}
            y1={18}
            y2={18}
          />
          <AnimatedLine
            animatedProps={row3LeftProps}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
            x1={3.75}
            x2={7.5}
            y1={18}
            y2={18}
          />
          <AnimatedCircle
            animatedProps={row3DotProps}
            cx={9}
            cy={18}
            fill="none"
            r={1.5}
            stroke={color}
            strokeWidth={strokeWidth}
          />
        </Svg>
      </IconWrapper>
    );
  }
);

AdjustmentsHorizontalIcon.displayName = "AdjustmentsHorizontalIcon";

export { AdjustmentsHorizontalIcon };
