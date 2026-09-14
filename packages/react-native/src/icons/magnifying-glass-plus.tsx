import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

export type MagnifyingGlassPlusIconHandle = IconHandle;

const MagnifyingGlassPlusIcon = forwardRef<MagnifyingGlassPlusIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const opacity = useSharedValue(1);
    const scale = useSharedValue(1);

    const startAnimation = useCallback(() => {
      opacity.value = withSequence(
        withTiming(0, { duration: 200 }),
        withTiming(1, { duration: 200 })
      );
      scale.value = withSequence(
        withTiming(0.5, { duration: 200 }),
        withTiming(1, { duration: 200 })
      );
    }, [opacity, scale]);

    const stopAnimation = useCallback(() => {
      opacity.value = withTiming(1, { duration: 200 });
      scale.value = withTiming(1, { duration: 200 });
    }, [opacity, scale]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
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
            <Path
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M10.5 7.5v6"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M7.5 10.5h6"
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

MagnifyingGlassPlusIcon.displayName = "MagnifyingGlassPlusIcon";

export { MagnifyingGlassPlusIcon };
