import 'package:heroicons_animated/src/icons/icon_base.dart';

const signal = HeroiconAnimatedIconData(
  name: 'signal',
  elements: [
    PathElement(
      d: 'M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z',
    ),
    PathElement(
      d: 'M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304',
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
      d: 'M7.227 16.773a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546',
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
      d: 'M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788',
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
