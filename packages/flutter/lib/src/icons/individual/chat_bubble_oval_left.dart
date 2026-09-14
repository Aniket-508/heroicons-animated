import 'package:heroicons_animated/src/icons/icon_base.dart';

const chatBubbleOvalLeft = HeroiconAnimatedIconData(
  name: 'chat-bubble-oval-left',
  animation: CombinedAnimation(
    duration: Duration(milliseconds: 500),
    delay: Duration(milliseconds: 0),
    curve: Curves.easeOut,
    rotateKeyframe: RotateKeyframeAnimation(
      keyframes: [0.0, -7.0, 7.0, 0.0],
      duration: Duration(milliseconds: 500),
      delay: Duration(milliseconds: 0),
      curve: Curves.easeInOut,
    ),
    scaleKeyframe: ScaleKeyframeAnimation(
      keyframes: [1.0, 1.05, 1.0],
      duration: Duration(milliseconds: 500),
      delay: Duration(milliseconds: 0),
      curve: Curves.easeOut,
    ),
  ),
  elements: [
    PathElement(
      d: 'M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z',
    ),
  ],
);
