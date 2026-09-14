import 'package:heroicons_animated/src/icons/icon_base.dart';

const viewColumns = HeroiconAnimatedIconData(
  name: 'view-columns',
  elements: [
    PathElement(
      d: 'M4.125 19.5h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z',
    ),
    PathElement(
      d: 'M9 4.5v15',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 200),
        curve: Curves.linear,
        pathLength: PathLengthAnimation(
          from: 0.0,
          to: 1.0,
          fromOffset: 0.0,
          toOffset: 0.0,
          duration: Duration(milliseconds: 300),
          delay: Duration(milliseconds: 200),
          curve: Curves.linear,
        ),
        opacity: OpacityAnimation(
          from: 0.0,
          to: 1.0,
          duration: Duration(milliseconds: 300),
          delay: Duration(milliseconds: 200),
          curve: Curves.linear,
        ),
      ),
    ),
    PathElement(
      d: 'M15 4.5v15',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 350),
        curve: Curves.linear,
        pathLength: PathLengthAnimation(
          from: 0.0,
          to: 1.0,
          fromOffset: 0.0,
          toOffset: 0.0,
          duration: Duration(milliseconds: 300),
          delay: Duration(milliseconds: 350),
          curve: Curves.linear,
        ),
        opacity: OpacityAnimation(
          from: 0.0,
          to: 1.0,
          duration: Duration(milliseconds: 300),
          delay: Duration(milliseconds: 350),
          curve: Curves.linear,
        ),
      ),
    ),
  ],
);
