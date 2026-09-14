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

export type QrCodeIconHandle = IconHandle;

const QrCodeIcon = forwardRef<QrCodeIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const s0Scale = useSharedValue(1);
    const s0Opacity = useSharedValue(1);
    const ns0Scale = useSharedValue(1);
    const ns0Opacity = useSharedValue(1);
    const ns1Scale = useSharedValue(1);
    const ns1Opacity = useSharedValue(1);
    const ns2Scale = useSharedValue(1);
    const ns2Opacity = useSharedValue(1);
    const ns3Scale = useSharedValue(1);
    const ns3Opacity = useSharedValue(1);
    const ns4Scale = useSharedValue(1);
    const ns4Opacity = useSharedValue(1);
    const ns5Scale = useSharedValue(1);
    const ns5Opacity = useSharedValue(1);
    const ns6Scale = useSharedValue(1);
    const ns6Opacity = useSharedValue(1);

    const startAnimation = useCallback(() => {
      s0Scale.value = withSequence(
        withTiming(0, { duration: 100 }),
        withTiming(1.2, { duration: 100 }),
        withTiming(1, { duration: 100 })
      );
      s0Opacity.value = withSequence(
        withTiming(0, { duration: 150 }),
        withTiming(1, { duration: 150 })
      );
      ns0Scale.value = withSequence(
        withTiming(0, { duration: 100 }),
        withTiming(1.2, { duration: 100 }),
        withTiming(1, { duration: 100 })
      );
      ns0Opacity.value = withSequence(
        withTiming(0, { duration: 150 }),
        withTiming(1, { duration: 150 })
      );
      ns1Scale.value = withSequence(
        withTiming(0, { duration: 100 }),
        withTiming(1.2, { duration: 100 }),
        withTiming(1, { duration: 100 })
      );
      ns1Opacity.value = withSequence(
        withTiming(0, { duration: 150 }),
        withTiming(1, { duration: 150 })
      );
      ns2Scale.value = withSequence(
        withTiming(0, { duration: 100 }),
        withTiming(1.2, { duration: 100 }),
        withTiming(1, { duration: 100 })
      );
      ns2Opacity.value = withSequence(
        withTiming(0, { duration: 150 }),
        withTiming(1, { duration: 150 })
      );
      ns3Scale.value = withSequence(
        withTiming(0, { duration: 100 }),
        withTiming(1.2, { duration: 100 }),
        withTiming(1, { duration: 100 })
      );
      ns3Opacity.value = withSequence(
        withTiming(0, { duration: 150 }),
        withTiming(1, { duration: 150 })
      );
      ns4Scale.value = withSequence(
        withTiming(0, { duration: 100 }),
        withTiming(1.2, { duration: 100 }),
        withTiming(1, { duration: 100 })
      );
      ns4Opacity.value = withSequence(
        withTiming(0, { duration: 150 }),
        withTiming(1, { duration: 150 })
      );
      ns5Scale.value = withSequence(
        withTiming(0, { duration: 100 }),
        withTiming(1.2, { duration: 100 }),
        withTiming(1, { duration: 100 })
      );
      ns5Opacity.value = withSequence(
        withTiming(0, { duration: 150 }),
        withTiming(1, { duration: 150 })
      );
      ns6Scale.value = withSequence(
        withTiming(0, { duration: 100 }),
        withTiming(1.2, { duration: 100 }),
        withTiming(1, { duration: 100 })
      );
      ns6Opacity.value = withSequence(
        withTiming(0, { duration: 150 }),
        withTiming(1, { duration: 150 })
      );
    }, [
      s0Scale,
      s0Opacity,
      ns0Scale,
      ns0Opacity,
      ns1Scale,
      ns1Opacity,
      ns2Scale,
      ns2Opacity,
      ns3Scale,
      ns3Opacity,
      ns4Scale,
      ns4Opacity,
      ns5Scale,
      ns5Opacity,
      ns6Scale,
      ns6Opacity,
    ]);

    const stopAnimation = useCallback(() => {
      s0Scale.value = withTiming(1, { duration: 200 });
      s0Opacity.value = withTiming(1, { duration: 200 });
      ns0Scale.value = withTiming(1, { duration: 200 });
      ns0Opacity.value = withTiming(1, { duration: 200 });
      ns1Scale.value = withTiming(1, { duration: 200 });
      ns1Opacity.value = withTiming(1, { duration: 200 });
      ns2Scale.value = withTiming(1, { duration: 200 });
      ns2Opacity.value = withTiming(1, { duration: 200 });
      ns3Scale.value = withTiming(1, { duration: 200 });
      ns3Opacity.value = withTiming(1, { duration: 200 });
      ns4Scale.value = withTiming(1, { duration: 200 });
      ns4Opacity.value = withTiming(1, { duration: 200 });
      ns5Scale.value = withTiming(1, { duration: 200 });
      ns5Opacity.value = withTiming(1, { duration: 200 });
      ns6Scale.value = withTiming(1, { duration: 200 });
      ns6Opacity.value = withTiming(1, { duration: 200 });
    }, [
      s0Scale,
      s0Opacity,
      ns0Scale,
      ns0Opacity,
      ns1Scale,
      ns1Opacity,
      ns2Scale,
      ns2Opacity,
      ns3Scale,
      ns3Opacity,
      ns4Scale,
      ns4Opacity,
      ns5Scale,
      ns5Opacity,
      ns6Scale,
      ns6Opacity,
    ]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const s0Props = useAnimatedProps(() => ({
      scale: s0Scale.value,
      opacity: s0Opacity.value,
    }));

    const ns0Props = useAnimatedProps(() => ({
      scale: ns0Scale.value,
      opacity: ns0Opacity.value,
    }));

    const ns1Props = useAnimatedProps(() => ({
      scale: ns1Scale.value,
      opacity: ns1Opacity.value,
    }));

    const ns2Props = useAnimatedProps(() => ({
      scale: ns2Scale.value,
      opacity: ns2Opacity.value,
    }));

    const ns3Props = useAnimatedProps(() => ({
      scale: ns3Scale.value,
      opacity: ns3Opacity.value,
    }));

    const ns4Props = useAnimatedProps(() => ({
      scale: ns4Scale.value,
      opacity: ns4Opacity.value,
    }));

    const ns5Props = useAnimatedProps(() => ({
      scale: ns5Scale.value,
      opacity: ns5Opacity.value,
    }));

    const ns6Props = useAnimatedProps(() => ({
      scale: ns6Scale.value,
      opacity: ns6Opacity.value,
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
              d="M3.75 4.875C3.75 4.25368 4.25368 3.75 4.875 3.75H9.375C9.99632 3.75 10.5 4.25368 10.5 4.875V9.375C10.5 9.99632 9.99632 10.5 9.375 10.5H4.875C4.25368 10.5 3.75 9.99632 3.75 9.375V4.875Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M3.75 14.625C3.75 14.0037 4.25368 13.5 4.875 13.5H9.375C9.99632 13.5 10.5 14.0037 10.5 14.625V19.125C10.5 19.7463 9.99632 20.25 9.375 20.25H4.875C4.25368 20.25 3.75 19.7463 3.75 19.125V14.625Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M13.5 4.875C13.5 4.25368 14.0037 3.75 14.625 3.75H19.125C19.7463 3.75 20.25 4.25368 20.25 4.875V9.375C20.25 9.99632 19.7463 10.5 19.125 10.5H14.625C14.0037 10.5 13.5 9.99632 13.5 9.375V4.875Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <AnimatedG animatedProps={s0Props}>
              <Path
                d="M6.75 6.75H7.5V7.5H6.75V6.75Z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={ns0Props}>
              <Path
                d="M6.75 16.5H7.5V17.25H6.75V16.5Z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={ns1Props}>
              <Path
                d="M16.5 6.75H17.25V7.5H16.5V6.75Z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={ns2Props}>
              <Path
                d="M13.5 13.5H14.25V14.25H13.5V13.5Z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={ns3Props}>
              <Path
                d="M13.5 19.5H14.25V20.25H13.5V19.5Z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={ns4Props}>
              <Path
                d="M19.5 13.5H20.25V14.25H19.5V13.5Z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={ns5Props}>
              <Path
                d="M19.5 19.5H20.25V20.25H19.5V19.5Z"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={ns6Props}>
              <Path
                d="M16.5 16.5H17.25V17.25H16.5V16.5Z"
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

QrCodeIcon.displayName = "QrCodeIcon";

export { QrCodeIcon };
