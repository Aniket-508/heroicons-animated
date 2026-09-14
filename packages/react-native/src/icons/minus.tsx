import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export type MinusIconHandle = IconHandle;

const MinusIcon = forwardRef<MinusIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const opacity = useSharedValue(1);
    const drawLength = useSharedValue(1);

    const startAnimation = useCallback(() => {
      opacity.value = 0;
      drawLength.value = 0;

      opacity.value = withTiming(1, { duration: 100 });
      drawLength.value = withTiming(1, { duration: 300 });
    }, [opacity, drawLength]);

    const stopAnimation = useCallback(() => {
      opacity.value = withTiming(1, { duration: 200 });
      drawLength.value = withTiming(1, { duration: 200 });
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
          <AnimatedPath
            animatedProps={drawProps}
            d="M5 12h14"
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

MinusIcon.displayName = "MinusIcon";

export { MinusIcon };
