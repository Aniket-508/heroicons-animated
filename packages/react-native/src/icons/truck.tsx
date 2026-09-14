import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, { Line, Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedLine = Animated.createAnimatedComponent(Line);

export type TruckIconHandle = IconHandle;

const TruckIcon = forwardRef<TruckIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const translateY = useSharedValue(0);

    const speedX0 = useSharedValue(0);
    const speedOpacity0 = useSharedValue(0);
    const speedScaleX0 = useSharedValue(0);

    const speedX1 = useSharedValue(0);
    const speedOpacity1 = useSharedValue(0);
    const speedScaleX1 = useSharedValue(0);

    const speedX2 = useSharedValue(0);
    const speedOpacity2 = useSharedValue(0);
    const speedScaleX2 = useSharedValue(0);

    const startAnimation = useCallback(() => {
      translateY.value = withRepeat(
        withSequence(
          withTiming(-1, { duration: 100 }),
          withTiming(0, { duration: 100 }),
          withTiming(-0.5, { duration: 100 }),
          withTiming(0, { duration: 100 })
        ),
        -1
      );

      speedX0.value = withDelay(
        0,
        withRepeat(
          withSequence(
            withTiming(-4, { duration: 100 }),
            withTiming(-10, { duration: 200 }),
            withTiming(-16, { duration: 200 })
          ),
          -1
        )
      );
      speedOpacity0.value = withDelay(
        0,
        withRepeat(
          withSequence(
            withTiming(0.7, { duration: 100 }),
            withTiming(0.5, { duration: 200 }),
            withTiming(0, { duration: 200 })
          ),
          -1
        )
      );
      speedScaleX0.value = withDelay(
        0,
        withRepeat(
          withSequence(
            withTiming(1, { duration: 100 }),
            withTiming(0.8, { duration: 200 }),
            withTiming(0.3, { duration: 200 })
          ),
          -1
        )
      );

      speedX1.value = withDelay(
        80,
        withRepeat(
          withSequence(
            withTiming(-4, { duration: 100 }),
            withTiming(-10, { duration: 200 }),
            withTiming(-16, { duration: 200 })
          ),
          -1
        )
      );
      speedOpacity1.value = withDelay(
        80,
        withRepeat(
          withSequence(
            withTiming(0.7, { duration: 100 }),
            withTiming(0.5, { duration: 200 }),
            withTiming(0, { duration: 200 })
          ),
          -1
        )
      );
      speedScaleX1.value = withDelay(
        80,
        withRepeat(
          withSequence(
            withTiming(1, { duration: 100 }),
            withTiming(0.8, { duration: 200 }),
            withTiming(0.3, { duration: 200 })
          ),
          -1
        )
      );

      speedX2.value = withDelay(
        160,
        withRepeat(
          withSequence(
            withTiming(-4, { duration: 100 }),
            withTiming(-10, { duration: 200 }),
            withTiming(-16, { duration: 200 })
          ),
          -1
        )
      );
      speedOpacity2.value = withDelay(
        160,
        withRepeat(
          withSequence(
            withTiming(0.7, { duration: 100 }),
            withTiming(0.5, { duration: 200 }),
            withTiming(0, { duration: 200 })
          ),
          -1
        )
      );
      speedScaleX2.value = withDelay(
        160,
        withRepeat(
          withSequence(
            withTiming(1, { duration: 100 }),
            withTiming(0.8, { duration: 200 }),
            withTiming(0.3, { duration: 200 })
          ),
          -1
        )
      );
    }, [
      translateY,
      speedX0,
      speedOpacity0,
      speedScaleX0,
      speedX1,
      speedOpacity1,
      speedScaleX1,
      speedX2,
      speedOpacity2,
      speedScaleX2,
    ]);

    const stopAnimation = useCallback(() => {
      translateY.value = withTiming(0, { duration: 200 });

      speedX0.value = withTiming(0, { duration: 200 });
      speedOpacity0.value = withTiming(0, { duration: 200 });
      speedScaleX0.value = withTiming(0, { duration: 200 });

      speedX1.value = withTiming(0, { duration: 200 });
      speedOpacity1.value = withTiming(0, { duration: 200 });
      speedScaleX1.value = withTiming(0, { duration: 200 });

      speedX2.value = withTiming(0, { duration: 200 });
      speedOpacity2.value = withTiming(0, { duration: 200 });
      speedScaleX2.value = withTiming(0, { duration: 200 });
    }, [
      translateY,
      speedX0,
      speedOpacity0,
      speedScaleX0,
      speedX1,
      speedOpacity1,
      speedScaleX1,
      speedX2,
      speedOpacity2,
      speedScaleX2,
    ]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateY: translateY.value }],
    }));

    const speedProps0 = useAnimatedProps(() => ({
      x: speedX0.value,
      opacity: speedOpacity0.value,
      scaleX: speedScaleX0.value,
    }));

    const speedProps1 = useAnimatedProps(() => ({
      x: speedX1.value,
      opacity: speedOpacity1.value,
      scaleX: speedScaleX1.value,
    }));

    const speedProps2 = useAnimatedProps(() => ({
      x: speedX2.value,
      opacity: speedOpacity2.value,
      scaleX: speedScaleX2.value,
    }));

    return (
      <IconWrapper
        controlled={controlled}
        onPress={onPress}
        onPressIn={startAnimation}
        onPressOut={stopAnimation}
      >
        <Animated.View style={[animatedStyle, style]}>
          <Svg fill="none" height={size} viewBox="0 0 24 24" width={size}>
            <AnimatedLine
              animatedProps={speedProps0}
              stroke={color}
              strokeLinecap="round"
              strokeWidth={strokeWidth}
              x1="0"
              x2="5"
              y1="8"
              y2="8"
            />
            <AnimatedLine
              animatedProps={speedProps1}
              stroke={color}
              strokeLinecap="round"
              strokeWidth={strokeWidth}
              x1="-1"
              x2="6"
              y1="11"
              y2="11"
            />
            <AnimatedLine
              animatedProps={speedProps2}
              stroke={color}
              strokeLinecap="round"
              strokeWidth={strokeWidth}
              x1="0"
              x2="4"
              y1="14"
              y2="14"
            />
            <Path
              d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
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

TruckIcon.displayName = "TruckIcon";

export { TruckIcon };
