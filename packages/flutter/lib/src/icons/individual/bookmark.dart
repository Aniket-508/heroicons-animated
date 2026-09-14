import 'package:heroicons_animated/src/icons/icon_base.dart';

const bookmark = HeroiconAnimatedIconData(
  name: 'bookmark',
  elements: [
    PathElement(
      d: 'M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z',
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
