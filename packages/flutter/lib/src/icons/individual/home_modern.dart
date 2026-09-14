import 'package:heroicons_animated/src/icons/icon_base.dart';

const homeModern = HeroiconAnimatedIconData(
  name: 'home-modern',
  animation: CombinedAnimation(
    duration: Duration(milliseconds: 400),
    delay: Duration(milliseconds: 0),
    curve: Curves.easeOut,
    scaleKeyframe: ScaleKeyframeAnimation(
      keyframes: [1.0, 1.1, 1.0],
      duration: Duration(milliseconds: 400),
      delay: Duration(milliseconds: 0),
      curve: Curves.easeOut,
    ),
    translateKeyframe: TranslateKeyframeAnimation(
      keyframesX: [0.0, 0.0, 0.0],
      keyframesY: [0.0, -1.0, 0.0],
      duration: Duration(milliseconds: 400),
      delay: Duration(milliseconds: 0),
      curve: Curves.easeOut,
    ),
  ),
  elements: [
    PathElement(
      d: 'M8.25 21V16.125C8.25 15.5037 8.75368 15 9.375 15H11.625C12.2463 15 12.75 15.5037 12.75 16.125V21M12.75 21H17.25V3.54545M12.75 21H20.25V10.75M2.25 21H3.75M21.75 21H3.75M2.25 9L6.75 7.36364M18.75 3L17.25 3.54545M17.25 9.75L20.25 10.75M21.75 11.25L20.25 10.75M6.75 7.36364V3H3.75V21M6.75 7.36364L17.25 3.54545',
    ),
  ],
);
