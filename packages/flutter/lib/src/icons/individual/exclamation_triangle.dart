import 'package:heroicons_animated/src/icons/icon_base.dart';

const exclamationTriangle = HeroiconAnimatedIconData(
  name: 'exclamation-triangle',
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
      d: 'M12 15.75h.007v.008H12v-.008Z',
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
      d: 'M2.697 16.126c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126Z',
    ),
  ],
);
