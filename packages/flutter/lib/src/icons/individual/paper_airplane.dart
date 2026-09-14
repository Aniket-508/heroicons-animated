import 'package:heroicons_animated/src/icons/icon_base.dart';

const paperAirplane = HeroiconAnimatedIconData(
  name: 'paper-airplane',
  elements: [
    PathElement(
      d: 'M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 1200),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
        scaleKeyframe: ScaleKeyframeAnimation(
          keyframes: [1.0, 0.8, 1.0, 1.0, 1.0],
          duration: Duration(milliseconds: 1200),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
        translateKeyframe: TranslateKeyframeAnimation(
          keyframesX: [0.0, -2.4, 30.0, -36.0, 0.0],
          keyframesY: [0.0, 0.0, 0.0, 0.0, 0.0],
          duration: Duration(milliseconds: 1200),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
      ),
    ),
  ],
);
