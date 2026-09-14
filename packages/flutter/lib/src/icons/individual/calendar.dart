import 'package:heroicons_animated/src/icons/icon_base.dart';

const calendar = HeroiconAnimatedIconData(
  name: 'calendar',
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
      d: 'M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.25736 4.00736 5.25 5.25 5.25H18.75C19.9926 5.25 21 6.25736 21 7.5V18.75M3 18.75C3 19.9926 4.00736 21 5.25 21H18.75C19.9926 21 21 19.9926 21 18.75M3 18.75V11.25C3 10.0074 4.00736 9 5.25 9H18.75C19.9926 9 21 10.0074 21 11.25V18.75',
    ),
  ],
);
