import 'package:heroicons_animated/src/icons/icon_base.dart';

const arrowUpTray = HeroiconAnimatedIconData(
  name: 'arrow-up-tray',
  elements: [
    PathElement(
      d: 'M7.5 7.5L12 3m0 0 4.5 4.5M12 3v13.5',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, 0.0, 0.0],
        keyframesY: [0.0, -2.0, 0.0],
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
