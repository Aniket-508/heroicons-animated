import 'package:heroicons_animated/src/icons/icon_base.dart';

const playCircle = HeroiconAnimatedIconData(
  name: 'play-circle',
  elements: [
    PathElement(d: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'),
    PathElement(
      d: 'M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
        rotateKeyframe: RotateKeyframeAnimation(
          keyframes: [0.0, -10.0, 0.0, 0.0],
          duration: Duration(milliseconds: 500),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeOut,
        ),
        translateKeyframe: TranslateKeyframeAnimation(
          keyframesX: [0.0, -1.0, 2.0, 0.0],
          keyframesY: [0.0, 0.0, 0.0, 0.0],
          duration: Duration(milliseconds: 500),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeOut,
        ),
      ),
    ),
  ],
);
