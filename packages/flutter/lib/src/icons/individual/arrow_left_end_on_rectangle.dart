import 'package:heroicons_animated/src/icons/icon_base.dart';

const arrowLeftEndOnRectangle = HeroiconAnimatedIconData(
  name: 'arrow-left-end-on-rectangle',
  elements: [
    PathElement(
      d: 'M12 9l-3 3m0 0 3 3m-3-3h12.75',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, -2.0, 0.0],
        keyframesY: [0.0, 0.0, 0.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15',
    ),
  ],
);
