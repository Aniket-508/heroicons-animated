import 'package:heroicons_animated/src/icons/icon_base.dart';

const xCircle = HeroiconAnimatedIconData(
  name: 'x-circle',
  elements: [
    PathElement(d: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'),
    PathElement(
      d: 'm9.75 9.75 4.5 4.5',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
        pathLength: PathLengthAnimation(
          from: 0.0,
          to: 1.0,
          fromOffset: 0.0,
          toOffset: 0.0,
          duration: Duration(milliseconds: 500),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeOut,
        ),
        opacity: OpacityAnimation(
          from: 0.0,
          to: 1.0,
          duration: Duration(milliseconds: 500),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeOut,
        ),
      ),
    ),
    PathElement(
      d: 'm14.25 9.75-4.5 4.5',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 200),
        curve: Curves.easeOut,
        pathLength: PathLengthAnimation(
          from: 0.0,
          to: 1.0,
          fromOffset: 0.0,
          toOffset: 0.0,
          duration: Duration(milliseconds: 500),
          delay: Duration(milliseconds: 200),
          curve: Curves.easeOut,
        ),
        opacity: OpacityAnimation(
          from: 0.0,
          to: 1.0,
          duration: Duration(milliseconds: 500),
          delay: Duration(milliseconds: 200),
          curve: Curves.easeOut,
        ),
      ),
    ),
  ],
);
