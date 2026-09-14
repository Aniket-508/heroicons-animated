import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export type GlobeEuropeAfricaIconHandle = IconHandle;

const GlobeEuropeAfricaIcon = forwardRef<GlobeEuropeAfricaIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const landOpacity = useSharedValue(1);
    const landPathLength = useSharedValue(1);
    const landPathOffset = useSharedValue(0);

    const startAnimation = useCallback(() => {
      landOpacity.value = 0;
      landPathLength.value = 0;
      landPathOffset.value = 1;

      landOpacity.value = withTiming(1, { duration: 100 });
      landPathLength.value = withTiming(1, { duration: 600 });
      landPathOffset.value = withTiming(0, { duration: 600 });
    }, [landOpacity, landPathLength, landPathOffset]);

    const stopAnimation = useCallback(() => {
      landOpacity.value = withTiming(1, { duration: 200 });
      landPathLength.value = withTiming(1, { duration: 200 });
      landPathOffset.value = withTiming(0, { duration: 200 });
    }, [landOpacity, landPathLength, landPathOffset]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const landProps = useAnimatedProps(() => ({
      opacity: landOpacity.value,
      pathLength: landPathLength.value,
      pathOffset: landPathOffset.value,
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
            d="M20.893 13.393A9 9 0 0 0 8.965 3.525M20.893 13.393A9 9 0 1 1 8.965 3.525"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={landProps}
            d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76"
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

GlobeEuropeAfricaIcon.displayName = "GlobeEuropeAfricaIcon";

export { GlobeEuropeAfricaIcon };
