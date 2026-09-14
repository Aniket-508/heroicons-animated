import 'package:heroicons_animated/src/icons/icon_base.dart';

const creditCard = HeroiconAnimatedIconData(
  name: 'credit-card',
  elements: [
    PathElement(
      d: 'M2.25 8.25h19.5M2.25 9h19.5M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z',
    ),
    PathElement(
      d: 'M5.25 14.25h6',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 600),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
        pathLengthKeyframe: PathLengthKeyframeAnimation(
          keyframes: [1.0, 0.0, 1.0],
          duration: Duration(milliseconds: 600),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeOut,
        ),
        opacityKeyframe: OpacityKeyframeAnimation(
          keyframes: [1.0, 0.0, 1.0],
          duration: Duration(milliseconds: 600),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeOut,
        ),
      ),
    ),
    PathElement(
      d: 'M5.25 16.5h3',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 600),
        delay: Duration(milliseconds: 100),
        curve: Curves.easeOut,
        pathLengthKeyframe: PathLengthKeyframeAnimation(
          keyframes: [1.0, 0.0, 1.0],
          duration: Duration(milliseconds: 600),
          delay: Duration(milliseconds: 100),
          curve: Curves.easeOut,
        ),
        opacityKeyframe: OpacityKeyframeAnimation(
          keyframes: [1.0, 0.0, 1.0],
          duration: Duration(milliseconds: 600),
          delay: Duration(milliseconds: 100),
          curve: Curves.easeOut,
        ),
      ),
    ),
  ],
);
