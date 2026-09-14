import 'package:heroicons_animated/src/icons/icon_base.dart';

const battery50 = HeroiconAnimatedIconData(
  name: 'battery-50',
  elements: [
    PathElement(
      d: 'M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21',
    ),
    PathElement(
      d: 'M3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z',
    ),
    PathElement(d: 'M4.5 10.5h6.75V15H4.5v-4.5Z'),
    PathElement(
      d: 'M4.5 10.5h6.75V15H4.5v-4.5Z',
      fill: true,
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 400),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
        opacity: OpacityAnimation(
          from: 0.0,
          to: 1.0,
          duration: Duration(milliseconds: 400),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeOut,
        ),
        scaleXY: ScaleXYAnimation(
          fromX: 0.0,
          toX: 1.0,
          fromY: 1.0,
          toY: 1.0,
          originX: 0.0,
          originY: 0.5,
          duration: Duration(milliseconds: 400),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeOut,
        ),
      ),
    ),
  ],
);
