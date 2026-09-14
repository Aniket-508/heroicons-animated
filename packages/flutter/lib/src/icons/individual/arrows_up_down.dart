import 'package:heroicons_animated/src/icons/icon_base.dart';

const arrowsUpDown = HeroiconAnimatedIconData(
  name: 'arrows-up-down',
  elements: [
    PathElement(
      d: 'M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, 0.0, 0.0],
        keyframesY: [0.0, -2.0, 0.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M21 16.5L16.5 21m0 0L12 16.5m4.5 4.5V7.5',
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
