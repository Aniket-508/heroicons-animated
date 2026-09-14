import 'package:heroicons_animated/src/icons/icon_base.dart';

const clock = HeroiconAnimatedIconData(
  name: 'clock',
  elements: [
    PathElement(
      d: 'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
      animation: RotateAnimation(
        fromDegrees: 0.0,
        toDegrees: 360.0,
        duration: Duration(milliseconds: 600),
        delay: Duration(milliseconds: 0),
        curve: Cubic(0.4, 0.0, 0.2, 1.0),
      ),
    ),
  ],
);
