import 'package:heroicons_animated/src/icons/icon_base.dart';

const lockClosed = HeroiconAnimatedIconData(
  name: 'lock-closed',
  animation: CombinedAnimation(
    duration: Duration(milliseconds: 500),
    delay: Duration(milliseconds: 0),
    curve: Curves.easeInOut,
    rotateKeyframe: RotateKeyframeAnimation(
      keyframes: [-3.0, 2.0, -2.0, 1.0, 0.0],
      duration: Duration(milliseconds: 500),
      delay: Duration(milliseconds: 0),
      curve: Curves.easeInOut,
    ),
    scaleKeyframe: ScaleKeyframeAnimation(
      keyframes: [1.0, 1.02, 0.98, 1.0],
      duration: Duration(milliseconds: 500),
      delay: Duration(milliseconds: 0),
      curve: Curves.easeInOut,
    ),
  ),
  elements: [
    PathElement(
      d: 'M16.5 10.5V6.75C16.5 4.26472 14.4853 2.25 12 2.25C9.51472 2.25 7.5 4.26472 7.5 6.75V10.5',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, 0.0, 0.0],
        keyframesY: [0.0, -1.0, 0.0],
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
      ),
    ),
    PathElement(
      d: 'M6.75 21.75H17.25C18.4926 21.75 19.5 20.7426 19.5 19.5V12.75C19.5 11.5074 18.4926 10.5 17.25 10.5H6.75C5.50736 10.5 4.5 11.5074 4.5 12.75V19.5C4.5 20.7426 5.50736 21.75 6.75 21.75Z',
    ),
  ],
);
