import 'package:heroicons_animated/src/icons/icon_base.dart';

const arrowUp = HeroiconAnimatedIconData(
  name: 'arrow-up',
  elements: [
    PathElement(
      d: 'M4.5 10.5 12 3m0 0 7.5 7.5',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, 0.0, 0.0],
        keyframesY: [0.0, 3.0, 0.0],
        duration: Duration(milliseconds: 400),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M12 3v18',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 400),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
        pathLengthKeyframe: PathLengthKeyframeAnimation(
          keyframes: [1.0, 0.8333333333, 1.0],
          offsetKeyframes: [0.0, 0.1666666667, 0.0],
          duration: Duration(milliseconds: 400),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeOut,
        ),
      ),
    ),
  ],
);
