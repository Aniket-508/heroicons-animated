import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export type LanguageIconHandle = IconHandle;

const LanguageIcon = forwardRef<LanguageIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const opacity = useSharedValue(1);
    const drawLength = useSharedValue(1);
    const drawOffset = useSharedValue(0);

    const startAnimation = useCallback(() => {
      opacity.value = 0;
      drawLength.value = 0;
      drawOffset.value = 1;

      opacity.value = withTiming(1, { duration: 10 });
      drawLength.value = withTiming(1, { duration: 500 });
      drawOffset.value = withTiming(0, { duration: 500 });
    }, [opacity, drawLength, drawOffset]);

    const stopAnimation = useCallback(() => {
      opacity.value = withTiming(1, { duration: 200 });
      drawLength.value = withTiming(1, { duration: 200 });
      drawOffset.value = withTiming(0, { duration: 200 });
    }, [opacity, drawLength, drawOffset]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const drawProps = useAnimatedProps(() => ({
      opacity: opacity.value,
      pathLength: drawLength.value,
      pathOffset: drawOffset.value,
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
            d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
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

LanguageIcon.displayName = "LanguageIcon";

export { LanguageIcon };
