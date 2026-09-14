import 'package:heroicons_animated/src/icons/icon_base.dart';

const arrowUturnRight = HeroiconAnimatedIconData(
  name: 'arrow-uturn-right',
  elements: [
    PathElement(
      d: 'm15 15 6-6m0 0-6-6m6 6',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, 1.5, 0.0],
        keyframesY: [0.0, 0.0, 0.0],
        duration: Duration(milliseconds: 450),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
      ),
    ),
    PathElement(d: 'M21 9H9a6 6 0 0 0 0 12h3'),
  ],
);
