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

export type DivideIconHandle = IconHandle;

const DivideIcon = forwardRef<DivideIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const lineScaleX = useSharedValue(1);
    const g0TranslateY = useSharedValue(0);
    const g1TranslateY = useSharedValue(0);

    const startAnimation = useCallback(() => {
      lineScaleX.value = withSequence(
        withTiming(1, { duration: 133 }),
        withTiming(1.1, { duration: 133 }),
        withTiming(1, { duration: 133 })
      );
      g0TranslateY.value = withSequence(
        withTiming(0, { duration: 133 }),
        withTiming(-2, { duration: 133 }),
        withTiming(0, { duration: 133 })
      );
      g1TranslateY.value = withSequence(
        withTiming(0, { duration: 133 }),
        withTiming(2, { duration: 133 }),
        withTiming(0, { duration: 133 })
      );
    }, [lineScaleX, g0TranslateY, g1TranslateY]);

    const stopAnimation = useCallback(() => {
      lineScaleX.value = withTiming(1, { duration: 200 });
      g0TranslateY.value = withTiming(0, { duration: 200 });
      g1TranslateY.value = withTiming(0, { duration: 200 });
    }, [lineScaleX, g0TranslateY, g1TranslateY]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const lineProps = useAnimatedProps(() => ({
      scaleX: lineScaleX.value,
      originX: 12,
      originY: 12,
    }));

    const g0Props = useAnimatedProps(() => ({
      y: g0TranslateY.value,
    }));

    const g1Props = useAnimatedProps(() => ({
      y: g1TranslateY.value,
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
            <AnimatedG animatedProps={lineProps}>
              <Path
                d="M4.49902 11.9983H19.4987"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={g0Props}>
              <Path
                d="M11.9992 5.24808H12.0067V5.25558H11.9992V5.24808Z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
              <Path
                d="M12.3742 5.24808C12.3742 5.45521 12.2063 5.62312 11.9992 5.62312C11.7921 5.62312 11.6242 5.45521 11.6242 5.24808C11.6242 5.04096 11.7921 4.87305 11.9992 4.87305C12.2063 4.87305 12.3742 5.04096 12.3742 5.24808Z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={g1Props}>
              <Path
                d="M11.9998 18.7509H12.0073V18.7584H11.9998V18.7509Z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
              <Path
                d="M12.3748 18.7509C12.3748 18.9581 12.2069 19.126 11.9998 19.126C11.7927 19.126 11.6248 18.9581 11.6248 18.7509C11.6248 18.5438 11.7927 18.3759 11.9998 18.3759C12.2069 18.3759 12.3748 18.5438 12.3748 18.7509Z"
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

DivideIcon.displayName = "DivideIcon";

export { DivideIcon };
