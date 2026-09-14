import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, { useAnimatedProps, useSharedValue, withSpring } from "react-native-reanimated";
import Svg, { G, Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedG = Animated.createAnimatedComponent(G);

export type ArchiveBoxArrowDownIconHandle = IconHandle;

const ArchiveBoxArrowDownIcon = forwardRef<ArchiveBoxArrowDownIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const p0TranslateY = useSharedValue(0);
    const p1TranslateY = useSharedValue(0);
    const p2TranslateY = useSharedValue(0);
    const p3TranslateY = useSharedValue(0);
    const p4TranslateY = useSharedValue(0);
    const p5TranslateY = useSharedValue(0);
    const p6TranslateY = useSharedValue(0);

    const startAnimation = useCallback(() => {
      p0TranslateY.value = withSpring(1, { stiffness: 200, damping: 25 });
      p1TranslateY.value = withSpring(1, { stiffness: 200, damping: 25 });
      p2TranslateY.value = withSpring(1, { stiffness: 200, damping: 25 });
      p3TranslateY.value = withSpring(2, { stiffness: 200, damping: 25 });
      p4TranslateY.value = withSpring(2, { stiffness: 200, damping: 25 });
      p5TranslateY.value = withSpring(2, { stiffness: 200, damping: 25 });
      p6TranslateY.value = withSpring(-1.5, { stiffness: 200, damping: 25 });
    }, [
      p0TranslateY,
      p1TranslateY,
      p2TranslateY,
      p3TranslateY,
      p4TranslateY,
      p5TranslateY,
      p6TranslateY,
    ]);

    const stopAnimation = useCallback(() => {
      p0TranslateY.value = withSpring(0);
      p1TranslateY.value = withSpring(0);
      p2TranslateY.value = withSpring(0);
      p3TranslateY.value = withSpring(0);
      p4TranslateY.value = withSpring(0);
      p5TranslateY.value = withSpring(0);
      p6TranslateY.value = withSpring(0);
    }, [
      p0TranslateY,
      p1TranslateY,
      p2TranslateY,
      p3TranslateY,
      p4TranslateY,
      p5TranslateY,
      p6TranslateY,
    ]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const p0Props = useAnimatedProps(() => ({
      y: p0TranslateY.value,
    }));

    const p1Props = useAnimatedProps(() => ({
      y: p1TranslateY.value,
    }));

    const p2Props = useAnimatedProps(() => ({
      y: p2TranslateY.value,
    }));

    const p3Props = useAnimatedProps(() => ({
      y: p3TranslateY.value,
    }));

    const p4Props = useAnimatedProps(() => ({
      y: p4TranslateY.value,
    }));

    const p5Props = useAnimatedProps(() => ({
      y: p5TranslateY.value,
    }));

    const p6Props = useAnimatedProps(() => ({
      y: p6TranslateY.value,
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
                d="M19.6246 18.1321C19.5546 19.3214 18.5698 20.25 17.3785 20.25H6.62154C5.43022 20.25 4.44538 19.3214 4.37542 18.1321"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={p1Props}>
              <Path
                d="M20.25 7.5L19.6246 18.1321"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={p2Props}>
              <Path
                d="M3.75 7.5L4.37542 18.1321"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={p3Props}>
              <Path
                d="M12 10.5V17.25"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={p4Props}>
              <Path
                d="M12 17.25L9 14.25"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={p5Props}>
              <Path
                d="M12 17.25L15 14.25"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
              />
            </AnimatedG>
            <AnimatedG animatedProps={p6Props}>
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

ArchiveBoxArrowDownIcon.displayName = "ArchiveBoxArrowDownIcon";

export { ArchiveBoxArrowDownIcon };
