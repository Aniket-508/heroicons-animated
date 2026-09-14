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

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedG = Animated.createAnimatedComponent(G);

export type RadioIconHandle = IconHandle;

const RadioIcon = forwardRef<RadioIconHandle, IconProps>(
  ({ size = 28, color = "currentColor", strokeWidth = 1.5, style, controlled, onPress }, ref) => {
    const antennaRotate = useSharedValue(0);
    const speakerScale = useSharedValue(1);
    const speakerOpacity = useSharedValue(1);

    const startAnimation = useCallback(() => {
      antennaRotate.value = withTiming(-10, { duration: 400 });

      speakerScale.value = withSequence(
        withTiming(1.15, { duration: 125 }),
        withTiming(1, { duration: 125 }),
        withTiming(1.1, { duration: 125 }),
        withTiming(1, { duration: 125 })
      );
      speakerOpacity.value = withSequence(
        withTiming(0.7, { duration: 125 }),
        withTiming(1, { duration: 125 }),
        withTiming(0.8, { duration: 125 }),
        withTiming(1, { duration: 125 })
      );
    }, [antennaRotate, speakerScale, speakerOpacity]);

    const stopAnimation = useCallback(() => {
      antennaRotate.value = withTiming(0, { duration: 200 });
      speakerScale.value = withTiming(1, { duration: 200 });
      speakerOpacity.value = withTiming(1, { duration: 200 });
    }, [antennaRotate, speakerScale, speakerOpacity]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      stopAnimation,
    }));

    const antennaProps = useAnimatedProps(() => ({
      rotation: antennaRotate.value,
      rotate: antennaRotate.value,
      originX: 3.75,
      originY: 7.5,
    }));

    const speakerProps = useAnimatedProps(() => ({
      scale: speakerScale.value,
      opacity: speakerOpacity.value,
      originX: 9.25,
      originY: 14.25,
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
            animatedProps={antennaProps}
            d="M3.75 7.5L20.25 3.375"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <Path
            d="M12 6.75C9.29246 6.75 6.63727 6.97417 4.05199 7.40497C2.99912 7.58042 2.25 8.50663 2.25 9.57402V18.75C2.25 19.9926 3.25736 21 4.5 21H19.5C20.7426 21 21.75 19.9926 21.75 18.75V9.57402C21.75 8.50663 21.0009 7.58042 19.948 7.40497C17.3627 6.97417 14.7075 6.75 12 6.75Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <Path
            d="M17.25 12.75C16.8358 12.75 16.5 12.4142 16.5 12C16.5 11.5858 16.8358 11.25 17.25 11.25C17.6642 11.25 18 11.5858 18 12C18 12.4142 17.6642 12.75 17.25 12.75ZM17.25 17.25C16.8358 17.25 16.5 16.9142 16.5 16.5C16.5 16.0858 16.8358 15.75 17.25 15.75C17.6642 15.75 18 16.0858 18 16.5C18 16.9142 17.6642 17.25 17.25 17.25Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <AnimatedG animatedProps={speakerProps}>
            <Path
              d="M10.3169 13.1931L10.3116 13.1984L10.3063 13.1931L10.3116 13.1878L10.3169 13.1931Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M10.3118 15.3195L10.3065 15.3142L10.3118 15.3089L10.3171 15.3142L10.3118 15.3195Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M8.1958 15.3144L8.1905 15.3197L8.18519 15.3144L8.1905 15.3091L8.1958 15.3144Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M8.19067 13.1982L8.18537 13.1929L8.19067 13.1876L8.19598 13.1929L8.19067 13.1982Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M9.25488 10.5V10.5075H9.24738V10.5H9.25488Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M12.5039 12.3801L12.4974 12.3839L12.4937 12.3774L12.5002 12.3736L12.5039 12.3801Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M11.1248 17.5063L11.121 17.4999L11.1275 17.4961L11.1313 17.5026L11.1248 17.5063Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M11.1313 11.0048L11.1276 11.0113L11.1211 11.0076L11.1249 11.0011L11.1313 11.0048Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M12.5002 16.1338L12.4937 16.13L12.4975 16.1235L12.504 16.1273L12.5002 16.1338Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M13.0049 14.2573H12.9974V14.2498H13.0049V14.2573Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M9.25488 18V18.0075H9.24738V18H9.25488Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M6.00879 16.1301L6.00229 16.1339L5.99854 16.1274L6.00504 16.1236L6.00879 16.1301Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M7.37476 11.0112L7.37101 11.0047L7.3775 11.001L7.38125 11.0075L7.37476 11.0112Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M7.38135 17.4999L7.3776 17.5064L7.3711 17.5027L7.37485 17.4962L7.38135 17.4999Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M6.00513 12.3838L5.99863 12.38L6.00238 12.3735L6.00888 12.3773L6.00513 12.3838Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
            <Path
              d="M5.50488 14.2573H5.49738V14.2498H5.50488V14.2573Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={strokeWidth}
            />
          </AnimatedG>
        </Svg>
      </IconWrapper>
    );
  }
);

RadioIcon.displayName = "RadioIcon";

export { RadioIcon };
