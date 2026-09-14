import 'package:heroicons_animated/src/icons/icon_base.dart';

const arrowLeftStartOnRectangle = HeroiconAnimatedIconData(
  name: 'arrow-left-start-on-rectangle',
  elements: [
    PathElement(
      d: 'M5.25 15l-3-3m0 0 3-3m-3 3H15',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, -2.0, 0.0],
        keyframesY: [0.0, 0.0, 0.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15',
    ),
  ],
);
