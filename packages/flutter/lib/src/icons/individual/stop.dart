import 'package:heroicons_animated/src/icons/icon_base.dart';

const stop = HeroiconAnimatedIconData(
  name: 'stop',
  animation: ScaleKeyframeAnimation(
    keyframes: [1.0, 0.9, 1.0],
    duration: Duration(milliseconds: 200),
    delay: Duration(milliseconds: 0),
    curve: Curves.easeInOut,
  ),
  elements: [
    PathElement(
      d: 'M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z',
    ),
  ],
);
