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

export type PhoneXMarkIconHandle = IconHandle;

const PhoneXMarkIcon = forwardRef<PhoneXMarkIconHandle, IconProps>(
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
          <Path
            d="M17.25 21.75c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={x1Props}
            d="M15.75 3.75L20.25 8.25"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={x2Props}
            d="M20.25 3.75L15.75 8.25"
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

PhoneXMarkIcon.displayName = "PhoneXMarkIcon";

export { PhoneXMarkIcon };
