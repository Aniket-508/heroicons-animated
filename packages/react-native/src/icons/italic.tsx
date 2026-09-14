import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export type ItalicIconHandle = IconHandle;

const ItalicIcon = forwardRef<ItalicIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const opacity = useSharedValue(1);
    const drawLength = useSharedValue(1);
    const drawOffset = useSharedValue(0);

    const startAnimation = useCallback(() => {
      opacity.value = 0;
      drawLength.value = 0;
      drawOffset.value = 1;

      opacity.value = withTiming(1, { duration: 300 });
      drawLength.value = withTiming(1, { duration: 300 });
      drawOffset.value = withTiming(0, { duration: 300 });
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
            d="M5.248 20.246H9.05m0 0h3.696m-3.696 0 5.893-16.502m0 0h-3.697m3.697 0h3.803"
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

ItalicIcon.displayName = "ItalicIcon";

export { ItalicIcon };
