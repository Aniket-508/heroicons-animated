import 'package:heroicons_animated/src/icons/icon_base.dart';

const shoppingCart = HeroiconAnimatedIconData(
  name: 'shopping-cart',
  animation: CombinedAnimation(
    duration: Duration(milliseconds: 300),
    delay: Duration(milliseconds: 0),
    curve: Curves.easeInOut,
    scale: ScaleAnimation(
      from: 1.0,
      to: 1.1,
      duration: Duration(milliseconds: 300),
      delay: Duration(milliseconds: 0),
      curve: Curves.easeInOut,
    ),
    translateKeyframe: TranslateKeyframeAnimation(
      keyframesX: [0.0, 0.0, 0.0],
      keyframesY: [0.0, -5.0, 0.0],
      duration: Duration(milliseconds: 300),
      delay: Duration(milliseconds: 100),
      curve: Curves.easeInOut,
    ),
  ),
  elements: [
    PathElement(
      d: 'M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z',
    ),
  ],
);
