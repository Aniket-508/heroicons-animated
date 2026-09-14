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

export type DocumentTextIconHandle = IconHandle;

const DocumentTextIcon = forwardRef<DocumentTextIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const l0Opacity = useSharedValue(1);
    const l1Opacity = useSharedValue(1);
    const l0Length = useSharedValue(1);
    const l1Length = useSharedValue(1);

    const startAnimation = useCallback(() => {
      l0Opacity.value = withDelay(
        0,
        withSequence(withTiming(0, { duration: 300 }), withTiming(1, { duration: 300 }))
      );
      l0Length.value = withDelay(
        0,
        withSequence(withTiming(0, { duration: 300 }), withTiming(1, { duration: 300 }))
      );
      l1Opacity.value = withDelay(
        100,
        withSequence(withTiming(0, { duration: 300 }), withTiming(1, { duration: 300 }))
      );
      l1Length.value = withDelay(
        100,
        withSequence(withTiming(0, { duration: 300 }), withTiming(1, { duration: 300 }))
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
            d="M8.25 12.75h7.5"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={l1Props}
            d="M8.25 15.75H12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <Path
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
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

DocumentTextIcon.displayName = "DocumentTextIcon";

export { DocumentTextIcon };
