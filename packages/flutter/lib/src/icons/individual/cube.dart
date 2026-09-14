import 'package:heroicons_animated/src/icons/icon_base.dart';

const cube = HeroiconAnimatedIconData(
  name: 'cube',
  animation: RotateYKeyframeAnimation(
    keyframes: [0.0, 15.0, -15.0, 0.0],
    duration: Duration(milliseconds: 600),
    delay: Duration(milliseconds: 0),
    curve: Curves.easeInOut,
  ),
  elements: [
    PathElement(
      d: 'M21 7.5L12 2.25L3 7.5M21 7.5L12 12.75M21 7.5V16.5L12 21.75M3 7.5L12 12.75M3 7.5V16.5L12 21.75M12 12.75V21.75',
    ),
  ],
);
