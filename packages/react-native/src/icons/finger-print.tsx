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

export type FingerPrintIconHandle = IconHandle;

const FingerPrintIcon = forwardRef<FingerPrintIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const drawOpacity = useSharedValue(1);
    const drawLength = useSharedValue(1);

    const startAnimation = useCallback(() => {
      drawOpacity.value = 0;
      drawLength.value = 0.1;

      drawOpacity.value = withSequence(
        withTiming(0, { duration: 125 }),
        withTiming(1, { duration: 125 }),
        withTiming(1, { duration: 250 })
      );
      drawLength.value = withSequence(
        withTiming(0.3, { duration: 400 }),
        withTiming(0.5, { duration: 400 }),
        withTiming(0.7, { duration: 400 }),
        withTiming(0.9, { duration: 400 }),
        withTiming(1, { duration: 400 })
      );
    }, [drawOpacity, drawLength]);

    const stopAnimation = useCallback(() => {
      drawOpacity.value = withTiming(1, { duration: 200 });
      drawLength.value = withTiming(1, { duration: 200 });
    }, [drawOpacity, drawLength]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const drawProps = useAnimatedProps(() => ({
      opacity: drawOpacity.value,
      pathLength: drawLength.value,
    }));

    return (
      <IconWrapper
        controlled={controlled}
        onPress={onPress}
        onPressIn={startAnimation}
        onPressOut={stopAnimation}
      >
        <Svg fill="none" height={size} style={style} viewBox="0 0 24 24" width={size}>
          <Path
            d="M7.86391 4.24259C9.04956 3.45731 10.4714 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5C19.5 13.4194 18.9443 16.2089 17.9324 18.7685"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.4}
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={drawProps}
            d="M7.86391 4.24259C9.04956 3.45731 10.4714 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5C19.5 13.4194 18.9443 16.2089 17.9324 18.7685"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <Path
            d="M5.7426 6.36391C4.95732 7.54956 4.5 8.97138 4.5 10.5C4.5 11.9677 4.07875 13.3369 3.3501 14.4931"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.4}
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={drawProps}
            d="M5.7426 6.36391C4.95732 7.54956 4.5 8.97138 4.5 10.5C4.5 11.9677 4.07875 13.3369 3.3501 14.4931"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <Path
            d="M5.33889 18.052C7.14811 16.0555 8.25 13.4065 8.25 10.5C8.25 8.42893 9.92893 6.75 12 6.75C14.0711 6.75 15.75 8.42893 15.75 10.5C15.75 11.0269 15.7286 11.5487 15.686 12.0646"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.4}
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={drawProps}
            d="M5.33889 18.052C7.14811 16.0555 8.25 13.4065 8.25 10.5C8.25 8.42893 9.92893 6.75 12 6.75C14.0711 6.75 15.75 8.42893 15.75 10.5C15.75 11.0269 15.7286 11.5487 15.686 12.0646"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <Path
            d="M12.0003 10.5C12.0003 14.2226 10.6443 17.6285 8.39916 20.2506"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.4}
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={drawProps}
            d="M12.0003 10.5C12.0003 14.2226 10.6443 17.6285 8.39916 20.2506"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <Path
            d="M15.033 15.6543C14.4852 17.5743 13.6391 19.3685 12.5479 20.9836"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.4}
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={drawProps}
            d="M15.033 15.6543C14.4852 17.5743 13.6391 19.3685 12.5479 20.9836"
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

FingerPrintIcon.displayName = "FingerPrintIcon";

export { FingerPrintIcon };
