import 'package:heroicons_animated/src/icons/icon_base.dart';

const chevronUpDown = HeroiconAnimatedIconData(
  name: 'chevron-up-down',
  elements: [
    PathElement(
      d: 'M8.25 9 12 5.25 15.75 9',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, 0.0, 0.0],
        keyframesY: [0.0, -2.0, 0.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M8.25 15 12 18.75 15.75 15',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, 0.0, 0.0],
        keyframesY: [0.0, 2.0, 0.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
  ],
);
