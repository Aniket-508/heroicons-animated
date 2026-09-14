import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export type ServerIconHandle = IconHandle;

const ServerIcon = forwardRef<ServerIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const translateY = useSharedValue(0);
    const lightOpacity = useSharedValue(1);

    const startAnimation = useCallback(() => {
      translateY.value = withSequence(
        withTiming(-2, { duration: 200 }),
        withTiming(0, { duration: 200 })
      );
      lightOpacity.value = withSequence(
        withTiming(0.4, { duration: 150 }),
        withTiming(1, { duration: 150 }),
        withTiming(0.4, { duration: 150 }),
        withTiming(1, { duration: 150 })
      );
    }, [translateY, lightOpacity]);

    const stopAnimation = useCallback(() => {
      translateY.value = withTiming(0, { duration: 200 });
      lightOpacity.value = withTiming(1, { duration: 200 });
    }, [translateY, lightOpacity]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateY: translateY.value }],
    }));

    const lightProps = useAnimatedProps(() => ({
      opacity: lightOpacity.value,
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
              d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <AnimatedPath
              animatedProps={lightProps}
              d="M18.75 17.25h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z"
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

ServerIcon.displayName = "ServerIcon";

export { ServerIcon };
