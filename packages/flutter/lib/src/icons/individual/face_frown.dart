import 'package:heroicons_animated/src/icons/icon_base.dart';

const faceFrown = HeroiconAnimatedIconData(
  name: 'face-frown',
  animation: CombinedAnimation(
    duration: Duration(milliseconds: 800),
    delay: Duration(milliseconds: 0),
    curve: Curves.easeInOut,
    rotateKeyframe: RotateKeyframeAnimation(
      keyframes: [0.0, -2.0, 2.0, 0.0],
      duration: Duration(milliseconds: 800),
      delay: Duration(milliseconds: 0),
      curve: Curves.easeInOut,
    ),
    scaleKeyframe: ScaleKeyframeAnimation(
      keyframes: [1.0, 1.15, 1.05, 1.08],
      duration: Duration(milliseconds: 800),
      delay: Duration(milliseconds: 0),
      curve: Curves.easeInOut,
    ),
  ),
  elements: [
    CircleElement(cx: 12, cy: 12, r: 9),
    PathElement(
      d: 'M15.1823 16.3179C14.3075 15.4432 13.1623 15.0038 12.0158 14.9999C10.859 14.996 9.70095 15.4353 8.81834 16.3179',
      animation: PathLengthKeyframeAnimation(
        keyframes: [0.3, 1.0, 1.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 100),
        curve: Curves.easeInOut,
      ),
    ),
    PathElement(
      d: 'M15.5 17C14.5 16 13 15.5 12 15.5C11 15.5 9.5 16 8.5 17',
      animation: OpacityKeyframeAnimation(
        keyframes: [0.0, 1.0, 0.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 100),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M9.75 9.75C9.75 10.1642 9.58211 10.5 9.375 10.5C9.16789 10.5 9 10.1642 9 9.75C9 9.33579 9.16789 9 9.375 9C9.58211 9 9.75 9.33579 9.75 9.75Z',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 600),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
        scaleKeyframe: ScaleKeyframeAnimation(
          keyframes: [1.0, 1.3, 0.9, 1.1],
          duration: Duration(milliseconds: 600),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
        translateKeyframe: TranslateKeyframeAnimation(
          keyframesX: [0.0, 0.0, 0.0, 0.0],
          keyframesY: [0.0, -0.5, 0.3, 0.0],
          duration: Duration(milliseconds: 600),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
      ),
    ),
    PathElement(
      d: 'M15 9.75C15 10.1642 14.8321 10.5 14.625 10.5C14.4179 10.5 14.25 10.1642 14.25 9.75C14.25 9.33579 14.4179 9 14.625 9C14.8321 9 15 9.33579 15 9.75Z',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 600),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
        scaleKeyframe: ScaleKeyframeAnimation(
          keyframes: [1.0, 0.9, 1.3, 1.1],
          duration: Duration(milliseconds: 600),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
        translateKeyframe: TranslateKeyframeAnimation(
          keyframesX: [0.0, 0.0, 0.0, 0.0],
          keyframesY: [0.0, -0.5, 0.3, 0.0],
          duration: Duration(milliseconds: 600),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
      ),
    ),
  ],
);
