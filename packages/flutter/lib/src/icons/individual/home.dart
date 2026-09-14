import 'package:heroicons_animated/src/icons/icon_base.dart';

const home = HeroiconAnimatedIconData(
  name: 'home',
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
      d: 'M2.25 12L11.2045 3.04549C11.6438 2.60615 12.3562 2.60615 12.7955 3.04549L21.75 12M4.5 9.75V19.875C4.5 20.4963 5.00368 21 5.625 21H9.75V16.125C9.75 15.5037 10.2537 15 10.875 15H13.125C13.7463 15 14.25 15.5037 14.25 16.125V21H18.375C18.9963 21 19.5 20.4963 19.5 19.875V9.75M8.25 21H16.5',
    ),
  ],
);
