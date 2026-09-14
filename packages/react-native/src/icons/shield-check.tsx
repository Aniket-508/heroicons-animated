import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export type ShieldCheckIconHandle = IconHandle;

const ShieldCheckIcon = forwardRef<ShieldCheckIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const opacity = useSharedValue(1);
    const drawLength = useSharedValue(1);

    const startAnimation = useCallback(() => {
      opacity.value = 0;
      drawLength.value = 0;

      opacity.value = withTiming(1, { duration: 400 });
      drawLength.value = withTiming(1, { duration: 400 });
    }, [opacity, drawLength]);

    const stopAnimation = useCallback(() => {
      opacity.value = withTiming(1, { duration: 300 });
      drawLength.value = withTiming(1, { duration: 300 });
    }, [opacity, drawLength]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const drawProps = useAnimatedProps(() => ({
      opacity: opacity.value,
      pathLength: drawLength.value,
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
            d="M12 2.71411C9.8495 4.75073 6.94563 5.99986 3.75 5.99986C3.69922 5.99986 3.64852 5.99955 3.59789 5.99892C3.2099 7.17903 3 8.43995 3 9.74991C3 15.3414 6.82432 20.0397 12 21.3719C17.1757 20.0397 21 15.3414 21 9.74991C21 8.43995 20.7901 7.17903 20.4021 5.99892C20.3515 5.99955 20.3008 5.99986 20.25 5.99986C17.0544 5.99986 14.1505 4.75073 12 2.71411Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={drawProps}
            d="M9 12.7498L11.25 14.9998L15 9.74985"
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

ShieldCheckIcon.displayName = "ShieldCheckIcon";

export { ShieldCheckIcon };
