import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

export type PlusIconHandle = IconHandle;

const PlusIcon = forwardRef<PlusIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const rotate = useSharedValue(0);

    const startAnimation = useCallback(() => {
      rotate.value = withSpring(180, { stiffness: 100, damping: 15 });
    }, [rotate]);

    const stopAnimation = useCallback(() => {
      rotate.value = withSpring(0);
    }, [rotate]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ rotate: `${rotate.value}deg` }],
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
              d="M5 12h14"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M12 5v14"
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

PlusIcon.displayName = "PlusIcon";

export { PlusIcon };
