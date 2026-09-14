import 'package:heroicons_animated/src/icons/icon_base.dart';

const codeBracket = HeroiconAnimatedIconData(
  name: 'code-bracket',
  elements: [
    PathElement(
      d: 'M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5',
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
          duration: Duration(milliseconds: 600),
          delay: Duration(milliseconds: 0),
          curve: Curves.linear,
        ),
      ),
    ),
  ],
);
