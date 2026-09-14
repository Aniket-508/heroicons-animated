import 'package:heroicons_animated/src/icons/icon_base.dart';

const arrowsPointingOut = HeroiconAnimatedIconData(
  name: 'arrows-pointing-out',
  elements: [
    PathElement(
      d: 'M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, -2.0, 0.0],
        keyframesY: [0.0, -2.0, 0.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, -2.0, 0.0],
        keyframesY: [0.0, 2.0, 0.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, 2.0, 0.0],
        keyframesY: [0.0, -2.0, 0.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M20.25 20.25h-4.5m4.5 0v-4.5m0 4.5L15 15',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, 2.0, 0.0],
        keyframesY: [0.0, 2.0, 0.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
  ],
);
