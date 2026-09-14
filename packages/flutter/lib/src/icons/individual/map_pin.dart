import 'package:heroicons_animated/src/icons/icon_base.dart';

const mapPin = HeroiconAnimatedIconData(
  name: 'map-pin',
  animation: TranslateKeyframeAnimation(
    keyframesX: [0.0, 0.0, 0.0],
    keyframesY: [0.0, -4.0, 0.0],
    duration: Duration(milliseconds: 400),
    delay: Duration(milliseconds: 0),
    curve: Curves.easeOut,
  ),
  elements: [
    PathElement(
      d: 'M15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z',
    ),
    PathElement(
      d: 'M19.5 10.5C19.5 17.6421 12 21.75 12 21.75C12 21.75 4.5 17.6421 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5Z',
    ),
  ],
);
