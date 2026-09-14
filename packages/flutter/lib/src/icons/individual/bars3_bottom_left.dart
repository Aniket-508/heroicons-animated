import 'package:heroicons_animated/src/icons/icon_base.dart';

const bars3BottomLeft = HeroiconAnimatedIconData(
  name: 'bars-3-bottom-left',
  elements: [
    PathElement(
      d: 'M3.75 6.75h16.5',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, -3.0, 0.0],
        keyframesY: [0.0, 0.0, 0.0],
        duration: Duration(milliseconds: 400),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
      ),
    ),
    PathElement(
      d: 'M3.75 12h16.5',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, -3.0, 0.0],
        keyframesY: [0.0, 0.0, 0.0],
        duration: Duration(milliseconds: 400),
        delay: Duration(milliseconds: 50),
        curve: Curves.easeInOut,
      ),
    ),
    PathElement(
      d: 'M3.75 17.25H12',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 150),
        curve: Curves.easeInOut,
        pathLengthKeyframe: PathLengthKeyframeAnimation(
          keyframes: [1.0, 0.5, 1.0],
          offsetKeyframes: [0.0, 0.0, 0.0],
          duration: Duration(milliseconds: 500),
          delay: Duration(milliseconds: 150),
          curve: Curves.easeInOut,
        ),
        translateKeyframe: TranslateKeyframeAnimation(
          keyframesX: [0.0, -2.0, 0.0],
          keyframesY: [0.0, 0.0, 0.0],
          duration: Duration(milliseconds: 500),
          delay: Duration(milliseconds: 150),
          curve: Curves.easeInOut,
        ),
      ),
    ),
  ],
);
