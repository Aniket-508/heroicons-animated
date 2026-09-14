import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export type ArrowTrendingDownIconHandle = IconHandle;

const ArrowTrendingDownIcon = forwardRef<ArrowTrendingDownIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const mainOpacity = useSharedValue(1);
    const mainLength = useSharedValue(1);
    const arrowOpacity = useSharedValue(1);
    const arrowLength = useSharedValue(1);
    const arrowOffset = useSharedValue(0);

    const startAnimation = useCallback(() => {
      translateX.value = withSequence(
        withTiming(0, { duration: 167 }),
        withTiming(2, { duration: 167 }),
        withTiming(0, { duration: 167 })
      );
      translateY.value = withSequence(
        withTiming(0, { duration: 167 }),
        withTiming(2, { duration: 167 }),
        withTiming(0, { duration: 167 })
      );
      mainOpacity.value = 0;
      mainLength.value = 0;
      mainOpacity.value = withTiming(1, { duration: 100 });
      mainLength.value = withTiming(1, { duration: 400 });

      arrowOpacity.value = 0;
      arrowLength.value = 0;
      arrowOffset.value = 0.5;
      arrowOpacity.value = withDelay(300, withTiming(1, { duration: 100 }));
      arrowLength.value = withDelay(300, withTiming(1, { duration: 300 }));
      arrowOffset.value = withDelay(300, withTiming(0, { duration: 300 }));
    }, [translateX, translateY, mainOpacity, mainLength, arrowOpacity, arrowLength, arrowOffset]);

    const stopAnimation = useCallback(() => {
      translateX.value = withTiming(0, { duration: 200 });
      translateY.value = withTiming(0, { duration: 200 });
      mainOpacity.value = withTiming(1, { duration: 150 });
      mainLength.value = withTiming(1, { duration: 200 });
      arrowOpacity.value = withTiming(1, { duration: 150 });
      arrowLength.value = withTiming(1, { duration: 200 });
      arrowOffset.value = withTiming(0, { duration: 200 });
    }, [translateX, translateY, mainOpacity, mainLength, arrowOpacity, arrowLength, arrowOffset]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateX: translateX.value }, { translateY: translateY.value }],
    }));

    const mainProps = useAnimatedProps(() => ({
      opacity: mainOpacity.value,
      pathLength: mainLength.value,
    }));
    const arrowProps = useAnimatedProps(() => ({
      opacity: arrowOpacity.value,
      pathLength: arrowLength.value,
      pathOffset: arrowOffset.value,
    }));

    return (
      <IconWrapper
        controlled={controlled}
        onPress={onPress}
        onPressIn={startAnimation}
        onPressOut={stopAnimation}
      >
        <Animated.View style={[animatedStyle, style]}>
          <Svg fill="none" height={size} viewBox="0 0 24 24" width={size}>
            <AnimatedPath
              animatedProps={mainProps}
              d="M2.25 6L9 12.75L13.2862 8.46383C15.3217 10.0166 16.8781 12.23 17.5919 14.8941L18.3684 17.7919"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <AnimatedPath
              animatedProps={arrowProps}
              d="M18.3684 17.7919L21.5504 12.2806M18.3684 17.7919L12.857 14.6099"
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

ArrowTrendingDownIcon.displayName = "ArrowTrendingDownIcon";

export { ArrowTrendingDownIcon };
