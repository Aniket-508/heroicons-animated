import 'package:heroicons_animated/src/icons/icon_base.dart';

const arrowTurnUpLeft = HeroiconAnimatedIconData(
  name: 'arrow-turn-up-left',
  animation: CombinedAnimation(
    duration: Duration(milliseconds: 450),
    delay: Duration(milliseconds: 0),
    curve: Curves.easeInOut,
    scaleXYKeyframe: ScaleXYKeyframeAnimation(
      keyframesX: [1.0, 1.15, 1.0],
      keyframesY: [1.0, 1.0, 1.0],
      duration: Duration(milliseconds: 450),
      delay: Duration(milliseconds: 0),
      curve: Curves.easeInOut,
    ),
    translateKeyframe: TranslateKeyframeAnimation(
      keyframesX: [0.0, -2.0, 0.0],
      keyframesY: [0.0, 0.0, 0.0],
      duration: Duration(milliseconds: 450),
      delay: Duration(milliseconds: 0),
      curve: Curves.easeInOut,
    ),
  ),
  elements: [
    PathElement(d: 'M7.49 12 3.74 8.248m0 0 3.75-3.75m-3.75 3.75h16.5V19.5'),
  ],
);
