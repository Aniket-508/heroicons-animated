import 'package:heroicons_animated/src/icons/icon_base.dart';

const barsArrowDown = HeroiconAnimatedIconData(
  name: 'bars-arrow-down',
  elements: [
    PathElement(
      d: 'M17.25 9v12m0 0-3.75-3.75M17.25 21L21 17.25',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, 0.0, 0.0],
        keyframesY: [0.0, 2.0, 0.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
      ),
    ),
    PathElement(d: 'M3 4.5h14.25M3 9h9.75M3 13.5h9.75'),
  ],
);
