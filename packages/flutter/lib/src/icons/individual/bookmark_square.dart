import 'package:heroicons_animated/src/icons/icon_base.dart';

const bookmarkSquare = HeroiconAnimatedIconData(
  name: 'bookmark-square',
  elements: [
    PathElement(
      d: 'M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9',
      animation: ScaleXYKeyframeAnimation(
        keyframesX: [1.0, 0.9, 1.1, 0.95, 1.0],
        keyframesY: [1.0, 1.3, 0.9, 1.05, 1.0],
        duration: Duration(milliseconds: 600),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
  ],
);
