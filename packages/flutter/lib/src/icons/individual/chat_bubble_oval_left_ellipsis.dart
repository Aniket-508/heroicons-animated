import 'package:heroicons_animated/src/icons/icon_base.dart';

const chatBubbleOvalLeftEllipsis = HeroiconAnimatedIconData(
  name: 'chat-bubble-oval-left-ellipsis',
  elements: [
    PathElement(
      d: 'M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0',
      animation: OpacityKeyframeAnimation(
        keyframes: [1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0],
        duration: Duration(milliseconds: 1500),
        delay: Duration(milliseconds: 0),
        curve: Curves.linear,
      ),
    ),
    PathElement(
      d: 'M12.75 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0',
      animation: OpacityKeyframeAnimation(
        keyframes: [1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0],
        duration: Duration(milliseconds: 1500),
        delay: Duration(milliseconds: 100),
        curve: Curves.linear,
      ),
    ),
    PathElement(
      d: 'M16.875 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0',
      animation: OpacityKeyframeAnimation(
        keyframes: [1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0],
        duration: Duration(milliseconds: 1500),
        delay: Duration(milliseconds: 200),
        curve: Curves.linear,
      ),
    ),
    PathElement(
      d: 'M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z',
    ),
  ],
);
