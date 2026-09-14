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

export type CodeBracketSquareIconHandle = IconHandle;

const CodeBracketSquareIcon = forwardRef<CodeBracketSquareIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const rightRotate = useSharedValue(0);
    const rightX = useSharedValue(0);
    const leftRotate = useSharedValue(0);
    const leftX = useSharedValue(0);

    const startAnimation = useCallback(() => {
      leftX.value = withSequence(
        withTiming(-1.5, { duration: 250 }),
        withTiming(0, { duration: 250 })
      );
      leftRotate.value = withSequence(
        withTiming(6, { duration: 250 }),
        withTiming(0, { duration: 250 })
      );
      rightX.value = withSequence(
        withTiming(1.5, { duration: 250 }),
        withTiming(0, { duration: 250 })
      );
      rightRotate.value = withSequence(
        withTiming(-6, { duration: 250 }),
        withTiming(0, { duration: 250 })
      );
    }, [leftX, leftRotate, rightX, rightRotate]);

    const stopAnimation = useCallback(() => {
      leftX.value = withTiming(0, { duration: 200 });
      leftRotate.value = withTiming(0, { duration: 200 });
      rightX.value = withTiming(0, { duration: 200 });
      rightRotate.value = withTiming(0, { duration: 200 });
    }, [leftX, leftRotate, rightX, rightRotate]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const rightProps = useAnimatedProps(() => ({
      rotation: rightRotate.value,
      rotate: rightRotate.value,
      x: rightX.value,
    }));

    const leftProps = useAnimatedProps(() => ({
      rotation: leftRotate.value,
      rotate: leftRotate.value,
      x: leftX.value,
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
              d="M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <AnimatedG animatedProps={rightProps}>
              <Path
                d="M14.25 9.75 16.5 12l-2.25 2.25"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={leftProps}>
              <Path
                d="M9.75 9.75L7.5 12l2.25 2.25"
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

CodeBracketSquareIcon.displayName = "CodeBracketSquareIcon";

export { CodeBracketSquareIcon };
