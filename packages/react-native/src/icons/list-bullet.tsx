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

export type ListBulletIconHandle = IconHandle;

const LIST_ITEMS = [
  {
    bulletPath:
      "M3.75 6.75H3.7575V6.7575H3.75V6.75ZM4.125 6.75C4.125 6.95711 3.95711 7.125 3.75 7.125C3.54289 7.125 3.375 6.95711 3.375 6.75C3.375 6.54289 3.54289 6.375 3.75 6.375C3.95711 6.375 4.125 6.54289 4.125 6.75Z",
    linePath: "M8.25 6.75H20.25",
  },
  {
    bulletPath:
      "M3.75 12H3.7575V12.0075H3.75V12ZM4.125 12C4.125 12.2071 3.95711 12.375 3.75 12.375C3.54289 12.375 3.375 12.2071 3.375 12C3.375 11.7929 3.54289 11.625 3.75 11.625C3.95711 11.625 4.125 11.7929 4.125 12Z",
    linePath: "M8.25 12H20.25",
  },
  {
    bulletPath:
      "M3.75 17.25H3.7575V17.2575H3.75V17.25ZM4.125 17.25C4.125 17.4571 3.95711 17.625 3.75 17.625C3.54289 17.625 3.375 17.4571 3.375 17.25C3.375 17.0429 3.54289 16.875 3.75 16.875C3.95711 16.875 4.125 17.0429 4.125 17.25Z",
    linePath: "M8.25 17.25H20.25",
  },
] as const;

const ListBulletIcon = forwardRef<ListBulletIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const b0Opacity = useSharedValue(1);
    const b1Opacity = useSharedValue(1);
    const b2Opacity = useSharedValue(1);
    const l0Opacity = useSharedValue(1);
    const l1Opacity = useSharedValue(1);
    const l2Opacity = useSharedValue(1);
    const l0Length = useSharedValue(1);
    const l1Length = useSharedValue(1);
    const l2Length = useSharedValue(1);

    const startAnimation = useCallback(() => {
      b0Opacity.value = 0;
      b1Opacity.value = 0;
      b2Opacity.value = 0;
      l0Opacity.value = 0;
      l1Opacity.value = 0;
      l2Opacity.value = 0;
      l0Length.value = 0;
      l1Length.value = 0;
      l2Length.value = 0;

      b0Opacity.value = withDelay(0, withTiming(1, { duration: 100 }));
      l0Opacity.value = withDelay(100, withTiming(1, { duration: 300 }));
      l0Length.value = withDelay(100, withTiming(1, { duration: 300 }));

      b1Opacity.value = withDelay(400, withTiming(1, { duration: 100 }));
      l1Opacity.value = withDelay(500, withTiming(1, { duration: 300 }));
      l1Length.value = withDelay(500, withTiming(1, { duration: 300 }));

      b2Opacity.value = withDelay(800, withTiming(1, { duration: 100 }));
      l2Opacity.value = withDelay(900, withTiming(1, { duration: 300 }));
      l2Length.value = withDelay(900, withTiming(1, { duration: 300 }));
    }, [
      b0Opacity,
      b1Opacity,
      b2Opacity,
      l0Opacity,
      l1Opacity,
      l2Opacity,
      l0Length,
      l1Length,
      l2Length,
    ]);

    const stopAnimation = useCallback(() => {
      b0Opacity.value = withTiming(1, { duration: 200 });
      b1Opacity.value = withTiming(1, { duration: 200 });
      b2Opacity.value = withTiming(1, { duration: 200 });
      l0Opacity.value = withTiming(1, { duration: 200 });
      l1Opacity.value = withTiming(1, { duration: 200 });
      l2Opacity.value = withTiming(1, { duration: 200 });
      l0Length.value = withTiming(1, { duration: 200 });
      l1Length.value = withTiming(1, { duration: 200 });
      l2Length.value = withTiming(1, { duration: 200 });
    }, [
      b0Opacity,
      b1Opacity,
      b2Opacity,
      l0Opacity,
      l1Opacity,
      l2Opacity,
      l0Length,
      l1Length,
      l2Length,
    ]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const b0Props = useAnimatedProps(() => ({ opacity: b0Opacity.value }));
    const b1Props = useAnimatedProps(() => ({ opacity: b1Opacity.value }));
    const b2Props = useAnimatedProps(() => ({ opacity: b2Opacity.value }));
    const l0Props = useAnimatedProps(() => ({
      opacity: l0Opacity.value,
      pathLength: l0Length.value,
    }));
    const l1Props = useAnimatedProps(() => ({
      opacity: l1Opacity.value,
      pathLength: l1Length.value,
    }));
    const l2Props = useAnimatedProps(() => ({
      opacity: l2Opacity.value,
      pathLength: l2Length.value,
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
            animatedProps={b0Props}
            d={LIST_ITEMS[0].bulletPath}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={l0Props}
            d={LIST_ITEMS[0].linePath}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />

          <AnimatedPath
            animatedProps={b1Props}
            d={LIST_ITEMS[1].bulletPath}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={l1Props}
            d={LIST_ITEMS[1].linePath}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />

          <AnimatedPath
            animatedProps={b2Props}
            d={LIST_ITEMS[2].bulletPath}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={l2Props}
            d={LIST_ITEMS[2].linePath}
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

ListBulletIcon.displayName = "ListBulletIcon";

export { ListBulletIcon };
