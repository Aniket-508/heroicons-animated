import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export type EqualsIconHandle = IconHandle;

const EqualsIcon = forwardRef<EqualsIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const opacity = useSharedValue(1);
    const drawLength = useSharedValue(1);

    const startAnimation = useCallback(() => {
      opacity.value = 0;
      drawLength.value = 0;
      opacity.value = withTiming(1, { duration: 100 });
      drawLength.value = withTiming(1, { duration: 400 });
    }, [opacity, drawLength]);

    const stopAnimation = useCallback(() => {
      opacity.value = withTiming(1, { duration: 100 });
      drawLength.value = withTiming(1, { duration: 400 });
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
        <Animated.View style={style}>
          <Svg fill="none" height={size} viewBox="0 0 24 24" width={size}>
            <AnimatedPath
              animatedProps={drawProps}
              d="M4.499 8.248h15m-15 7.501h15"
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

EqualsIcon.displayName = "EqualsIcon";

export { EqualsIcon };
