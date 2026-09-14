import 'package:heroicons_animated/src/icons/icon_base.dart';

const bookmarkSlash = HeroiconAnimatedIconData(
  name: 'bookmark-slash',
  animation: TranslateKeyframeAnimation(
    keyframesX: [0.0, -1.68, 1.68, -1.68, 1.68, 0.0],
    keyframesY: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    duration: Duration(milliseconds: 600),
    delay: Duration(milliseconds: 0),
    curve: Curves.easeInOut,
  ),
  elements: [
    PathElement(
      d: 'm3 3 1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 0 1 1.743-1.342 48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664 19.5 19.5',
    ),
  ],
);
