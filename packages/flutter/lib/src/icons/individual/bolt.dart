import 'package:heroicons_animated/src/icons/icon_base.dart';

const bolt = HeroiconAnimatedIconData(
  name: 'bolt',
  elements: [
    PathElement(
      d: 'm3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 600),
        delay: Duration(milliseconds: 0),
        curve: Curves.linear,
        pathLength: PathLengthAnimation(
          from: 0.0,
          to: 1.0,
          fromOffset: 1.0,
          toOffset: 0.0,
          duration: Duration(milliseconds: 600),
          delay: Duration(milliseconds: 0),
          curve: Curves.linear,
        ),
        opacity: OpacityAnimation(
          from: 0.0,
          to: 1.0,
          duration: Duration(milliseconds: 100),
          delay: Duration(milliseconds: 0),
          curve: Curves.linear,
        ),
      ),
    ),
  ],
);
