import 'package:heroicons_animated/src/icons/icon_base.dart';

const paperClip = HeroiconAnimatedIconData(
  name: 'paper-clip',
  elements: [
    PathElement(
      d: 'm18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 1200),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
        pathLength: PathLengthAnimation(
          from: 0.0,
          to: 1.0,
          fromOffset: 1.0,
          toOffset: 0.0,
          duration: Duration(milliseconds: 1200),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
      ),
    ),
  ],
);
