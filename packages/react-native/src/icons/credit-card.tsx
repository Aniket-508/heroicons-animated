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

export type CreditCardIconHandle = IconHandle;

const CreditCardIcon = forwardRef<CreditCardIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const l0Opacity = useSharedValue(1);
    const l1Opacity = useSharedValue(1);
    const l0Length = useSharedValue(1);
    const l1Length = useSharedValue(1);

    const startAnimation = useCallback(() => {
      l0Opacity.value = withDelay(
        0,
        withSequence(withTiming(0, { duration: 300 }), withTiming(1, { duration: 300 }))
      );
      l0Length.value = withDelay(
        0,
        withSequence(withTiming(0, { duration: 300 }), withTiming(1, { duration: 300 }))
      );
      l1Opacity.value = withDelay(
        100,
        withSequence(withTiming(0, { duration: 300 }), withTiming(1, { duration: 300 }))
      );
      l1Length.value = withDelay(
        100,
        withSequence(withTiming(0, { duration: 300 }), withTiming(1, { duration: 300 }))
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
            d="M5.25 14.25h6"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={l1Props}
            d="M5.25 16.5h3"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <Path
            d="M2.25 8.25h19.5M2.25 9h19.5M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
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

CreditCardIcon.displayName = "CreditCardIcon";

export { CreditCardIcon };
