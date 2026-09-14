import 'package:heroicons_animated/src/icons/icon_base.dart';

const arrowTopRightOnSquare = HeroiconAnimatedIconData(
  name: 'arrow-top-right-on-square',
  elements: [
    PathElement(
      d: 'M7.5 16.5L21 3m0 0h-5.25M21 3v5.25',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, 2.0, 0.0],
        keyframesY: [0.0, -2.0, 0.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
      ),
    ),
    PathElement(
      d: 'M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5',
    ),
  ],
);
