import 'package:heroicons_animated/src/icons/icon_base.dart';

const noSymbol = HeroiconAnimatedIconData(
  name: 'no-symbol',
  elements: [
    PathElement(
      d: 'M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636',
      animation: ScaleKeyframeAnimation(
        keyframes: [1.0, 1.1, 1.0],
        duration: Duration(milliseconds: 400),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
      ),
    ),
    PathElement(
      d: 'M18.364 18.364L5.636 5.636',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
        pathLength: PathLengthAnimation(
          from: 0.0,
          to: 1.0,
          fromOffset: 1.0,
          toOffset: 0.0,
          duration: Duration(milliseconds: 300),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeOut,
        ),
        opacity: OpacityAnimation(
          from: 0.0,
          to: 1.0,
          duration: Duration(milliseconds: 300),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeOut,
        ),
      ),
    ),
  ],
);
