import 'package:heroicons_animated/src/icons/icon_base.dart';

const squaresPlus = HeroiconAnimatedIconData(
  name: 'squares-plus',
  elements: [
    PathElement(
      d: 'M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z',
    ),
    PathElement(
      d: 'M16.875 13.5v6.75',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 200),
        delay: Duration(milliseconds: 300),
        curve: Curves.easeOut,
        pathLength: PathLengthAnimation(
          from: 0.0,
          to: 1.0,
          fromOffset: 0.0,
          toOffset: 0.0,
          duration: Duration(milliseconds: 200),
          delay: Duration(milliseconds: 300),
          curve: Curves.easeOut,
        ),
        opacity: OpacityAnimation(
          from: 0.0,
          to: 1.0,
          duration: Duration(milliseconds: 100),
          delay: Duration(milliseconds: 300),
          curve: Curves.easeOut,
        ),
      ),
    ),
    PathElement(
      d: 'M13.5 16.875h6.75',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 200),
        delay: Duration(milliseconds: 600),
        curve: Curves.easeOut,
        pathLength: PathLengthAnimation(
          from: 0.0,
          to: 1.0,
          fromOffset: 0.0,
          toOffset: 0.0,
          duration: Duration(milliseconds: 200),
          delay: Duration(milliseconds: 600),
          curve: Curves.easeOut,
        ),
        opacity: OpacityAnimation(
          from: 0.0,
          to: 1.0,
          duration: Duration(milliseconds: 100),
          delay: Duration(milliseconds: 600),
          curve: Curves.easeOut,
        ),
      ),
    ),
  ],
);
