import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Svg, { G, Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedG = Animated.createAnimatedComponent(G);

export type ArchiveBoxXMarkIconHandle = IconHandle;

const ArchiveBoxXMarkIcon = forwardRef<ArchiveBoxXMarkIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const lidTranslateY = useSharedValue(0);
    const bodyTranslateY = useSharedValue(0);
    const xMark1Opacity = useSharedValue(1);
    const xMark1Length = useSharedValue(1);
    const xMark2Opacity = useSharedValue(1);
    const xMark2Length = useSharedValue(1);

    const startAnimation = useCallback(() => {
      lidTranslateY.value = withSpring(-1.5, {
        damping: 25,
        stiffness: 200,
        mass: 1,
      });
      bodyTranslateY.value = withSpring(1, {
        damping: 25,
        stiffness: 200,
        mass: 1,
      });

      xMark1Opacity.value = 0;
      xMark1Length.value = 0;
      xMark1Opacity.value = withDelay(200, withTiming(1, { duration: 200 }));
      xMark1Length.value = withDelay(200, withTiming(1, { duration: 200 }));

      xMark2Opacity.value = 0;
      xMark2Length.value = 0;
      xMark2Opacity.value = withDelay(400, withTiming(1, { duration: 200 }));
      xMark2Length.value = withDelay(400, withTiming(1, { duration: 200 }));
    }, [lidTranslateY, bodyTranslateY, xMark1Opacity, xMark1Length, xMark2Opacity, xMark2Length]);

    const stopAnimation = useCallback(() => {
      lidTranslateY.value = withSpring(0, {
        damping: 25,
        stiffness: 200,
        mass: 1,
      });
      bodyTranslateY.value = withSpring(0, {
        damping: 25,
        stiffness: 200,
        mass: 1,
      });

      xMark1Opacity.value = withTiming(1, { duration: 150 });
      xMark1Length.value = withTiming(1, { duration: 150 });
      xMark2Opacity.value = withTiming(1, { duration: 150 });
      xMark2Length.value = withTiming(1, { duration: 150 });
    }, [lidTranslateY, bodyTranslateY, xMark1Opacity, xMark1Length, xMark2Opacity, xMark2Length]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const bodyProps = useAnimatedProps(() => ({
      y: bodyTranslateY.value,
    }));

    const lidProps = useAnimatedProps(() => ({
      y: lidTranslateY.value,
    }));

    const xMark1Props = useAnimatedProps(() => ({
      opacity: xMark1Opacity.value,
      pathLength: xMark1Length.value,
    }));

    const xMark2Props = useAnimatedProps(() => ({
      opacity: xMark2Opacity.value,
      pathLength: xMark2Length.value,
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
            <AnimatedG animatedProps={bodyProps}>
              <Path
                d="M19.6246 18.1321C19.5546 19.3214 18.5698 20.25 17.3785 20.25H6.62154C5.43022 20.25 4.44538 19.3214 4.37542 18.1321"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
              <Path
                d="M20.25 7.5L19.6246 18.1321"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
              <Path
                d="M3.75 7.5L4.37542 18.1321"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
              <AnimatedPath
                animatedProps={xMark1Props}
                d="M9.75 11.625L14.25 16.125"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
              <AnimatedPath
                animatedProps={xMark2Props}
                d="M14.25 11.625L9.75 16.125"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={lidProps}>
              <Path
                d="M3.375 7.5H20.625C21.2463 7.5 21.75 6.99632 21.75 6.375V4.875C21.75 4.25368 21.2463 3.75 20.625 3.75H3.375C2.75368 3.75 2.25 4.25368 2.25 4.875V6.375C2.25 6.99632 2.75368 7.5 3.375 7.5Z"
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

ArchiveBoxXMarkIcon.displayName = "ArchiveBoxXMarkIcon";

export { ArchiveBoxXMarkIcon };
