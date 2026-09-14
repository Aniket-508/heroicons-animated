import 'package:heroicons_animated/src/icons/icon_base.dart';

const arrowsRightLeft = HeroiconAnimatedIconData(
  name: 'arrows-right-left',
  elements: [
    PathElement(
      d: 'M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, -2.0, 0.0],
        keyframesY: [0.0, 0.0, 0.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M16.5 3L21 7.5m0 0L16.5 12M21 7.5H7.5',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, 2.0, 0.0],
        keyframesY: [0.0, 0.0, 0.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
  ],
);
