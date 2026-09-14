import 'package:heroicons_animated/src/icons/icon_base.dart';

const bars4 = HeroiconAnimatedIconData(
  name: 'bars-4',
  elements: [
    PathElement(
      d: 'M3.75 5.25h16.5',
      animation: PathLengthKeyframeAnimation(
        keyframes: [1.0, 0.6, 1.0],
        offsetKeyframes: [0.0, 0.2, 0.0],
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
      ),
    ),
    PathElement(
      d: 'M3.75 9.75h16.5',
      animation: PathLengthKeyframeAnimation(
        keyframes: [1.0, 0.6, 1.0],
        offsetKeyframes: [0.0, 0.2, 0.0],
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 100),
        curve: Curves.easeInOut,
      ),
    ),
    PathElement(
      d: 'M3.75 14.25h16.5',
      animation: PathLengthKeyframeAnimation(
        keyframes: [1.0, 0.6, 1.0],
        offsetKeyframes: [0.0, 0.2, 0.0],
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 200),
        curve: Curves.easeInOut,
      ),
    ),
    PathElement(
      d: 'M3.75 18.75h16.5',
      animation: PathLengthKeyframeAnimation(
        keyframes: [1.0, 0.6, 1.0],
        offsetKeyframes: [0.0, 0.2, 0.0],
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 300),
        curve: Curves.easeInOut,
      ),
    ),
  ],
);
