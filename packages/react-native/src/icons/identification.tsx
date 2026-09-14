import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export type IdentificationIconHandle = IconHandle;

const IdentificationIcon = forwardRef<IdentificationIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const lineOpacity = useSharedValue(1);
    const lineLength = useSharedValue(1);
    const profileOpacity = useSharedValue(1);
    const profileLength = useSharedValue(1);
    const baseOpacity = useSharedValue(1);
    const baseLength = useSharedValue(1);

    const startAnimation = useCallback(() => {
      baseOpacity.value = 0;
      baseLength.value = 0;
      profileOpacity.value = 0;
      profileLength.value = 0;
      lineOpacity.value = 0;
      lineLength.value = 0;

      baseOpacity.value = withTiming(1, { duration: 300 });
      baseLength.value = withTiming(1, { duration: 300 });

      lineOpacity.value = withDelay(200, withTiming(1, { duration: 300 }));
      lineLength.value = withDelay(200, withTiming(1, { duration: 300 }));

      profileOpacity.value = withDelay(100, withTiming(1, { duration: 300 }));
      profileLength.value = withDelay(100, withTiming(1, { duration: 300 }));
    }, [baseOpacity, baseLength, profileOpacity, profileLength, lineOpacity, lineLength]);

    const stopAnimation = useCallback(() => {
      baseOpacity.value = withTiming(1, { duration: 200 });
      baseLength.value = withTiming(1, { duration: 200 });
      profileOpacity.value = withTiming(1, { duration: 200 });
      profileLength.value = withTiming(1, { duration: 200 });
      lineOpacity.value = withTiming(1, { duration: 200 });
      lineLength.value = withTiming(1, { duration: 200 });
    }, [baseOpacity, baseLength, profileOpacity, profileLength, lineOpacity, lineLength]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const lineProps = useAnimatedProps(() => ({
      opacity: lineOpacity.value,
      pathLength: lineLength.value,
    }));

    const profileProps = useAnimatedProps(() => ({
      opacity: profileOpacity.value,
      pathLength: profileLength.value,
    }));

    const baseProps = useAnimatedProps(() => ({
      opacity: baseOpacity.value,
      pathLength: baseLength.value,
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
              d="M4.5 19.5H19.5C20.7426 19.5 21.75 18.4926 21.75 17.25V6.75C21.75 5.50736 20.7426 4.5 19.5 4.5H4.5C3.25736 4.5 2.25 5.50736 2.25 6.75V17.25C2.25 18.4926 3.25736 19.5 4.5 19.5Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <AnimatedPath
              animatedProps={lineProps}
              d="M15 9H18.75"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <AnimatedPath
              animatedProps={lineProps}
              d="M15 12H18.75"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <AnimatedPath
              animatedProps={lineProps}
              d="M15 15H18.75"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <AnimatedPath
              animatedProps={profileProps}
              d="M10.5 9.375C10.5 10.4105 9.66053 11.25 8.625 11.25C7.58947 11.25 6.75 10.4105 6.75 9.375C6.75 8.33947 7.58947 7.5 8.625 7.5C9.66053 7.5 10.5 8.33947 10.5 9.375Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <AnimatedPath
              animatedProps={baseProps}
              d="M11.7939 15.7114C10.8489 16.2147 9.77021 16.5 8.62484 16.5C7.47948 16.5 6.40074 16.2147 5.45581 15.7114C5.92986 14.4207 7.16983 13.5 8.62484 13.5C10.0799 13.5 11.3198 14.4207 11.7939 15.7114Z"
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

IdentificationIcon.displayName = "IdentificationIcon";

export { IdentificationIcon };
