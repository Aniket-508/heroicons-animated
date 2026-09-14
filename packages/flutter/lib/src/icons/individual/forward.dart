import 'package:heroicons_animated/src/icons/icon_base.dart';

const forward = HeroiconAnimatedIconData(
  name: 'forward',
  animation: CombinedAnimation(
    duration: Duration(milliseconds: 500),
    delay: Duration(milliseconds: 0),
    curve: Curves.easeOut,
    rotateKeyframe: RotateKeyframeAnimation(
      keyframes: [0.0, -10.0, 0.0, 0.0],
      duration: Duration(milliseconds: 500),
      delay: Duration(milliseconds: 0),
      curve: Curves.easeOut,
    ),
    translateKeyframe: TranslateKeyframeAnimation(
      keyframesX: [0.0, -1.0, 2.0, 0.0],
      keyframesY: [0.0, 0.0, 0.0, 0.0],
      duration: Duration(milliseconds: 500),
      delay: Duration(milliseconds: 0),
      curve: Curves.easeOut,
    ),
  ),
  elements: [
    PathElement(
      d: 'M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z',
    ),
  ],
);
