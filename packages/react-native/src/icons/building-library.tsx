import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export type BuildingLibraryIconHandle = IconHandle;

const BuildingLibraryIcon = forwardRef<BuildingLibraryIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const dotOpacity = useSharedValue(1);
    const p0Opacity = useSharedValue(1);
    const p1Opacity = useSharedValue(1);
    const p2Opacity = useSharedValue(1);
    const p0Length = useSharedValue(1);
    const p1Length = useSharedValue(1);
    const p2Length = useSharedValue(1);

    const startAnimation = useCallback(() => {
      dotOpacity.value = 0;
      dotOpacity.value = withDelay(100, withTiming(1, { duration: 100 }));

      p0Opacity.value = 0;
      p0Length.value = 0;
      p0Opacity.value = withDelay(200, withTiming(1, { duration: 300 }));
      p0Length.value = withDelay(200, withTiming(1, { duration: 300 }));

      p1Opacity.value = 0;
      p1Length.value = 0;
      p1Opacity.value = withDelay(350, withTiming(1, { duration: 300 }));
      p1Length.value = withDelay(350, withTiming(1, { duration: 300 }));

      p2Opacity.value = 0;
      p2Length.value = 0;
      p2Opacity.value = withDelay(500, withTiming(1, { duration: 300 }));
      p2Length.value = withDelay(500, withTiming(1, { duration: 300 }));
    }, [dotOpacity, p0Opacity, p1Opacity, p2Opacity, p0Length, p1Length, p2Length]);

    const stopAnimation = useCallback(() => {
      dotOpacity.value = withTiming(1, { duration: 200 });
      p0Opacity.value = withTiming(1, { duration: 200 });
      p1Opacity.value = withTiming(1, { duration: 200 });
      p2Opacity.value = withTiming(1, { duration: 200 });
      p0Length.value = withTiming(1, { duration: 200 });
      p1Length.value = withTiming(1, { duration: 200 });
      p2Length.value = withTiming(1, { duration: 200 });
    }, [dotOpacity, p0Opacity, p1Opacity, p2Opacity, p0Length, p1Length, p2Length]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const dotProps = useAnimatedProps(() => ({ opacity: dotOpacity.value }));
    const p0Props = useAnimatedProps(() => ({
      opacity: p0Opacity.value,
      pathLength: p0Length.value,
    }));
    const p1Props = useAnimatedProps(() => ({
      opacity: p1Opacity.value,
      pathLength: p1Length.value,
    }));
    const p2Props = useAnimatedProps(() => ({
      opacity: p2Opacity.value,
      pathLength: p2Length.value,
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
            d="M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={dotProps}
            d="M12 6.75h.008v.008H12V6.75Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={p0Props}
            d="M8.25 12.75v8.25"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={p1Props}
            d="M12 12.75v8.25"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={p2Props}
            d="M15.75 12.75v8.25"
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

BuildingLibraryIcon.displayName = "BuildingLibraryIcon";

export { BuildingLibraryIcon };
