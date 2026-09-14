import 'package:heroicons_animated/src/icons/icon_base.dart';

const informationCircle = HeroiconAnimatedIconData(
  name: 'information-circle',
  elements: [
    PathElement(
      d: 'M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z',
    ),
    PathElement(
      d: 'M11.25 11.25L11.2915 11.2293C11.8646 10.9427 12.5099 11.4603 12.3545 12.082L11.6455 14.918C11.4901 15.5397 12.1354 16.0573 12.7085 15.7707L12.75 15.75',
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
      d: 'M12 8.25H12.0075V8.2575H12V8.25Z',
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
