import 'package:heroicons_animated/src/icons/icon_base.dart';

const speakerWave = HeroiconAnimatedIconData(
  name: 'speaker-wave',
  elements: [
    PathElement(
      d: 'M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z',
    ),
    PathElement(
      d: 'M16.463 8.288a5.25 5.25 0 0 1 0 7.424',
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
      d: 'M19.114 5.636a9 9 0 0 1 0 12.728',
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
  ],
);
