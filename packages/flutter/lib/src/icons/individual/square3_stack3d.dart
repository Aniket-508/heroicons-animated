import 'package:heroicons_animated/src/icons/icon_base.dart';

const square3Stack3d = HeroiconAnimatedIconData(
  name: 'square-3-stack-3d',
  animation: ScaleXYKeyframeAnimation(
    keyframesX: [1.0, 1.0, 1.0],
    keyframesY: [1.0, 1.08, 1.0],
    duration: Duration(milliseconds: 400),
    delay: Duration(milliseconds: 0),
    curve: Curves.easeInOut,
  ),
  elements: [
    PathElement(
      d: 'M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3',
    ),
  ],
);
