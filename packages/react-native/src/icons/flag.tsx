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

export type FlagIconHandle = IconHandle;

const FlagIcon = forwardRef<FlagIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const skewX = useSharedValue(0);

    const startAnimation = useCallback(() => {
      skewX.value = withSequence(
        withTiming(0, { duration: 100 }),
        withTiming(3, { duration: 100 }),
        withTiming(-3, { duration: 100 }),
        withTiming(2, { duration: 100 }),
        withTiming(-2, { duration: 100 }),
        withTiming(0, { duration: 100 })
      );
    }, [skewX]);

    const stopAnimation = useCallback(() => {
      skewX.value = withTiming(0, { duration: 200 });
    }, [skewX]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ skewX: `${skewX.value}deg` }],
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
              d="M3 3V4.5M3 21V15M3 15V4.5"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M3 15L5.77009 14.3075C7.85435 13.7864 10.0562 14.0281 11.9778 14.9889L12.0856 15.0428C13.9687 15.9844 16.1224 16.2359 18.1718 15.7537L21.2861 15.0209C21.097 13.2899 21 11.5313 21 9.75C21 7.98343 21.0954 6.23914 21.2814 4.52202L18.1718 5.25369C16.1224 5.73591 13.9687 5.48435 12.0856 4.54278L11.9778 4.48892C10.0562 3.52812 7.85435 3.28641 5.77009 3.80748L3 4.5"
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

FlagIcon.displayName = "FlagIcon";

export { FlagIcon };
