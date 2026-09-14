import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export type CodeBracketIconHandle = IconHandle;

const CodeBracketIcon = forwardRef<CodeBracketIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const opacity = useSharedValue(1);
    const drawLength = useSharedValue(1);
    const drawOffset = useSharedValue(0);

    const startAnimation = useCallback(() => {
      opacity.value = 0;
      drawLength.value = 0;
      drawOffset.value = 1;
      opacity.value = withTiming(1, { duration: 100 });
      drawLength.value = withTiming(1, { duration: 600 });
      drawOffset.value = withTiming(0, { duration: 600 });
    }, [opacity, drawLength, drawOffset]);

    const stopAnimation = useCallback(() => {
      opacity.value = withTiming(1, { duration: 100 });
      drawLength.value = withTiming(1, { duration: 400 });
      drawOffset.value = withTiming(0, { duration: 400 });
    }, [opacity, drawLength, drawOffset]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const drawProps = useAnimatedProps(() => ({
      opacity: opacity.value,
      pathLength: drawLength.value,
      pathOffset: drawOffset.value,
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
            <AnimatedPath
              animatedProps={drawProps}
              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
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

CodeBracketIcon.displayName = "CodeBracketIcon";

export { CodeBracketIcon };
