import 'package:heroicons_animated/src/icons/icon_base.dart';

const battery0 = HeroiconAnimatedIconData(
  name: 'battery-0',
  animation: OpacityKeyframeAnimation(
    keyframes: [1.0, 0.5, 1.0, 0.5, 1.0],
    duration: Duration(milliseconds: 1000),
    delay: Duration(milliseconds: 0),
    curve: Curves.easeInOut,
  ),
  elements: [
    PathElement(
      d: 'M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z',
    ),
  ],
);
