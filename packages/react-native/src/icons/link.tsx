import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export type LinkIconHandle = IconHandle;

const LinkIcon = forwardRef<LinkIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const rotate = useSharedValue(0);
    const drawLength = useSharedValue(1);
    const drawOffset = useSharedValue(0);

    const startAnimation = useCallback(() => {
      rotate.value = withSequence(
        withTiming(0, { duration: 167 }),
        withTiming(-5, { duration: 167 }),
        withTiming(0, { duration: 167 })
      );
      drawLength.value = withSequence(
        withTiming(1, { duration: 200 }),
        withTiming(0.97, { duration: 200 }),
        withTiming(1, { duration: 200 }),
        withTiming(0.97, { duration: 200 }),
        withTiming(1, { duration: 200 })
      );
      drawOffset.value = withSequence(
        withTiming(0, { duration: 200 }),
        withTiming(0.05, { duration: 200 }),
        withTiming(0, { duration: 200 }),
        withTiming(0.05, { duration: 200 }),
        withTiming(0, { duration: 200 })
      );
    }, [rotate, drawLength, drawOffset]);

    const stopAnimation = useCallback(() => {
      rotate.value = withTiming(0, { duration: 200 });
      drawLength.value = withTiming(1, { duration: 200 });
      drawOffset.value = withTiming(0, { duration: 200 });
    }, [rotate, drawLength, drawOffset]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const drawProps = useAnimatedProps(() => ({
      opacity: 1,
      pathLength: drawLength.value,
      pathOffset: drawOffset.value,
      rotation: rotate.value,
      rotate: rotate.value,
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
        <Svg fill="none" height={size} style={style} viewBox="0 0 24 24" width={size}>
          <AnimatedPath
            animatedProps={drawProps}
            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
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

LinkIcon.displayName = "LinkIcon";

export { LinkIcon };
