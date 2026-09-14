import 'package:heroicons_animated/src/icons/icon_base.dart';

const arrowTurnDownRight = HeroiconAnimatedIconData(
  name: 'arrow-turn-down-right',
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
      keyframesX: [0.0, 2.0, 0.0],
      keyframesY: [0.0, 0.0, 0.0],
      duration: Duration(milliseconds: 450),
      delay: Duration(milliseconds: 0),
      curve: Curves.easeInOut,
    ),
  ),
  elements: [
    PathElement(d: 'm16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499'),
  ],
);
