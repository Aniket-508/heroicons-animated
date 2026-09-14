import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export type CheckBadgeIconHandle = IconHandle;

const CheckBadgeIcon = forwardRef<CheckBadgeIconHandle, IconProps>(
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
              d="M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
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

CheckBadgeIcon.displayName = "CheckBadgeIcon";

export { CheckBadgeIcon };
