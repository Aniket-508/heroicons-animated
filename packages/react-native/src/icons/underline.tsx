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

export type UnderlineIconHandle = IconHandle;

const UnderlineIcon = forwardRef<UnderlineIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const uOpacity = useSharedValue(1);
    const uLength = useSharedValue(1);
    const uOffset = useSharedValue(0);

    const lineOpacity = useSharedValue(1);
    const lineLength = useSharedValue(1);

    const startAnimation = useCallback(() => {
      uOpacity.value = 0;
      uLength.value = 0;
      uOffset.value = 1;
      lineOpacity.value = 0;
      lineLength.value = 0;

      uOpacity.value = withTiming(1, { duration: 100 });
      uLength.value = withTiming(1, { duration: 300 });
      uOffset.value = withTiming(0, { duration: 300 });

      lineOpacity.value = withDelay(300, withTiming(1, { duration: 100 }));
      lineLength.value = withDelay(300, withTiming(1, { duration: 100 }));
    }, [uOpacity, uLength, uOffset, lineOpacity, lineLength]);

    const stopAnimation = useCallback(() => {
      uOpacity.value = withTiming(1, { duration: 100 });
      uLength.value = withTiming(1, { duration: 200 });
      uOffset.value = withTiming(0, { duration: 200 });
      lineOpacity.value = withTiming(1, { duration: 100 });
      lineLength.value = withTiming(1, { duration: 100 });
    }, [uOpacity, uLength, uOffset, lineOpacity, lineLength]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const uProps = useAnimatedProps(() => ({
      opacity: uOpacity.value,
      pathLength: uLength.value,
      pathOffset: uOffset.value,
    }));

    const lineProps = useAnimatedProps(() => ({
      opacity: lineOpacity.value,
      pathLength: lineLength.value,
    }));

    return (
      <IconWrapper
        controlled={controlled}
        onPress={onPress}
        onPressIn={startAnimation}
        onPressOut={stopAnimation}
      >
        <Svg fill="none" height={size} style={style} viewBox="0 0 24 24" width={size}>
          <AnimatedPath
            animatedProps={uProps}
            d="M17.995 3.744v7.5a6 6 0 1 1-12 0v-7.5"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={lineProps}
            d="M3.745 20.246h16.5"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
        </Svg>
      </IconWrapper>
    );
  }
);

UnderlineIcon.displayName = "UnderlineIcon";

export { UnderlineIcon };
