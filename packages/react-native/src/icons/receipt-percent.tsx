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

export type ReceiptPercentIconHandle = IconHandle;

const ReceiptPercentIcon = forwardRef<ReceiptPercentIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const lineOpacity = useSharedValue(1);
    const lineLength = useSharedValue(1);

    const dot1Scale = useSharedValue(1);
    const dot1Opacity = useSharedValue(1);
    const dot2Scale = useSharedValue(1);
    const dot2Opacity = useSharedValue(1);

    const startAnimation = useCallback(() => {
      lineOpacity.value = 0;
      lineLength.value = 0;
      dot1Scale.value = 0;
      dot1Opacity.value = 0;
      dot2Scale.value = 0;
      dot2Opacity.value = 0;

      lineOpacity.value = withTiming(1, { duration: 100 });
      lineLength.value = withTiming(1, { duration: 400 });

      dot1Scale.value = withDelay(
        200,
        withSequence(withTiming(1.2, { duration: 150 }), withTiming(1, { duration: 150 }))
      );
      dot1Opacity.value = withDelay(
        200,
        withSequence(withTiming(1, { duration: 150 }), withTiming(1, { duration: 150 }))
      );

      dot2Scale.value = withDelay(
        350,
        withSequence(withTiming(1.2, { duration: 150 }), withTiming(1, { duration: 150 }))
      );
      dot2Opacity.value = withDelay(
        350,
        withSequence(withTiming(1, { duration: 150 }), withTiming(1, { duration: 150 }))
      );
    }, [lineOpacity, lineLength, dot1Scale, dot1Opacity, dot2Scale, dot2Opacity]);

    const stopAnimation = useCallback(() => {
      lineOpacity.value = withTiming(1, { duration: 200 });
      lineLength.value = withTiming(1, { duration: 200 });
      dot1Scale.value = withTiming(1, { duration: 200 });
      dot1Opacity.value = withTiming(1, { duration: 200 });
      dot2Scale.value = withTiming(1, { duration: 200 });
      dot2Opacity.value = withTiming(1, { duration: 200 });
    }, [lineOpacity, lineLength, dot1Scale, dot1Opacity, dot2Scale, dot2Opacity]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const lineProps = useAnimatedProps(() => ({
      opacity: lineOpacity.value,
      pathLength: lineLength.value,
    }));

    const dot1Props = useAnimatedProps(() => ({
      scale: dot1Scale.value,
      opacity: dot1Opacity.value,
      originX: 9.75,
      originY: 9,
    }));

    const dot2Props = useAnimatedProps(() => ({
      scale: dot2Scale.value,
      opacity: dot2Opacity.value,
      originX: 14.25,
      originY: 13.5,
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
            d="M19.5 4.75699V21.75L15.75 20.25L12 21.75L8.25 20.25L4.5 21.75V4.75699C4.5 3.649 5.30608 2.70014 6.40668 2.57241C8.24156 2.35947 10.108 2.25 12 2.25C13.892 2.25 15.7584 2.35947 17.5933 2.57241C18.6939 2.70014 19.5 3.649 19.5 4.75699Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={lineProps}
            d="M9 14.25L15 8.25"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={dot1Props}
            d="M9.75 9H9.7575V9.0075H9.75V9ZM10.125 9C10.125 9.20711 9.95711 9.375 9.75 9.375C9.54289 9.375 9.375 9.20711 9.375 9C9.375 8.79289 9.54289 8.625 9.75 8.625C9.95711 8.625 10.125 8.79289 10.125 9Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={dot2Props}
            d="M14.25 13.5H14.2575V13.5075H14.25V13.5ZM14.625 13.5C14.625 13.7071 14.4571 13.875 14.25 13.875C14.0429 13.875 13.875 13.7071 13.875 13.5C13.875 13.2929 14.0429 13.125 14.25 13.125C14.4571 13.125 14.625 13.2929 14.625 13.5Z"
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

ReceiptPercentIcon.displayName = "ReceiptPercentIcon";

export { ReceiptPercentIcon };
