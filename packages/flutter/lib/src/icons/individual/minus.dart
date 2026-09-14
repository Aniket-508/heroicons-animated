import 'package:heroicons_animated/src/icons/icon_base.dart';

const minus = HeroiconAnimatedIconData(
  name: 'minus',
  elements: [
    PathElement(
      d: 'M5 12h14',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
        pathLength: PathLengthAnimation(
          from: 0.0,
          to: 1.0,
          fromOffset: 0.0,
          toOffset: 0.0,
          duration: Duration(milliseconds: 300),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeOut,
        ),
        opacity: OpacityAnimation(
          from: 0.0,
          to: 1.0,
          duration: Duration(milliseconds: 300),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeOut,
        ),
      ),
    ),
  ],
);
