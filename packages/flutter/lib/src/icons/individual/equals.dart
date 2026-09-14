import 'package:heroicons_animated/src/icons/icon_base.dart';

const equals = HeroiconAnimatedIconData(
  name: 'equals',
  elements: [
    PathElement(
      d: 'M4.499 8.248h15m-15 7.501h15',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 400),
        delay: Duration(milliseconds: 0),
        curve: Curves.linear,
        pathLength: PathLengthAnimation(
          from: 0.0,
          to: 1.0,
          fromOffset: 0.0,
          toOffset: 0.0,
          duration: Duration(milliseconds: 400),
          delay: Duration(milliseconds: 0),
          curve: Curves.linear,
        ),
        opacity: OpacityAnimation(
          from: 0.0,
          to: 1.0,
          duration: Duration(milliseconds: 400),
          delay: Duration(milliseconds: 0),
          curve: Curves.linear,
        ),
      ),
    ),
  ],
);
