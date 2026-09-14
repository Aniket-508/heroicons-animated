import 'package:heroicons_animated/src/icons/icon_base.dart';

const codeBracketSquare = HeroiconAnimatedIconData(
  name: 'code-bracket-square',
  elements: [
    PathElement(
      d: 'M9.75 9.75L7.5 12l2.25 2.25',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
        translateKeyframe: TranslateKeyframeAnimation(
          keyframesX: [0.0, -1.5, 0.0],
          keyframesY: [0.0, 0.0, 0.0],
          duration: Duration(milliseconds: 500),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
        rotateKeyframe: RotateKeyframeAnimation(
          keyframes: [0.0, 6.0, 0.0],
          duration: Duration(milliseconds: 500),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
      ),
    ),
    PathElement(
      d: 'M14.25 9.75 16.5 12l-2.25 2.25',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
        translateKeyframe: TranslateKeyframeAnimation(
          keyframesX: [0.0, 1.5, 0.0],
          keyframesY: [0.0, 0.0, 0.0],
          duration: Duration(milliseconds: 500),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
        rotateKeyframe: RotateKeyframeAnimation(
          keyframes: [0.0, -6.0, 0.0],
          duration: Duration(milliseconds: 500),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
      ),
    ),
    PathElement(
      d: 'M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z',
    ),
  ],
);
