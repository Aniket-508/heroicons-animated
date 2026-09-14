import 'package:heroicons_animated/src/icons/icon_base.dart';

const arrowLeft = HeroiconAnimatedIconData(
  name: 'arrow-left',
  elements: [
    PathElement(
      d: 'M10.5 19.5 3 12m0 0 7.5-7.5',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, 3.0, 0.0],
        keyframesY: [0.0, 0.0, 0.0],
        duration: Duration(milliseconds: 400),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M3 12h18',
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
          keyframesX: [0.0, 1.5, 0.0],
          keyframesY: [0.0, 0.0, 0.0],
          duration: Duration(milliseconds: 400),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeOut,
        ),
      ),
    ),
  ],
);
