import 'package:heroicons_animated/src/icons/icon_base.dart';

const magnifyingGlassPlus = HeroiconAnimatedIconData(
  name: 'magnifying-glass-plus',
  elements: [
    PathElement(
      d: 'm21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z',
    ),
    PathElement(
      d: 'M10.5 7.5v6',
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
          duration: Duration(milliseconds: 200),
          delay: Duration(milliseconds: 300),
          curve: Curves.easeOut,
        ),
      ),
    ),
    PathElement(
      d: 'M7.5 10.5h6',
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
          duration: Duration(milliseconds: 200),
          delay: Duration(milliseconds: 600),
          curve: Curves.easeOut,
        ),
      ),
    ),
  ],
);
