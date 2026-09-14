import 'package:heroicons_animated/src/icons/icon_base.dart';

const pause = HeroiconAnimatedIconData(
  name: 'pause',
  elements: [
    PathElement(
      d: 'M15.75 5.25v13.5',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, 0.0, 0.0, 0.0],
        keyframesY: [0.0, 0.0, 2.0, 0.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M8.25 5.25v13.5',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, 0.0, 0.0, 0.0],
        keyframesY: [0.0, 2.0, 0.0, 0.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
  ],
);
