import 'package:heroicons_animated/src/icons/icon_base.dart';

const buildingOffice = HeroiconAnimatedIconData(
  name: 'building-office',
  elements: [
    PathElement(
      d: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21',
    ),
    PathElement(
      d: 'M9 12.75h1.5',
      animation: OpacityAnimation(
        from: 0.0,
        to: 1.0,
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 100),
        curve: Curves.linear,
      ),
    ),
    PathElement(
      d: 'M13.5 12.75H15',
      animation: OpacityAnimation(
        from: 0.0,
        to: 1.0,
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 100),
        curve: Curves.linear,
      ),
    ),
    PathElement(
      d: 'M9 9.75h1.5',
      animation: OpacityAnimation(
        from: 0.0,
        to: 1.0,
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 250),
        curve: Curves.linear,
      ),
    ),
    PathElement(
      d: 'M13.5 9.75H15',
      animation: OpacityAnimation(
        from: 0.0,
        to: 1.0,
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 250),
        curve: Curves.linear,
      ),
    ),
    PathElement(
      d: 'M9 6.75h1.5',
      animation: OpacityAnimation(
        from: 0.0,
        to: 1.0,
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 400),
        curve: Curves.linear,
      ),
    ),
    PathElement(
      d: 'M13.5 6.75H15',
      animation: OpacityAnimation(
        from: 0.0,
        to: 1.0,
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 400),
        curve: Curves.linear,
      ),
    ),
  ],
);
