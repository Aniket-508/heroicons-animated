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

export type BuildingOffice2IconHandle = IconHandle;

const BuildingOffice2Icon = forwardRef<BuildingOffice2IconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const opacity = useSharedValue(1);

    const startAnimation = useCallback(() => {
      opacity.value = withSequence(
        withTiming(0, { duration: 150 }),
        withTiming(1, { duration: 150 })
      );
    }, [opacity]);

    const stopAnimation = useCallback(() => {
      opacity.value = withTiming(1, { duration: 200 });
    }, [opacity]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
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
              d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21"
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

BuildingOffice2Icon.displayName = "BuildingOffice2Icon";

export { BuildingOffice2Icon };
