import 'package:heroicons_animated/src/icons/icon_base.dart';

const commandLine = HeroiconAnimatedIconData(
  name: 'command-line',
  elements: [
    PathElement(
      d: 'M5.25 20.25H18.75C19.9926 20.25 21 19.2426 21 18V6C21 4.75736 19.9926 3.75 18.75 3.75H5.25C4.00736 3.75 3 4.75736 3 6V18C3 19.2426 4.00736 20.25 5.25 20.25Z',
    ),
    PathElement(d: 'M6.75 7.5L9.75 9.75L6.75 12'),
    PathElement(
      d: 'M11.25 12H14.25',
      animation: OpacityKeyframeAnimation(
        keyframes: [1.0, 0.0, 1.0],
        duration: Duration(milliseconds: 800),
        delay: Duration(milliseconds: 0),
        curve: Curves.linear,
      ),
    ),
  ],
);
