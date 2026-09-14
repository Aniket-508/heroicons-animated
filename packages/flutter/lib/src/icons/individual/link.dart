import 'package:heroicons_animated/src/icons/icon_base.dart';

const link = HeroiconAnimatedIconData(
  name: 'link',
  elements: [
    PathElement(
      d: 'M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 1000),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
        pathLengthKeyframe: PathLengthKeyframeAnimation(
          keyframes: [1.0, 0.97, 1.0, 0.97, 1.0],
          offsetKeyframes: [0.0, 0.05, 0.0, 0.05, 0.0],
          duration: Duration(milliseconds: 1000),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
        rotateKeyframe: RotateKeyframeAnimation(
          keyframes: [0.0, -5.0, 0.0],
          duration: Duration(milliseconds: 1000),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
      ),
    ),
  ],
);
