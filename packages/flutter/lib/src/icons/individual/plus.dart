import 'package:heroicons_animated/src/icons/icon_base.dart';

const plus = HeroiconAnimatedIconData(
  name: 'plus',
  animation: RotateAnimation(
    fromDegrees: 0.0,
    toDegrees: 180.0,
    duration: Duration(milliseconds: 500),
    delay: Duration(milliseconds: 0),
    curve: Curves.easeOut,
  ),
  elements: [PathElement(d: 'M5 12h14'), PathElement(d: 'M12 5v14')],
);
