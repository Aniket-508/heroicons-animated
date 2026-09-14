import 'package:heroicons_animated/src/icons/icon_base.dart';

const window = HeroiconAnimatedIconData(
  name: 'window',
  elements: [
    PathElement(
      d: 'M3 8.25V18C3 19.2426 4.00736 20.25 5.25 20.25H18.75C19.9926 20.25 21 19.2426 21 18V8.25M3 8.25V6C3 4.75736 4.00736 3.75 5.25 3.75H18.75C19.9926 3.75 21 4.75736 21 6V8.25M3 8.25H21',
    ),
    PathElement(
      d: 'M5.25 6H5.2575V6.0075H5.25V6Z',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
        opacityKeyframe: OpacityKeyframeAnimation(
          keyframes: [0.0, 1.0, 1.0],
          duration: Duration(milliseconds: 300),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeOut,
        ),
        scaleKeyframe: ScaleKeyframeAnimation(
          keyframes: [0.0, 1.3, 1.0],
          duration: Duration(milliseconds: 300),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeOut,
        ),
      ),
    ),
    PathElement(
      d: 'M7.5 6H7.5075V6.0075H7.5V6Z',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 100),
        curve: Curves.easeOut,
        opacityKeyframe: OpacityKeyframeAnimation(
          keyframes: [0.0, 1.0, 1.0],
          duration: Duration(milliseconds: 300),
          delay: Duration(milliseconds: 100),
          curve: Curves.easeOut,
        ),
        scaleKeyframe: ScaleKeyframeAnimation(
          keyframes: [0.0, 1.3, 1.0],
          duration: Duration(milliseconds: 300),
          delay: Duration(milliseconds: 100),
          curve: Curves.easeOut,
        ),
      ),
    ),
    PathElement(
      d: 'M9.75 6H9.7575V6.0075H9.75V6Z',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 200),
        curve: Curves.easeOut,
        opacityKeyframe: OpacityKeyframeAnimation(
          keyframes: [0.0, 1.0, 1.0],
          duration: Duration(milliseconds: 300),
          delay: Duration(milliseconds: 200),
          curve: Curves.easeOut,
        ),
        scaleKeyframe: ScaleKeyframeAnimation(
          keyframes: [0.0, 1.3, 1.0],
          duration: Duration(milliseconds: 300),
          delay: Duration(milliseconds: 200),
          curve: Curves.easeOut,
        ),
      ),
    ),
  ],
);
