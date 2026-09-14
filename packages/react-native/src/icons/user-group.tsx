import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Svg, { G, Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedG = Animated.createAnimatedComponent(G);

export type UserGroupIconHandle = IconHandle;

const UserGroupIcon = forwardRef<UserGroupIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const p0TranslateX = useSharedValue(0);
    const p0Opacity = useSharedValue(1);
    const p1TranslateX = useSharedValue(0);
    const p1Opacity = useSharedValue(1);

    const startAnimation = useCallback(() => {
      p0TranslateX.value = withSequence(
        withTiming(-6, { duration: 200 }),
        withTiming(0, { duration: 200 })
      );
      p0Opacity.value = withSequence(
        withTiming(0, { duration: 133 }),
        withTiming(0, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
      p1TranslateX.value = withSequence(
        withTiming(6, { duration: 200 }),
        withTiming(0, { duration: 200 })
      );
      p1Opacity.value = withSequence(
        withTiming(0, { duration: 133 }),
        withTiming(0, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
    }, [p0TranslateX, p0Opacity, p1TranslateX, p1Opacity]);

    const stopAnimation = useCallback(() => {
      p0TranslateX.value = withSpring(0);
      p0Opacity.value = withTiming(1, { duration: 200 });
      p1TranslateX.value = withSpring(0);
      p1Opacity.value = withTiming(1, { duration: 200 });
    }, [p0TranslateX, p0Opacity, p1TranslateX, p1Opacity]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const p0Props = useAnimatedProps(() => ({
      x: p0TranslateX.value,
      opacity: p0Opacity.value,
    }));

    const p1Props = useAnimatedProps(() => ({
      x: p1TranslateX.value,
      opacity: p1Opacity.value,
    }));

    return (
      <IconWrapper
        controlled={controlled}
        onPress={onPress}
        onPressIn={startAnimation}
        onPressOut={stopAnimation}
      >
        <Animated.View style={style}>
          <Svg fill="none" height={size} viewBox="0 0 24 24" width={size}>
            <Path
              d="M15 6.75C15 8.40685 13.6569 9.75 12 9.75C10.3431 9.75 9 8.40685 9 6.75C9 5.09315 10.3431 3.75 12 3.75C13.6569 3.75 15 5.09315 15 6.75Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M17.9999 18.7191C18 18.7294 18 18.7397 18 18.75C18 18.975 17.9876 19.1971 17.9635 19.4156C16.2067 20.4237 14.1707 21 12 21C9.82933 21 7.79327 20.4237 6.03651 19.4156C6.01238 19.1971 6 18.975 6 18.75C6 18.7397 6.00003 18.7295 6.00008 18.7192M17.9999 18.7191C17.994 17.5426 17.6494 16.4461 17.0587 15.5222M17.0587 15.5222C15.9928 13.8552 14.1255 12.75 12 12.75C9.87479 12.75 8.00765 13.8549 6.94169 15.5216M6.94169 15.5216C6.35071 16.4457 6.00598 17.5424 6.00008 18.7192"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <AnimatedG animatedProps={p0Props}>
              <Path
                d="M21 9.75C21 10.9926 19.9926 12 18.75 12C17.5074 12 16.5 10.9926 16.5 9.75C16.5 8.50736 17.5074 7.5 18.75 7.5C19.9926 7.5 21 8.50736 21 9.75ZM17.9999 18.7191C18.2474 18.7396 18.4978 18.75 18.7506 18.75C19.7989 18.75 20.8054 18.5708 21.741 18.2413C21.7473 18.1617 21.7506 18.0812 21.7506 18C21.7506 16.3431 20.4074 15 18.7506 15C18.123 15 17.5403 15.1927 17.0587 15.5222"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={p1Props}>
              <Path
                d="M7.5 9.75C7.5 10.9926 6.49264 12 5.25 12C4.00736 12 3 10.9926 3 9.75C3 8.50736 4.00736 7.5 5.25 7.5C6.49264 7.5 7.5 8.50736 7.5 9.75ZM6.00008 18.7192C5.75299 18.7396 5.50307 18.75 5.25073 18.75C4.2024 18.75 3.19593 18.5708 2.26029 18.2413C2.25396 18.1617 2.25073 18.0812 2.25073 18C2.25073 16.3431 3.59388 15 5.25073 15C5.87796 15 6.46023 15.1925 6.94169 15.5216"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
          </Svg>
        </Animated.View>
      </IconWrapper>
    );
  }
);

UserGroupIcon.displayName = "UserGroupIcon";

export { UserGroupIcon };
