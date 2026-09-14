import 'package:heroicons_animated/src/icons/icon_base.dart';

const magnifyingGlass = HeroiconAnimatedIconData(
  name: 'magnifying-glass',
  animation: TranslateKeyframeAnimation(
    keyframesX: [0.0, 0.0, -3.0, 0.0],
    keyframesY: [0.0, -4.0, 0.0, 0.0],
    duration: Duration(milliseconds: 1000),
    delay: Duration(milliseconds: 0),
    curve: Curves.easeOut,
  ),
  elements: [
    PathElement(
      d: 'M21 21L15.8033 15.8033M15.8033 15.8033C17.1605 14.4461 18 12.5711 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C12.5711 18 14.4461 17.1605 15.8033 15.8033Z',
    ),
  ],
);
