import 'package:heroicons_animated/src/icons/icon_base.dart';

const cloudArrowDown = HeroiconAnimatedIconData(
  name: 'cloud-arrow-down',
  elements: [
    PathElement(
      d: 'M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z',
    ),
    PathElement(
      d: 'M12 9.75v6.75m0 0-3-3m3 3 3-3',
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
