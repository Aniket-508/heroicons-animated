import 'package:heroicons_animated/src/icons/icon_base.dart';

const chevronDoubleLeft = HeroiconAnimatedIconData(
  name: 'chevron-double-left',
  elements: [
    PathElement(
      d: 'm18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, -2.0, 0.0],
        keyframesY: [0.0, 0.0, 0.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
  ],
);
