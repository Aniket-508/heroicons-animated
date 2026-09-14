import 'package:heroicons_animated/src/icons/icon_base.dart';

const chevronDoubleUp = HeroiconAnimatedIconData(
  name: 'chevron-double-up',
  elements: [
    PathElement(
      d: 'm4.5 18.75 7.5-7.5 7.5 7.5',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, 0.0, 0.0],
        keyframesY: [0.0, -2.0, 0.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'm4.5 12.75 7.5-7.5 7.5 7.5',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, 0.0, 0.0],
        keyframesY: [0.0, -2.0, 0.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
  ],
);
