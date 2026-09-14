import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, { G, Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedG = Animated.createAnimatedComponent(G);

export type ClipboardIconHandle = IconHandle;

const ClipboardIcon = forwardRef<ClipboardIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const p0ScaleY = useSharedValue(1);
    const p0TranslateY = useSharedValue(0);
    const p1TranslateY = useSharedValue(0);

    const startAnimation = useCallback(() => {
      p0ScaleY.value = withSequence(
        withTiming(1, { duration: 100 }),
        withTiming(0.8, { duration: 100 }),
        withTiming(1, { duration: 100 })
      );
      p0TranslateY.value = withSequence(
        withTiming(0, { duration: 100 }),
        withTiming(0.5, { duration: 100 }),
        withTiming(0, { duration: 100 })
      );
      p1TranslateY.value = withSequence(
        withTiming(0, { duration: 100 }),
        withTiming(-0.5, { duration: 100 }),
        withTiming(0, { duration: 100 })
      );
    }, [p0ScaleY, p0TranslateY, p1TranslateY]);

    const stopAnimation = useCallback(() => {
      p0ScaleY.value = withTiming(1, { duration: 200 });
      p0TranslateY.value = withTiming(0, { duration: 200 });
      p1TranslateY.value = withTiming(0, { duration: 200 });
    }, [p0ScaleY, p0TranslateY, p1TranslateY]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const p0Props = useAnimatedProps(() => ({
      scaleY: p0ScaleY.value,
      y: p0TranslateY.value,
    }));

    const p1Props = useAnimatedProps(() => ({
      y: p1TranslateY.value,
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
            <AnimatedG animatedProps={p0Props}>
              <Path
                d="M15.6657 3.88789C15.3991 2.94272 14.5305 2.25 13.5 2.25H10.5C9.46954 2.25 8.60087 2.94272 8.33426 3.88789M15.6657 3.88789C15.7206 4.0825 15.75 4.28782 15.75 4.5V4.5C15.75 4.91421 15.4142 5.25 15 5.25H9C8.58579 5.25 8.25 4.91421 8.25 4.5V4.5C8.25 4.28782 8.27937 4.0825 8.33426 3.88789"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={p1Props}>
              <Path
                d="M15.6657 3.88789C16.3119 3.93668 16.9545 3.99828 17.5933 4.07241C18.6939 4.20014 19.5 5.149 19.5 6.25699V19.5C19.5 20.7426 18.4926 21.75 17.25 21.75H6.75C5.50736 21.75 4.5 20.7426 4.5 19.5V6.25699C4.5 5.149 5.30608 4.20014 6.40668 4.07241C7.04547 3.99828 7.68808 3.93668 8.33426 3.88789"
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

ClipboardIcon.displayName = "ClipboardIcon";

export { ClipboardIcon };
