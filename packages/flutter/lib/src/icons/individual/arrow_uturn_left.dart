import 'package:heroicons_animated/src/icons/icon_base.dart';

const arrowUturnLeft = HeroiconAnimatedIconData(
  name: 'arrow-uturn-left',
  elements: [
    PathElement(
      d: 'M9 15 3 9m0 0 6-6',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, -1.5, 0.0],
        keyframesY: [0.0, 0.0, 0.0],
        duration: Duration(milliseconds: 450),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
      ),
    ),
    PathElement(d: 'M3 9h12a6 6 0 0 1 0 12h-3'),
  ],
);
