import 'package:heroicons_animated/src/icons/icon_base.dart';

const arrowUturnUp = HeroiconAnimatedIconData(
  name: 'arrow-uturn-up',
  elements: [
    PathElement(
      d: 'm9 9 6-6m0 0 6 6m-6-6',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, 0.0, 0.0],
        keyframesY: [0.0, -1.5, 0.0],
        duration: Duration(milliseconds: 450),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
      ),
    ),
    PathElement(d: 'M15 3v12a6 6 0 0 1-12 0v-3'),
  ],
);
