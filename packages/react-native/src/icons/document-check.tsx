import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export type DocumentCheckIconHandle = IconHandle;

const DocumentCheckIcon = forwardRef<DocumentCheckIconHandle, IconProps>(
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
              d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <AnimatedPath
              animatedProps={checkProps}
              d="M9 15l2.25 2.25L15 12"
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

DocumentCheckIcon.displayName = "DocumentCheckIcon";

export { DocumentCheckIcon };
