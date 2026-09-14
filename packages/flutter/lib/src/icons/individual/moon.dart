import 'package:heroicons_animated/src/icons/icon_base.dart';

const moon = HeroiconAnimatedIconData(
  name: 'moon',
  elements: [
    PathElement(
      d: 'M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z',
      animation: RotateKeyframeAnimation(
        keyframes: [0.0, -10.0, 10.0, -5.0, 5.0, 0.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
  ],
);
