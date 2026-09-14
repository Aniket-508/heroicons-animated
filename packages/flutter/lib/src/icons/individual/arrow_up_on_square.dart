import 'package:heroicons_animated/src/icons/icon_base.dart';

const arrowUpOnSquare = HeroiconAnimatedIconData(
  name: 'arrow-up-on-square',
  elements: [
    PathElement(
      d: 'M15 5.25l-3-3m0 0-3 3m3-3V15',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, 0.0, 0.0, 0.0],
        keyframesY: [0.0, 2.0, -2.0, 0.0],
        duration: Duration(milliseconds: 400),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
      ),
    ),
    PathElement(
      d: 'M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15',
    ),
  ],
);
