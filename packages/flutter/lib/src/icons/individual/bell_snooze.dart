import 'package:heroicons_animated/src/icons/icon_base.dart';

const bellSnooze = HeroiconAnimatedIconData(
  name: 'bell-snooze',
  elements: [
    PathElement(
      d: 'M14.8569 17.0817C16.7514 16.857 18.5783 16.4116 20.3111 15.7719C18.8743 14.177 17.9998 12.0656 17.9998 9.75V9.04919C17.9999 9.03281 18 9.01641 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9L5.9998 9.75C5.9998 12.0656 5.12527 14.177 3.68848 15.7719C5.4214 16.4116 7.24843 16.857 9.14314 17.0818M14.8569 17.0817C13.92 17.1928 12.9666 17.25 11.9998 17.25C11.0332 17.25 10.0799 17.1929 9.14314 17.0818M14.8569 17.0817C14.9498 17.3711 15 17.6797 15 18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18C9 17.6797 9.05019 17.3712 9.14314 17.0818',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 800),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
        rotateKeyframe: RotateKeyframeAnimation(
          keyframes: [0.0, -8.0, -8.0, 0.0],
          duration: Duration(milliseconds: 800),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
        scaleKeyframe: ScaleKeyframeAnimation(
          keyframes: [1.0, 0.97, 0.97, 1.0],
          duration: Duration(milliseconds: 800),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
      ),
    ),
    PathElement(
      d: 'M10.5 8.25H13.5L10.5 12.75H13.5',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 800),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
        opacityKeyframe: OpacityKeyframeAnimation(
          keyframes: [1.0, 1.0, 0.6, 1.0],
          duration: Duration(milliseconds: 800),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
        scaleKeyframe: ScaleKeyframeAnimation(
          keyframes: [1.0, 1.1, 1.15, 1.0],
          duration: Duration(milliseconds: 800),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
        translateKeyframe: TranslateKeyframeAnimation(
          keyframesX: [0.0, 0.0, 0.0, 0.0],
          keyframesY: [0.0, -1.0, -2.0, 0.0],
          duration: Duration(milliseconds: 800),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
      ),
    ),
  ],
);
