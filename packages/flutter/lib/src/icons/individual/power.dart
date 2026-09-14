import 'package:heroicons_animated/src/icons/icon_base.dart';

const power = HeroiconAnimatedIconData(
  name: 'power',
  elements: [
    PathElement(
      d: 'M5.636 5.636a9 9 0 1 0 12.728 0',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
        opacityKeyframe: OpacityKeyframeAnimation(
          keyframes: [0.5, 1.0, 0.5, 1.0],
          duration: Duration(milliseconds: 500),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
        scaleKeyframe: ScaleKeyframeAnimation(
          keyframes: [1.0, 1.05, 1.0],
          duration: Duration(milliseconds: 500),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
      ),
    ),
    PathElement(
      d: 'M12 3v9',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, 0.0, 0.0],
        keyframesY: [0.0, -2.0, 0.0],
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
      ),
    ),
  ],
);
