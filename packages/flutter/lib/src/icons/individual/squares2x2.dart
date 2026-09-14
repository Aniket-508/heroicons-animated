import 'package:heroicons_animated/src/icons/icon_base.dart';

const squares2x2 = HeroiconAnimatedIconData(
  name: 'squares-2x2',
  elements: [
    PathElement(
      d: 'M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6Z',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 350),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
        opacityKeyframe: OpacityKeyframeAnimation(
          keyframes: [0.0, 1.0],
          duration: Duration(milliseconds: 350),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeOut,
        ),
        scaleKeyframe: ScaleKeyframeAnimation(
          keyframes: [0.6, 1.0],
          duration: Duration(milliseconds: 350),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeOut,
        ),
      ),
    ),
    PathElement(
      d: 'M13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6Z',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 350),
        delay: Duration(milliseconds: 80),
        curve: Curves.easeOut,
        opacityKeyframe: OpacityKeyframeAnimation(
          keyframes: [0.0, 1.0],
          duration: Duration(milliseconds: 350),
          delay: Duration(milliseconds: 80),
          curve: Curves.easeOut,
        ),
        scaleKeyframe: ScaleKeyframeAnimation(
          keyframes: [0.6, 1.0],
          duration: Duration(milliseconds: 350),
          delay: Duration(milliseconds: 80),
          curve: Curves.easeOut,
        ),
      ),
    ),
    PathElement(
      d: 'M13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 350),
        delay: Duration(milliseconds: 240),
        curve: Curves.easeOut,
        opacityKeyframe: OpacityKeyframeAnimation(
          keyframes: [0.0, 1.0],
          duration: Duration(milliseconds: 350),
          delay: Duration(milliseconds: 240),
          curve: Curves.easeOut,
        ),
        scaleKeyframe: ScaleKeyframeAnimation(
          keyframes: [0.6, 1.0],
          duration: Duration(milliseconds: 350),
          delay: Duration(milliseconds: 240),
          curve: Curves.easeOut,
        ),
      ),
    ),
    PathElement(
      d: 'M3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25Z',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 350),
        delay: Duration(milliseconds: 320),
        curve: Curves.easeOut,
        opacityKeyframe: OpacityKeyframeAnimation(
          keyframes: [0.0, 1.0],
          duration: Duration(milliseconds: 350),
          delay: Duration(milliseconds: 320),
          curve: Curves.easeOut,
        ),
        scaleKeyframe: ScaleKeyframeAnimation(
          keyframes: [0.6, 1.0],
          duration: Duration(milliseconds: 350),
          delay: Duration(milliseconds: 320),
          curve: Curves.easeOut,
        ),
      ),
    ),
  ],
);
