import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export type HashtagIconHandle = IconHandle;

const HashtagIcon = forwardRef<HashtagIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const opacity = useSharedValue(1);
    const drawLength = useSharedValue(1);
    const drawOffset = useSharedValue(0);

    const startAnimation = useCallback(() => {
      opacity.value = 0;
      drawLength.value = 0;
      drawOffset.value = 1;

      opacity.value = withTiming(1, { duration: 100 });
      drawLength.value = withTiming(1, { duration: 600 });
      drawOffset.value = withTiming(0, { duration: 600 });
    }, [opacity, drawLength, drawOffset]);

    const stopAnimation = useCallback(() => {
      opacity.value = withTiming(1, { duration: 100 });
      drawLength.value = withTiming(1, { duration: 400 });
      drawOffset.value = withTiming(0, { duration: 400 });
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
            d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"
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

HashtagIcon.displayName = "HashtagIcon";

export { HashtagIcon };
