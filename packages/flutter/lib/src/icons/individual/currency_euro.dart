import 'package:heroicons_animated/src/icons/icon_base.dart';

const currencyEuro = HeroiconAnimatedIconData(
  name: 'currency-euro',
  animation: ScaleXYKeyframeAnimation(
    keyframesX: [1.0, -1.0, 1.0],
    keyframesY: [1.0, 1.0, 1.0],
    duration: Duration(milliseconds: 600),
    delay: Duration(milliseconds: 0),
    curve: Curves.easeInOut,
  ),
  elements: [
    PathElement(
      d: 'M14.25 7.75625C12.667 7.19798 10.8341 7.5519 9.56802 8.81802C7.81066 10.5754 7.81066 13.4246 9.56802 15.182C10.8341 16.4481 12.667 16.802 14.25 16.2437M7.5 10.5H12.75M7.5 13.5H12.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z',
    ),
  ],
);
