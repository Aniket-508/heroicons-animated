import 'package:heroicons_animated/src/icons/icon_base.dart';

const boltSlash = HeroiconAnimatedIconData(
  name: 'bolt-slash',
  animation: TranslateKeyframeAnimation(
    keyframesX: [0.0, -1.68, 1.68, -1.68, 1.68, 0.0],
    keyframesY: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    duration: Duration(milliseconds: 600),
    delay: Duration(milliseconds: 0),
    curve: Curves.easeInOut,
  ),
  elements: [
    PathElement(
      d: 'M11.412 15.655 9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457 3 3m5.457 5.457 7.086 7.086m0 0L21 21',
    ),
  ],
);
