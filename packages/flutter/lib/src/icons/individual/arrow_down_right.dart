import 'package:heroicons_animated/src/icons/icon_base.dart';

const arrowDownRight = HeroiconAnimatedIconData(
  name: 'arrow-down-right',
  elements: [
    PathElement(
      d: 'm4.5 4.5 15 15m0 0V8.25m0 11.25H8.25',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, -3.0, 0.0],
        keyframesY: [0.0, -3.0, 0.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
      ),
    ),
  ],
);
