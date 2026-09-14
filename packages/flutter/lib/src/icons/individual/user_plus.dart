import 'package:heroicons_animated/src/icons/icon_base.dart';

const userPlus = HeroiconAnimatedIconData(
  name: 'user-plus',
  elements: [
    PathElement(
      d: 'M13.75 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z',
    ),
    PathElement(
      d: 'M18 7.5v6',
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
      d: 'M15 10.5h6',
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
