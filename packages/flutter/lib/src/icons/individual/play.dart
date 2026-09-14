import 'package:heroicons_animated/src/icons/icon_base.dart';

const play = HeroiconAnimatedIconData(
  name: 'play',
  elements: [
    PathElement(
      d: 'M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z',
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
