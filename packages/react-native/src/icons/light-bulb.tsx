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

export type LightBulbIconHandle = IconHandle;

const LightBulbIcon = forwardRef<LightBulbIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const fillOpacity = useSharedValue(0);

    const startAnimation = useCallback(() => {
      fillOpacity.value = withSequence(
        withTiming(0, { duration: 120 }),
        withTiming(1, { duration: 120 }),
        withTiming(0, { duration: 120 }),
        withTiming(1, { duration: 120 }),
        withTiming(0, { duration: 120 })
      );
    }, [fillOpacity]);

    const stopAnimation = useCallback(() => {
      fillOpacity.value = withTiming(0, { duration: 200 });
    }, [fillOpacity]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      opacity: fillOpacity.value,
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
              d="M14.25 18V17.8083C14.25 16.8254 14.9083 15.985 15.7585 15.4917C17.9955 14.1938 19.5 11.7726 19.5 9C19.5 4.85786 16.1421 1.5 12 1.5C7.85786 1.5 4.5 4.85786 4.5 9C4.5 11.7726 6.00446 14.1938 8.24155 15.4917C9.09173 15.985 9.75 16.8254 9.75 17.8083V18"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M12 18V12.75M12 12.75C12.5179 12.75 13.0206 12.6844 13.5 12.561M12 12.75C11.4821 12.75 10.9794 12.6844 10.5 12.561"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M14.25 20.0394C13.5212 20.1777 12.769 20.25 12 20.25C11.231 20.25 10.4788 20.1777 9.75 20.0394"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M13.5 22.422C13.007 22.4736 12.5066 22.5 12 22.5C11.4934 22.5 10.993 22.4736 10.5 22.422"
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

LightBulbIcon.displayName = "LightBulbIcon";

export { LightBulbIcon };
