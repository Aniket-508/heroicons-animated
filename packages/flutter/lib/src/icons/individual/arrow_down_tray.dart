import 'package:heroicons_animated/src/icons/icon_base.dart';

const arrowDownTray = HeroiconAnimatedIconData(
  name: 'arrow-down-tray',
  elements: [
    PathElement(
      d: 'M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, 0.0, 0.0],
        keyframesY: [0.0, 2.0, 0.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5',
    ),
  ],
);
