import 'package:heroicons_animated/src/icons/icon_base.dart';

const arrowUpLeft = HeroiconAnimatedIconData(
  name: 'arrow-up-left',
  elements: [
    PathElement(
      d: 'm19.5 19.5-15-15m0 0v11.25m0-11.25h11.25',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
        scaleKeyframe: ScaleKeyframeAnimation(
          keyframes: [1.0, 0.85, 1.0],
          duration: Duration(milliseconds: 500),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
        translateKeyframe: TranslateKeyframeAnimation(
          keyframesX: [0.0, 4.0, 0.0],
          keyframesY: [0.0, 4.0, 0.0],
          duration: Duration(milliseconds: 500),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
      ),
    ),
  ],
);
