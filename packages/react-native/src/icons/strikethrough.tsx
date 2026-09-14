import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export type StrikethroughIconHandle = IconHandle;

const StrikethroughIcon = forwardRef<StrikethroughIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const lineOpacity = useSharedValue(1);
    const lineLength = useSharedValue(1);

    const startAnimation = useCallback(() => {
      lineOpacity.value = 0;
      lineLength.value = 0;

      lineOpacity.value = withTiming(1, { duration: 400 });
      lineLength.value = withTiming(1, { duration: 400 });
    }, [lineOpacity, lineLength]);

    const stopAnimation = useCallback(() => {
      lineOpacity.value = withTiming(1, { duration: 200 });
      lineLength.value = withTiming(1, { duration: 200 });
    }, [lineOpacity, lineLength]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const lineProps = useAnimatedProps(() => ({
      opacity: lineOpacity.value,
      pathLength: lineLength.value,
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
            d="M12 12a8.912 8.912 0 0 1-.318-.079c-1.585-.424-2.904-1.247-3.76-2.236-.873-1.009-1.265-2.19-.968-3.301.59-2.2 3.663-3.29 6.863-2.432A8.186 8.186 0 0 1 16.5 5.21M6.42 17.81c.857.99 2.176 1.812 3.761 2.237 3.2.858 6.274-.23 6.863-2.431.233-.868.044-1.779-.465-2.617"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={lineProps}
            d="M3.75 12h16.5"
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

StrikethroughIcon.displayName = "StrikethroughIcon";

export { StrikethroughIcon };
