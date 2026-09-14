import 'package:heroicons_animated/src/icons/icon_base.dart';

const arrowDownLeft = HeroiconAnimatedIconData(
  name: 'arrow-down-left',
  elements: [
    PathElement(
      d: 'm19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, 3.0, 0.0],
        keyframesY: [0.0, -3.0, 0.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
      ),
    ),
  ],
);
