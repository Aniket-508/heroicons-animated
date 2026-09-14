import 'package:heroicons_animated/src/icons/icon_base.dart';

const bell = HeroiconAnimatedIconData(
  name: 'bell',
  elements: [
    PathElement(
      d: 'M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0',
      animation: RotateKeyframeAnimation(
        keyframes: [0.0, -10.0, 10.0, -10.0, 0.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
  ],
);
