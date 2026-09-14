import 'package:heroicons_animated/src/icons/icon_base.dart';

const arrowLeftCircle = HeroiconAnimatedIconData(
  name: 'arrow-left-circle',
  elements: [
    PathElement(
      d: 'm11.25 9-3 3m0 0 3 3m-3-3h7.5',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, -2.0, 0.0],
        keyframesY: [0.0, 0.0, 0.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(d: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'),
  ],
);
