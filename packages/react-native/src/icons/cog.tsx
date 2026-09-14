import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

export type CogIconHandle = IconHandle;

const CogIcon = forwardRef<CogIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const rotate = useSharedValue(0);

    const startAnimation = useCallback(() => {
      rotate.value = withSpring(180, { stiffness: 50, damping: 10 });
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
              d="M4.50073 11.9993C4.50073 16.1414 7.8586 19.4993 12.0007 19.4993C16.1429 19.4993 19.5007 16.1414 19.5007 11.9993M4.50073 11.9993C4.50073 7.85712 7.8586 4.49925 12.0007 4.49925C16.1429 4.49926 19.5007 7.85712 19.5007 11.9993M4.50073 11.9993L3.00073 11.9993M19.5007 11.9993L21.0007 11.9993M19.5007 11.9993L12.0007 11.9993M3.54329 15.0774L4.95283 14.5644M19.0482 9.43411L20.4578 8.92108M5.1062 17.785L6.25527 16.8208M17.7459 7.17897L18.895 6.21479M7.50064 19.7943L8.25064 18.4952M15.7506 5.50484L16.5006 4.2058M10.4378 20.8633L10.6983 19.386M13.303 4.61393L13.5635 3.13672M13.5635 20.8633L13.303 19.3861M10.6983 4.61397L10.4378 3.13676M16.5007 19.7941L15.7507 18.4951M7.50068 4.20565L12.0007 11.9993M18.8952 17.7843L17.7461 16.8202M6.25542 7.17835L5.10635 6.21417M20.458 15.0776L19.0485 14.5646M4.95308 9.43426L3.54354 8.92123M12.0007 11.9993L8.25073 18.4944"
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

CogIcon.displayName = "CogIcon";

export { CogIcon };
