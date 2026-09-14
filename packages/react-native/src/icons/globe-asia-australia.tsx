import { forwardRef, useCallback, useImperativeHandle } from "react";
import Animated, { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { IconWrapper } from "../icon-wrapper";
import type { IconHandle, IconProps } from "../types";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export type GlobeAsiaAustraliaIconHandle = IconHandle;

const GlobeAsiaAustraliaIcon = forwardRef<GlobeAsiaAustraliaIconHandle, IconProps>(
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
            d="M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036M19.44 17.067a9.012 9.012 0 0 1-5.277 3.671M14.163 20.738a9 9 0 0 1-10.275-4.835"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={landProps}
            d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={landProps}
            d="M19.44 17.067l-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedPath
            animatedProps={landProps}
            d="M15.75 9c0 .896-.393 1.7-1.016 2.25"
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

GlobeAsiaAustraliaIcon.displayName = "GlobeAsiaAustraliaIcon";

export { GlobeAsiaAustraliaIcon };
