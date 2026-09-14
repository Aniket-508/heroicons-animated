import 'package:heroicons_animated/src/icons/icon_base.dart';

const pauseCircle = HeroiconAnimatedIconData(
  name: 'pause-circle',
  elements: [
    PathElement(d: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'),
    PathElement(
      d: 'M9.75 9v6',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, 0.0, 0.0, 0.0],
        keyframesY: [0.0, 2.0, 0.0, 0.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M14.25 9v6',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, 0.0, 0.0, 0.0],
        keyframesY: [0.0, 0.0, 2.0, 0.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
  ],
);
