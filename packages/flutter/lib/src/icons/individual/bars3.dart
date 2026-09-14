import 'package:heroicons_animated/src/icons/icon_base.dart';

const bars3 = HeroiconAnimatedIconData(
  name: 'bars-3',
  elements: [
    PathElement(
      d: 'M3.75 6.75h16.5',
      animation: PathLengthKeyframeAnimation(
        keyframes: [1.0, 0.6, 1.0],
        offsetKeyframes: [0.0, 0.2, 0.0],
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
      ),
    ),
    PathElement(
      d: 'M3.75 12h16.5',
      animation: PathLengthKeyframeAnimation(
        keyframes: [1.0, 0.6, 1.0],
        offsetKeyframes: [0.0, 0.2, 0.0],
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 100),
        curve: Curves.easeInOut,
      ),
    ),
    PathElement(
      d: 'M3.75 17.25h16.5',
      animation: PathLengthKeyframeAnimation(
        keyframes: [1.0, 0.6, 1.0],
        offsetKeyframes: [0.0, 0.2, 0.0],
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 200),
        curve: Curves.easeInOut,
      ),
    ),
  ],
);
