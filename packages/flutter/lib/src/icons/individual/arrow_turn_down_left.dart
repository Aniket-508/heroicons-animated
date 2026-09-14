import 'package:heroicons_animated/src/icons/icon_base.dart';

const arrowTurnDownLeft = HeroiconAnimatedIconData(
  name: 'arrow-turn-down-left',
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
    PathElement(d: 'm7.49 12-3.75 3.75m0 0 3.75 3.75m-3.75-3.75h16.5V4.499'),
  ],
);
