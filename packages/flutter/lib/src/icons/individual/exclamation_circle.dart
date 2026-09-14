import 'package:heroicons_animated/src/icons/icon_base.dart';

const exclamationCircle = HeroiconAnimatedIconData(
  name: 'exclamation-circle',
  elements: [
    PathElement(
      d: 'M12 9v3.75',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 800),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
        opacityKeyframe: OpacityKeyframeAnimation(
          keyframes: [1.0, 0.4, 1.0],
          duration: Duration(milliseconds: 800),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
        scaleKeyframe: ScaleKeyframeAnimation(
          keyframes: [1.0, 1.1, 1.0],
          duration: Duration(milliseconds: 800),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
      ),
    ),
    PathElement(
      d: 'M12 15.75h.008v.008H12v-.008Z',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 800),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
        opacityKeyframe: OpacityKeyframeAnimation(
          keyframes: [1.0, 0.4, 1.0],
          duration: Duration(milliseconds: 800),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
        scaleKeyframe: ScaleKeyframeAnimation(
          keyframes: [1.0, 1.1, 1.0],
          duration: Duration(milliseconds: 800),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
      ),
    ),
    PathElement(d: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'),
  ],
);
