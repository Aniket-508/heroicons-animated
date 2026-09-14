import 'package:heroicons_animated/src/icons/icon_base.dart';

const h1 = HeroiconAnimatedIconData(
  name: 'h1',
  elements: [
    PathElement(
      d: 'M2.243 4.493v7.5m0 0v7.502m0-7.501h10.5m0-7.5v7.5m0 0v7.501',
    ),
    PathElement(
      d: 'M17.244 10.868l2.25-1.5v10.126h-2.25m2.25 0h2.25',
      animation: ScaleAnimation(
        from: 1.0,
        to: 1.05,
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
  ],
);
