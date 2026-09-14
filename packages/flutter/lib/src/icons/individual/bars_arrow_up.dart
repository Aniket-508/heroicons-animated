import 'package:heroicons_animated/src/icons/icon_base.dart';

const barsArrowUp = HeroiconAnimatedIconData(
  name: 'bars-arrow-up',
  elements: [
    PathElement(
      d: 'M13.5 12.75L17.25 9L21 12.75M17.25 9v12',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, 0.0, 0.0],
        keyframesY: [0.0, -2.0, 0.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
      ),
    ),
    PathElement(d: 'M3 4.5h14.25M3 9h9.75M3 13.5h5.25'),
  ],
);
