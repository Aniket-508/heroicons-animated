import 'package:heroicons_animated/src/icons/icon_base.dart';

const chatBubbleLeftEllipsis = HeroiconAnimatedIconData(
  name: 'chat-bubble-left-ellipsis',
  elements: [
    PathElement(
      d: 'M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0',
      animation: OpacityKeyframeAnimation(
        keyframes: [1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0],
        duration: Duration(milliseconds: 1500),
        delay: Duration(milliseconds: 0),
        curve: Curves.linear,
      ),
    ),
    PathElement(
      d: 'M12.75 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0',
      animation: OpacityKeyframeAnimation(
        keyframes: [1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0],
        duration: Duration(milliseconds: 1500),
        delay: Duration(milliseconds: 100),
        curve: Curves.linear,
      ),
    ),
    PathElement(
      d: 'M16.875 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0',
      animation: OpacityKeyframeAnimation(
        keyframes: [1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0],
        duration: Duration(milliseconds: 1500),
        delay: Duration(milliseconds: 200),
        curve: Curves.linear,
      ),
    ),
    PathElement(
      d: 'M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z',
    ),
  ],
);
