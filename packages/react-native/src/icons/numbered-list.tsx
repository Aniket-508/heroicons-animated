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

export type NumberedListIconHandle = IconHandle;

const LIST_ITEMS = [
  {
    numberPath: "M4.1157 7.49548V3.74512H2.99072M4.1157 7.49548H2.99072M4.1157 7.49548H5.24068",
    linePath: "M8.24185 5.99179H20.2416",
  },
  {
    numberPath:
      "M3.32128 10.0715C3.76061 9.63214 4.4729 9.63214 4.91223 10.0715C5.35157 10.5109 5.35157 11.2233 4.91223 11.6627L3.08285 13.4923L5.24182 13.4925",
    linePath: "M8.24118 11.9945H20.2409",
  },
  {
    numberPath:
      "M2.99072 15.7446H4.1156C4.73696 15.7446 5.24068 16.2484 5.24068 16.8697C5.24068 17.4911 4.73696 17.9949 4.1156 17.9949H3.74071M3.74071 17.9928H4.1156C4.73696 17.9928 5.24068 18.4966 5.24068 19.1179C5.24068 19.7393 4.73696 20.243 4.1156 20.243H2.99072",
    linePath: "M8.24185 17.9936H20.2416",
  },
] as const;

const NumberedListIcon = forwardRef<NumberedListIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const n0Opacity = useSharedValue(1);
    const n1Opacity = useSharedValue(1);
    const n2Opacity = useSharedValue(1);
    const l0Opacity = useSharedValue(1);
    const l1Opacity = useSharedValue(1);
    const l2Opacity = useSharedValue(1);
    const n0Length = useSharedValue(1);
    const n1Length = useSharedValue(1);
    const n2Length = useSharedValue(1);
    const l0Length = useSharedValue(1);
    const l1Length = useSharedValue(1);
    const l2Length = useSharedValue(1);

    const startAnimation = useCallback(() => {
      n0Opacity.value = withDelay(
        0,
        withSequence(withTiming(0, { duration: 1 }), withTiming(1, { duration: 200 }))
      );
      n0Length.value = withDelay(
        0,
        withSequence(withTiming(0, { duration: 1 }), withTiming(1, { duration: 200 }))
      );
      l0Opacity.value = withDelay(
        200,
        withSequence(withTiming(0, { duration: 1 }), withTiming(1, { duration: 300 }))
      );
      l0Length.value = withDelay(
        200,
        withSequence(withTiming(0, { duration: 1 }), withTiming(1, { duration: 300 }))
      );

      n1Opacity.value = withDelay(
        500,
        withSequence(withTiming(0, { duration: 1 }), withTiming(1, { duration: 200 }))
      );
      n1Length.value = withDelay(
        500,
        withSequence(withTiming(0, { duration: 1 }), withTiming(1, { duration: 200 }))
      );
      l1Opacity.value = withDelay(
        700,
        withSequence(withTiming(0, { duration: 1 }), withTiming(1, { duration: 300 }))
      );
      l1Length.value = withDelay(
        700,
        withSequence(withTiming(0, { duration: 1 }), withTiming(1, { duration: 300 }))
      );

      n2Opacity.value = withDelay(
        1000,
        withSequence(withTiming(0, { duration: 1 }), withTiming(1, { duration: 200 }))
      );
      n2Length.value = withDelay(
        1000,
        withSequence(withTiming(0, { duration: 1 }), withTiming(1, { duration: 200 }))
      );
      l2Opacity.value = withDelay(
        1200,
        withSequence(withTiming(0, { duration: 1 }), withTiming(1, { duration: 300 }))
      );
      l2Length.value = withDelay(
        1200,
        withSequence(withTiming(0, { duration: 1 }), withTiming(1, { duration: 300 }))
      );
    }, [
      n0Opacity,
      n1Opacity,
      n2Opacity,
      l0Opacity,
      l1Opacity,
      l2Opacity,
      n0Length,
      n1Length,
      n2Length,
      l0Length,
      l1Length,
      l2Length,
    ]);

    const stopAnimation = useCallback(() => {
      n0Opacity.value = withTiming(1, { duration: 200 });
      n1Opacity.value = withTiming(1, { duration: 200 });
      n2Opacity.value = withTiming(1, { duration: 200 });
      l0Opacity.value = withTiming(1, { duration: 200 });
      l1Opacity.value = withTiming(1, { duration: 200 });
      l2Opacity.value = withTiming(1, { duration: 200 });
      n0Length.value = withTiming(1, { duration: 200 });
      n1Length.value = withTiming(1, { duration: 200 });
      n2Length.value = withTiming(1, { duration: 200 });
      l0Length.value = withTiming(1, { duration: 200 });
      l1Length.value = withTiming(1, { duration: 200 });
      l2Length.value = withTiming(1, { duration: 200 });
    }, [
      n0Opacity,
      n1Opacity,
      n2Opacity,
      l0Opacity,
      l1Opacity,
      l2Opacity,
      n0Length,
      n1Length,
      n2Length,
      l0Length,
      l1Length,
      l2Length,
    ]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const n0Props = useAnimatedProps(() => ({
      opacity: n0Opacity.value,
      pathLength: n0Length.value,
    }));
    const n1Props = useAnimatedProps(() => ({
      opacity: n1Opacity.value,
      pathLength: n1Length.value,
    }));
    const n2Props = useAnimatedProps(() => ({
      opacity: n2Opacity.value,
      pathLength: n2Length.value,
    }));
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
            animatedProps={n0Props}
            d={LIST_ITEMS[0].numberPath}
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
            animatedProps={n1Props}
            d={LIST_ITEMS[1].numberPath}
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
            animatedProps={n2Props}
            d={LIST_ITEMS[2].numberPath}
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

NumberedListIcon.displayName = "NumberedListIcon";

export { NumberedListIcon };
