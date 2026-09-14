import 'package:heroicons_animated/src/icons/icon_base.dart';

const sun = HeroiconAnimatedIconData(
  name: 'sun',
  elements: [
    CircleElement(cx: 12, cy: 12, r: 3.75),
    PathElement(
      d: 'M12 3V5.25',
      animation: OpacityAnimation(
        from: 0.0,
        to: 1.0,
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M18.364 5.63604L16.773 7.22703',
      animation: OpacityAnimation(
        from: 0.0,
        to: 1.0,
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 100),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M21 12H18.75',
      animation: OpacityAnimation(
        from: 0.0,
        to: 1.0,
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 200),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M18.364 18.364L16.773 16.773',
      animation: OpacityAnimation(
        from: 0.0,
        to: 1.0,
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 300),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M12 18.75V21',
      animation: OpacityAnimation(
        from: 0.0,
        to: 1.0,
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 400),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M7.22703 16.773L5.63604 18.364',
      animation: OpacityAnimation(
        from: 0.0,
        to: 1.0,
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 500),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M5.25 12H3',
      animation: OpacityAnimation(
        from: 0.0,
        to: 1.0,
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 600),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M7.22703 7.22703L5.63604 5.63604',
      animation: OpacityAnimation(
        from: 0.0,
        to: 1.0,
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 700),
        curve: Curves.easeOut,
      ),
    ),
  ],
);
