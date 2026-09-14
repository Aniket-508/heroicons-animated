import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle, Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export type ShareIconHandle = IconHandle;

const ShareIcon = forwardRef<ShareIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const lineOpacity = useSharedValue(1);
    const lineLength = useSharedValue(1);
    const node0Scale = useSharedValue(1);
    const node1Scale = useSharedValue(1);
    const node2Scale = useSharedValue(1);

    const startAnimation = useCallback(() => {
      lineOpacity.value = 0;
      lineLength.value = 0;

      lineOpacity.value = withTiming(1, { duration: 400 });
      lineLength.value = withTiming(1, { duration: 400 });

      node0Scale.value = withDelay(
        0,
        withSequence(withTiming(1.3, { duration: 150 }), withTiming(1, { duration: 150 }))
      );
      node1Scale.value = withDelay(
        150,
        withSequence(withTiming(1.3, { duration: 150 }), withTiming(1, { duration: 150 }))
      );
      node2Scale.value = withDelay(
        300,
        withSequence(withTiming(1.3, { duration: 150 }), withTiming(1, { duration: 150 }))
      );
    }, [lineOpacity, lineLength, node0Scale, node1Scale, node2Scale]);

    const stopAnimation = useCallback(() => {
      lineOpacity.value = withTiming(1, { duration: 200 });
      lineLength.value = withTiming(1, { duration: 200 });
      node0Scale.value = withTiming(1, { duration: 200 });
      node1Scale.value = withTiming(1, { duration: 200 });
      node2Scale.value = withTiming(1, { duration: 200 });
    }, [lineOpacity, lineLength, node0Scale, node1Scale, node2Scale]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const lineProps = useAnimatedProps(() => ({
      opacity: lineOpacity.value,
      pathLength: lineLength.value,
    }));

    const node0Props = useAnimatedProps(() => ({
      scale: node0Scale.value,
      originX: 5.25,
      originY: 12,
    }));

    const node1Props = useAnimatedProps(() => ({
      scale: node1Scale.value,
      originX: 18.75,
      originY: 4.5,
    }));

    const node2Props = useAnimatedProps(() => ({
      scale: node2Scale.value,
      originX: 18.75,
      originY: 19.5,
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
            animatedProps={lineProps}
            d="M7.21721 10.9071C7.39737 11.2307 7.5 11.6034 7.5 12C7.5 12.3966 7.39737 12.7693 7.21721 13.0929M7.21721 10.9071L16.7828 5.5929M7.21721 13.0929L16.7828 18.4071"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedCircle
            animatedProps={node0Props}
            cx="5.25"
            cy="12"
            r="2.25"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedCircle
            animatedProps={node1Props}
            cx="18.75"
            cy="4.5"
            r="2.25"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedCircle
            animatedProps={node2Props}
            cx="18.75"
            cy="19.5"
            r="2.25"
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

ShareIcon.displayName = "ShareIcon";

export { ShareIcon };
