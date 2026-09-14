import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Svg, { G, Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedG = Animated.createAnimatedComponent(G);

export type ViewfinderCircleIconHandle = IconHandle;

const SPRING_CONFIG = {
  stiffness: 200,
  damping: 20,
};

const ViewfinderCircleIcon = forwardRef<ViewfinderCircleIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const cornerScale = useSharedValue(1);
    const cornerRotate = useSharedValue(0);
    const cornerOpacity = useSharedValue(1);
    const circleScale = useSharedValue(1);
    const circleOpacity = useSharedValue(1);

    const startAnimation = useCallback(() => {
      cornerScale.value = withSequence(
        withSpring(1.2, SPRING_CONFIG),
        withSpring(1, SPRING_CONFIG)
      );
      cornerRotate.value = withSequence(
        withSpring(45, SPRING_CONFIG),
        withSpring(0, SPRING_CONFIG)
      );
      cornerOpacity.value = withSequence(
        withSpring(0, SPRING_CONFIG),
        withSpring(1, SPRING_CONFIG)
      );

      circleScale.value = withDelay(
        100,
        withSequence(withTiming(0.8, { duration: 300 }), withTiming(1, { duration: 300 }))
      );
      circleOpacity.value = withDelay(
        100,
        withSequence(withTiming(0, { duration: 300 }), withTiming(1, { duration: 300 }))
      );
    }, [cornerScale, cornerRotate, cornerOpacity, circleScale, circleOpacity]);

    const stopAnimation = useCallback(() => {
      cornerScale.value = withSpring(1, SPRING_CONFIG);
      cornerRotate.value = withSpring(0, SPRING_CONFIG);
      cornerOpacity.value = withSpring(1, SPRING_CONFIG);

      circleScale.value = withDelay(100, withTiming(1, { duration: 300 }));
      circleOpacity.value = withDelay(100, withTiming(1, { duration: 300 }));
    }, [cornerScale, cornerRotate, cornerOpacity, circleScale, circleOpacity]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const cornerTopLeftProps = useAnimatedProps(() => ({
      scale: cornerScale.value,
      rotation: cornerRotate.value,
      rotate: cornerRotate.value,
      opacity: cornerOpacity.value,
      originX: 5.625,
      originY: 5.625,
    }));

    const cornerTopRightProps = useAnimatedProps(() => ({
      scale: cornerScale.value,
      rotation: cornerRotate.value,
      rotate: cornerRotate.value,
      opacity: cornerOpacity.value,
      originX: 18.375,
      originY: 5.625,
    }));

    const cornerBottomRightProps = useAnimatedProps(() => ({
      scale: cornerScale.value,
      rotation: cornerRotate.value,
      rotate: cornerRotate.value,
      opacity: cornerOpacity.value,
      originX: 18.375,
      originY: 18.375,
    }));

    const cornerBottomLeftProps = useAnimatedProps(() => ({
      scale: cornerScale.value,
      rotation: cornerRotate.value,
      rotate: cornerRotate.value,
      opacity: cornerOpacity.value,
      originX: 5.625,
      originY: 18.375,
    }));

    const circleProps = useAnimatedProps(() => ({
      scale: circleScale.value,
      opacity: circleOpacity.value,
      originX: 12,
      originY: 12,
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
            <AnimatedG animatedProps={cornerTopLeftProps}>
              <Path
                d="M7.5 3.75H6C4.75736 3.75 3.75 4.75736 3.75 6V7.5"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={cornerTopRightProps}>
              <Path
                d="M16.5 3.75H18C19.2426 3.75 20.25 4.75736 20.25 6V7.5"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={cornerBottomRightProps}>
              <Path
                d="M20.25 16.5V18C20.25 19.2426 19.2426 20.25 18 20.25H16.5"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={cornerBottomLeftProps}>
              <Path
                d="M7.5 20.25H6C4.75736 20.25 3.75 19.2426 3.75 18V16.5"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={circleProps}>
              <Path
                d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
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

ViewfinderCircleIcon.displayName = "ViewfinderCircleIcon";

export { ViewfinderCircleIcon };
