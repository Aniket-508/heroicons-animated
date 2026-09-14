import 'package:heroicons_animated/src/icons/icon_base.dart';

const chevronDoubleRight = HeroiconAnimatedIconData(
  name: 'chevron-double-right',
  elements: [
    PathElement(
      d: 'm5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5',
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
