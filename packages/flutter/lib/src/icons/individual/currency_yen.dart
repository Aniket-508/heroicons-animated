import 'package:heroicons_animated/src/icons/icon_base.dart';

const currencyYen = HeroiconAnimatedIconData(
  name: 'currency-yen',
  animation: ScaleXYKeyframeAnimation(
    keyframesX: [1.0, -1.0, 1.0],
    keyframesY: [1.0, 1.0, 1.0],
    duration: Duration(milliseconds: 600),
    delay: Duration(milliseconds: 0),
    curve: Curves.easeInOut,
  ),
  elements: [
    PathElement(
      d: 'M9 7.5L12 12M12 12L15 7.5M12 12V17.25M15 12H9M15 15H9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z',
    ),
  ],
);
