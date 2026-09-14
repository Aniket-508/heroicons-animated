import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export type DocumentCurrencyDollarIconHandle = IconHandle;

const DocumentCurrencyDollarIcon = forwardRef<DocumentCurrencyDollarIconHandle, IconProps>(
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
            <Path
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <AnimatedPath
              animatedProps={drawProps}
              d="M12 11.25v7.5m2.25-6.466a9.016 9.016 0 0 0-3.461-.203c-.536.072-.974.478-1.021 1.017a4.559 4.559 0 0 0-.018.402c0 .464.336.844.775.994l2.95 1.012c.44.15.775.53.775.994 0 .136-.006.27-.018.402-.047.539-.485.945-1.021 1.017a9.077 9.077 0 0 1-3.461-.203"
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

DocumentCurrencyDollarIcon.displayName = "DocumentCurrencyDollarIcon";

export { DocumentCurrencyDollarIcon };
