import 'package:heroicons_animated/src/icons/icon_base.dart';

const arrowRight = HeroiconAnimatedIconData(
  name: 'arrow-right',
  elements: [
    PathElement(
      d: 'M13.5 4.5 21 12m0 0-7.5 7.5',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, -3.0, 0.0],
        keyframesY: [0.0, 0.0, 0.0],
        duration: Duration(milliseconds: 400),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M21 12H3',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 400),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
        scaleXYKeyframe: ScaleXYKeyframeAnimation(
          keyframesX: [1.0, 0.8333333333, 1.0],
          keyframesY: [1.0, 1.0, 1.0],
          duration: Duration(milliseconds: 400),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeOut,
        ),
        translateKeyframe: TranslateKeyframeAnimation(
          keyframesX: [0.0, -1.5, 0.0],
          keyframesY: [0.0, 0.0, 0.0],
          duration: Duration(milliseconds: 400),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeOut,
        ),
      ),
    ),
  ],
);
