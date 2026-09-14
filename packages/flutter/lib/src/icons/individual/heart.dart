import 'package:heroicons_animated/src/icons/icon_base.dart';

const heart = HeroiconAnimatedIconData(
  name: 'heart',
  animation: ScaleKeyframeAnimation(
    keyframes: [1.0, 1.08, 1.0, 1.08, 1.0, 1.08, 1.0],
    duration: Duration(milliseconds: 1350),
    delay: Duration(milliseconds: 0),
    curve: Curves.easeOut,
  ),
  elements: [
    PathElement(
      d: 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z',
    ),
  ],
);
