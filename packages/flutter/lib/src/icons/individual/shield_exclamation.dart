import 'package:heroicons_animated/src/icons/icon_base.dart';

const shieldExclamation = HeroiconAnimatedIconData(
  name: 'shield-exclamation',
  elements: [
    PathElement(
      d: 'M12 1.964A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Z',
    ),
    PathElement(
      d: 'M12 9v3.75',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 800),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
        opacityKeyframe: OpacityKeyframeAnimation(
          keyframes: [1.0, 0.4, 1.0],
          duration: Duration(milliseconds: 800),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
        scaleKeyframe: ScaleKeyframeAnimation(
          keyframes: [1.0, 1.1, 1.0],
          duration: Duration(milliseconds: 800),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
      ),
    ),
    PathElement(
      d: 'M12 15.75h.008v.008H12v-.008Z',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 800),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
        opacityKeyframe: OpacityKeyframeAnimation(
          keyframes: [1.0, 0.4, 1.0],
          duration: Duration(milliseconds: 800),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
        scaleKeyframe: ScaleKeyframeAnimation(
          keyframes: [1.0, 1.1, 1.0],
          duration: Duration(milliseconds: 800),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
      ),
    ),
  ],
);
