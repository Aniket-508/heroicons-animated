import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, { G, Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedG = Animated.createAnimatedComponent(G);

export type WalletIconHandle = IconHandle;

const WalletIcon = forwardRef<WalletIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const s0TranslateY = useSharedValue(0);
    const s0Opacity = useSharedValue(1);
    const s1TranslateY = useSharedValue(0);
    const s1Opacity = useSharedValue(1);

    const startAnimation = useCallback(() => {
      s0TranslateY.value = withSequence(
        withTiming(2, { duration: 200 }),
        withTiming(0, { duration: 200 })
      );
      s0Opacity.value = withSequence(
        withTiming(0, { duration: 200 }),
        withTiming(1, { duration: 200 })
      );
      s1TranslateY.value = withDelay(
        150,
        withSequence(withTiming(2, { duration: 200 }), withTiming(0, { duration: 200 }))
      );
      s1Opacity.value = withDelay(
        150,
        withSequence(withTiming(0, { duration: 200 }), withTiming(1, { duration: 200 }))
      );
    }, [s0TranslateY, s0Opacity, s1TranslateY, s1Opacity]);

    const stopAnimation = useCallback(() => {
      s0TranslateY.value = withTiming(0, { duration: 200 });
      s0Opacity.value = withTiming(1, { duration: 200 });
      s1TranslateY.value = withTiming(0, { duration: 200 });
      s1Opacity.value = withTiming(1, { duration: 200 });
    }, [s0TranslateY, s0Opacity, s1TranslateY, s1Opacity]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const s0Props = useAnimatedProps(() => ({
      y: s0TranslateY.value,
      opacity: s0Opacity.value,
    }));

    const s1Props = useAnimatedProps(() => ({
      y: s1TranslateY.value,
      opacity: s1Opacity.value,
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
              d="M21 12V18C21 19.2426 19.9926 20.25 18.75 20.25H5.25C4.00736 20.25 3 19.2426 3 18V12M21 12V9M3 12V9M21 12C21 10.7574 19.9926 9.75 18.75 9.75H15C15 11.4069 13.6569 12.75 12 12.75C10.3431 12.75 9 11.4069 9 9.75H5.25C4.00736 9.75 3 10.7574 3 12"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <AnimatedG animatedProps={s0Props}>
              <Path
                d="M21 9C21 7.75736 19.9926 6.75 18.75 6.75H5.25C4.00736 6.75 3 7.75736 3 9M21 9V6M3 9V6"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={s1Props}>
              <Path
                d="M21 9V6C21 4.75736 19.9926 3.75 18.75 3.75H5.25C4.00736 3.75 3 4.75736 3 6V9"
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

WalletIcon.displayName = "WalletIcon";

export { WalletIcon };
