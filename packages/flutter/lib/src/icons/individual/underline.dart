import 'package:heroicons_animated/src/icons/icon_base.dart';

const underline = HeroiconAnimatedIconData(
  name: 'underline',
  elements: [
    PathElement(
      d: 'M17.995 3.744v7.5a6 6 0 1 1-12 0v-7.5',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 0),
        curve: Curves.linear,
        pathLength: PathLengthAnimation(
          from: 0.0,
          to: 1.0,
          fromOffset: 1.0,
          toOffset: 0.0,
          duration: Duration(milliseconds: 300),
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
    PathElement(
      d: 'M3.745 20.246h16.5',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 100),
        delay: Duration(milliseconds: 300),
        curve: Curves.linear,
        pathLength: PathLengthAnimation(
          from: 0.0,
          to: 1.0,
          fromOffset: 0.0,
          toOffset: 0.0,
          duration: Duration(milliseconds: 100),
          delay: Duration(milliseconds: 300),
          curve: Curves.linear,
        ),
        opacity: OpacityAnimation(
          from: 0.0,
          to: 1.0,
          duration: Duration(milliseconds: 100),
          delay: Duration(milliseconds: 300),
          curve: Curves.linear,
        ),
      ),
    ),
  ],
);
