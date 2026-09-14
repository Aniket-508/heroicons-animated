import 'package:heroicons_animated/src/icons/icon_base.dart';

const wifi = HeroiconAnimatedIconData(
  name: 'wifi',
  elements: [
    PathElement(d: 'M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0'),
    PathElement(
      d: 'M8.288 15.038a5.25 5.25 0 0 1 7.424 0',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 600),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
        opacityKeyframe: OpacityKeyframeAnimation(
          keyframes: [1.0, 0.0, 0.0, 1.0],
          duration: Duration(milliseconds: 600),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
        scaleKeyframe: ScaleKeyframeAnimation(
          keyframes: [1.0, 0.0, 0.0, 1.0],
          duration: Duration(milliseconds: 600),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
      ),
    ),
    PathElement(
      d: 'M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 600),
        delay: Duration(milliseconds: 200),
        curve: Curves.easeInOut,
        opacityKeyframe: OpacityKeyframeAnimation(
          keyframes: [1.0, 0.0, 0.0, 1.0],
          duration: Duration(milliseconds: 600),
          delay: Duration(milliseconds: 200),
          curve: Curves.easeInOut,
        ),
        scaleKeyframe: ScaleKeyframeAnimation(
          keyframes: [1.0, 0.0, 0.0, 1.0],
          duration: Duration(milliseconds: 600),
          delay: Duration(milliseconds: 200),
          curve: Curves.easeInOut,
        ),
      ),
    ),
    PathElement(
      d: 'M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 600),
        delay: Duration(milliseconds: 400),
        curve: Curves.easeInOut,
        opacityKeyframe: OpacityKeyframeAnimation(
          keyframes: [1.0, 0.0, 0.0, 1.0],
          duration: Duration(milliseconds: 600),
          delay: Duration(milliseconds: 400),
          curve: Curves.easeInOut,
        ),
        scaleKeyframe: ScaleKeyframeAnimation(
          keyframes: [1.0, 0.0, 0.0, 1.0],
          duration: Duration(milliseconds: 600),
          delay: Duration(milliseconds: 400),
          curve: Curves.easeInOut,
        ),
      ),
    ),
  ],
);
