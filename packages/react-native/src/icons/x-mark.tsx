import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export type XMarkIconHandle = IconHandle;

const XMarkIcon = forwardRef<XMarkIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const x1Opacity = useSharedValue(1);
    const x1Length = useSharedValue(1);
    const x2Opacity = useSharedValue(1);
    const x2Length = useSharedValue(1);

    const startAnimation = useCallback(() => {
      x1Opacity.value = 0;
      x1Length.value = 0;
      x2Opacity.value = 0;
      x2Length.value = 0;

      x1Opacity.value = withTiming(1, { duration: 300 });
      x1Length.value = withTiming(1, { duration: 300 });
      x2Opacity.value = withDelay(200, withTiming(1, { duration: 300 }));
      x2Length.value = withDelay(200, withTiming(1, { duration: 300 }));
    }, [x1Opacity, x1Length, x2Opacity, x2Length]);

    const stopAnimation = useCallback(() => {
      x1Opacity.value = withTiming(1, { duration: 200 });
      x1Length.value = withTiming(1, { duration: 200 });
      x2Opacity.value = withTiming(1, { duration: 200 });
      x2Length.value = withTiming(1, { duration: 200 });
    }, [x1Opacity, x1Length, x2Opacity, x2Length]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const x1Props = useAnimatedProps(() => ({
      opacity: x1Opacity.value,
      pathLength: x1Length.value,
    }));

    const x2Props = useAnimatedProps(() => ({
      opacity: x2Opacity.value,
      pathLength: x2Length.value,
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
            animatedProps={x1Props}
            d="M6 6l12 12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={x2Props}
            d="M18 6l-12 12"
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

XMarkIcon.displayName = "XMarkIcon";

export { XMarkIcon };
