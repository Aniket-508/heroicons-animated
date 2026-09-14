import 'package:heroicons_animated/src/icons/icon_base.dart';

const tag = HeroiconAnimatedIconData(
  name: 'tag',
  animation: RotateKeyframeAnimation(
    keyframes: [0.0, -10.0, 8.0, -5.0, 3.0, 0.0],
    duration: Duration(milliseconds: 500),
    delay: Duration(milliseconds: 0),
    curve: Curves.easeInOut,
    originX: 0.25,
    originY: 0.25,
  ),
  elements: [
    PathElement(
      d: 'M9.56802 3H5.25C4.00736 3 3 4.00736 3 5.25V9.56802C3 10.1648 3.23705 10.7371 3.65901 11.159L13.2401 20.7401C13.9388 21.4388 15.0199 21.6117 15.8465 21.0705C17.9271 19.7084 19.7084 17.9271 21.0705 15.8465C21.6117 15.0199 21.4388 13.9388 20.7401 13.2401L11.159 3.65901C10.7371 3.23705 10.1648 3 9.56802 3Z',
    ),
    PathElement(d: 'M6 6H6.0075V6.0075H6V6Z'),
  ],
);
