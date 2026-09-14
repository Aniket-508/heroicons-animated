import 'package:heroicons_animated/src/icons/icon_base.dart';

const arrowLongUp = HeroiconAnimatedIconData(
  name: 'arrow-long-up',
  elements: [
    PathElement(
      d: 'M8.25 6.75 12 3m0 0 3.75 3.75',
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
