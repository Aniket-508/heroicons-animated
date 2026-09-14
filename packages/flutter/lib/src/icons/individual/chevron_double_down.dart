import 'package:heroicons_animated/src/icons/icon_base.dart';

const chevronDoubleDown = HeroiconAnimatedIconData(
  name: 'chevron-double-down',
  elements: [
    PathElement(
      d: 'm4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5',
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
