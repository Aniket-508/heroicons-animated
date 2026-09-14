import 'package:heroicons_animated/src/icons/icon_base.dart';

const deviceTablet = HeroiconAnimatedIconData(
  name: 'device-tablet',
  animation: RotateKeyframeAnimation(
    keyframes: [0.0, -3.0, 3.0, -3.0, 3.0, -2.0, 2.0, 0.0],
    duration: Duration(milliseconds: 500),
    delay: Duration(milliseconds: 0),
    curve: Curves.easeInOut,
  ),
  elements: [
    PathElement(
      d: 'M10.5 19.5H13.5M6.75 21.75H17.25C18.4926 21.75 19.5 20.7426 19.5 19.5V4.5C19.5 3.25736 18.4926 2.25 17.25 2.25H6.75C5.50736 2.25 4.5 3.25736 4.5 4.5V19.5C4.5 20.7426 5.50736 21.75 6.75 21.75Z',
    ),
  ],
);
