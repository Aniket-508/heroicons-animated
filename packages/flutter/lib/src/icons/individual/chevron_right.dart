import 'package:heroicons_animated/src/icons/icon_base.dart';

const chevronRight = HeroiconAnimatedIconData(
  name: 'chevron-right',
  elements: [
    PathElement(
      d: 'm8.25 4.5 7.5 7.5-7.5 7.5',
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
