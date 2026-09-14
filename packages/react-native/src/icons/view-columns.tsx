import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export type ViewColumnsIconHandle = IconHandle;

const ViewColumnsIcon = forwardRef<ViewColumnsIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const l0Opacity = useSharedValue(1);
    const l1Opacity = useSharedValue(1);
    const l0Length = useSharedValue(1);
    const l1Length = useSharedValue(1);

    const startAnimation = useCallback(() => {
      l0Opacity.value = withDelay(
        200,
        withSequence(withTiming(0, { duration: 1 }), withTiming(1, { duration: 300 }))
      );
      l0Length.value = withDelay(
        200,
        withSequence(withTiming(0, { duration: 1 }), withTiming(1, { duration: 300 }))
      );
      l1Opacity.value = withDelay(
        350,
        withSequence(withTiming(0, { duration: 1 }), withTiming(1, { duration: 300 }))
      );
      l1Length.value = withDelay(
        350,
        withSequence(withTiming(0, { duration: 1 }), withTiming(1, { duration: 300 }))
      );
    }, [l0Opacity, l1Opacity, l0Length, l1Length]);

    const stopAnimation = useCallback(() => {
      l0Opacity.value = withTiming(1, { duration: 200 });
      l1Opacity.value = withTiming(1, { duration: 200 });
      l0Length.value = withTiming(1, { duration: 200 });
      l1Length.value = withTiming(1, { duration: 200 });
    }, [l0Opacity, l1Opacity, l0Length, l1Length]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const l0Props = useAnimatedProps(() => ({
      opacity: l0Opacity.value,
      pathLength: l0Length.value,
    }));
    const l1Props = useAnimatedProps(() => ({
      opacity: l1Opacity.value,
      pathLength: l1Length.value,
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
            animatedProps={l0Props}
            d="M9 4.5v15"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={l1Props}
            d="M15 4.5v15"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <Path
            d="M4.125 19.5h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z"
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

ViewColumnsIcon.displayName = "ViewColumnsIcon";

export { ViewColumnsIcon };
