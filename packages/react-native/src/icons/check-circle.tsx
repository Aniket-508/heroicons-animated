import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export type CheckCircleIconHandle = IconHandle;

const CheckCircleIcon = forwardRef<CheckCircleIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const checkOpacity = useSharedValue(1);
    const checkLength = useSharedValue(1);

    const startAnimation = useCallback(() => {
      checkOpacity.value = 0;
      checkLength.value = 0;
      checkOpacity.value = withTiming(1, { duration: 400 });
      checkLength.value = withTiming(1, { duration: 400 });
    }, [checkOpacity, checkLength]);

    const stopAnimation = useCallback(() => {
      checkOpacity.value = withTiming(1, { duration: 300 });
      checkLength.value = withTiming(1, { duration: 300 });
    }, [checkOpacity, checkLength]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const checkProps = useAnimatedProps(() => ({
      opacity: checkOpacity.value,
      pathLength: checkLength.value,
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
            <Path
              d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <AnimatedPath
              animatedProps={checkProps}
              d="M9 12.75 11.25 15 15 9.75"
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

CheckCircleIcon.displayName = "CheckCircleIcon";

export { CheckCircleIcon };
