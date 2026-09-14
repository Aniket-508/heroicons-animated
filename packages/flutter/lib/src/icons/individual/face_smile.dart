import 'package:heroicons_animated/src/icons/icon_base.dart';

const faceSmile = HeroiconAnimatedIconData(
  name: 'face-smile',
  animation: CombinedAnimation(
    duration: Duration(milliseconds: 800),
    delay: Duration(milliseconds: 0),
    curve: Curves.easeInOut,
    rotateKeyframe: RotateKeyframeAnimation(
      keyframes: [0.0, -3.0, 3.0, 0.0],
      duration: Duration(milliseconds: 800),
      delay: Duration(milliseconds: 0),
      curve: Curves.easeInOut,
    ),
    scaleKeyframe: ScaleKeyframeAnimation(
      keyframes: [1.0, 1.15, 1.05, 1.1],
      duration: Duration(milliseconds: 800),
      delay: Duration(milliseconds: 0),
      curve: Curves.easeInOut,
    ),
  ),
  elements: [
    CircleElement(cx: 12, cy: 12, r: 9),
    PathElement(
      d: 'M15.182 15.182C13.4246 16.9393 10.5754 16.9393 8.81802 15.182',
      animation: PathLengthKeyframeAnimation(
        keyframes: [0.3, 1.0, 1.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 100),
        curve: Curves.easeInOut,
      ),
    ),
    PathElement(
      d: 'M14.5 14C13 15.5 11 15.5 9.5 14',
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
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
        scaleKeyframe: ScaleKeyframeAnimation(
          keyframes: [1.0, 1.5, 0.8, 1.2],
          duration: Duration(milliseconds: 500),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
      ),
    ),
    PathElement(
      d: 'M15 9.75C15 10.1642 14.8321 10.5 14.625 10.5C14.4179 10.5 14.25 10.1642 14.25 9.75C14.25 9.33579 14.4179 9 14.625 9C14.8321 9 15 9.33579 15 9.75Z',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
        scaleKeyframe: ScaleKeyframeAnimation(
          keyframes: [1.0, 1.5, 0.8, 1.2],
          duration: Duration(milliseconds: 500),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
      ),
    ),
  ],
);
