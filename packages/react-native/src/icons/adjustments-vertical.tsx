import { forwardRef, useCallback, useImperativeHandle } from "react";
import { useAnimatedProps, useSharedValue, withSpring } from "react-native-reanimated";
import Svg from "react-native-svg";
import { AnimatedCircle, AnimatedLine } from "../animated-components";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

export type AdjustmentsVerticalIconHandle = IconHandle;

const springConfig = {
  damping: 12,
  stiffness: 100,
  mass: 0.4,
};

const AdjustmentsVerticalIcon = forwardRef<AdjustmentsVerticalIconHandle, IconProps>(
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

    const col1TopProps = useAnimatedProps(() => ({
      y2: 13.5 - 3 * progress.value,
    }));
    const col1BottomProps = useAnimatedProps(() => ({
      y1: 16.5 - 3 * progress.value,
    }));
    const col1DotProps = useAnimatedProps(() => ({
      cy: 15 - 3 * progress.value,
    }));

    const col2TopProps = useAnimatedProps(() => ({
      y2: 7.5 + 3 * progress.value,
    }));
    const col2BottomProps = useAnimatedProps(() => ({
      y1: 10.5 + 3 * progress.value,
    }));
    const col2DotProps = useAnimatedProps(() => ({
      cy: 9 + 3 * progress.value,
    }));

    const col3TopProps = useAnimatedProps(() => ({
      y2: 13.5 - 3 * progress.value,
    }));
    const col3BottomProps = useAnimatedProps(() => ({
      y1: 16.5 - 3 * progress.value,
    }));
    const col3DotProps = useAnimatedProps(() => ({
      cy: 15 - 3 * progress.value,
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
            animatedProps={col1TopProps}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
            x1={6}
            x2={6}
            y1={3.75}
            y2={13.5}
          />
          <AnimatedLine
            animatedProps={col1BottomProps}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
            x1={6}
            x2={6}
            y1={16.5}
            y2={20.25}
          />
          <AnimatedCircle
            animatedProps={col1DotProps}
            cx={6}
            cy={15}
            fill="none"
            r={1.5}
            stroke={color}
            strokeWidth={strokeWidth}
          />

          <AnimatedLine
            animatedProps={col2TopProps}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
            x1={12}
            x2={12}
            y1={3.75}
            y2={7.5}
          />
          <AnimatedLine
            animatedProps={col2BottomProps}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
            x1={12}
            x2={12}
            y1={10.5}
            y2={20.25}
          />
          <AnimatedCircle
            animatedProps={col2DotProps}
            cx={12}
            cy={9}
            fill="none"
            r={1.5}
            stroke={color}
            strokeWidth={strokeWidth}
          />

          <AnimatedLine
            animatedProps={col3TopProps}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
            x1={18}
            x2={18}
            y1={3.75}
            y2={13.5}
          />
          <AnimatedLine
            animatedProps={col3BottomProps}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
            x1={18}
            x2={18}
            y1={16.5}
            y2={20.25}
          />
          <AnimatedCircle
            animatedProps={col3DotProps}
            cx={18}
            cy={15}
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

AdjustmentsVerticalIcon.displayName = "AdjustmentsVerticalIcon";

export { AdjustmentsVerticalIcon };
