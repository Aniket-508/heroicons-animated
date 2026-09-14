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

export type MusicalNoteIconHandle = IconHandle;

const MusicalNoteIcon = forwardRef<MusicalNoteIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const rotate = useSharedValue(0);
    const translateY = useSharedValue(0);

    const startAnimation = useCallback(() => {
      rotate.value = withSequence(
        withTiming(0, { duration: 83 }),
        withTiming(-5, { duration: 83 }),
        withTiming(5, { duration: 83 }),
        withTiming(-5, { duration: 83 }),
        withTiming(5, { duration: 83 }),
        withTiming(0, { duration: 83 })
      );
      translateY.value = withSequence(
        withTiming(0, { duration: 83 }),
        withTiming(-1, { duration: 83 }),
        withTiming(1, { duration: 83 }),
        withTiming(-1, { duration: 83 }),
        withTiming(1, { duration: 83 }),
        withTiming(0, { duration: 83 })
      );
    }, [rotate, translateY]);

    const stopAnimation = useCallback(() => {
      rotate.value = withTiming(0, { duration: 200 });
      translateY.value = withTiming(0, { duration: 200 });
    }, [rotate, translateY]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ rotate: `${rotate.value}deg` }, { translateY: translateY.value }],
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
              d="M9 9L19.5 6M19.5 12.5528V16.3028C19.5 17.3074 18.834 18.1903 17.8681 18.4663L16.5481 18.8434C15.3964 19.1724 14.25 18.3077 14.25 17.1099C14.25 16.305 14.7836 15.5975 15.5576 15.3764L17.8681 14.7163C18.834 14.4403 19.5 13.5574 19.5 12.5528ZM19.5 12.5528V2.25L9 5.25V15.5528M9 15.5528V19.3028C9 20.3074 8.33405 21.1903 7.36812 21.4663L6.04814 21.8434C4.89645 22.1724 3.75 21.3077 3.75 20.1099C3.75 19.305 4.2836 18.5975 5.05757 18.3764L7.36812 17.7163C8.33405 17.4403 9 16.5574 9 15.5528Z"
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

MusicalNoteIcon.displayName = "MusicalNoteIcon";

export { MusicalNoteIcon };
