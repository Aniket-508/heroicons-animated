import 'package:heroicons_animated/src/icons/icon_base.dart';

const language = HeroiconAnimatedIconData(
  name: 'language',
  elements: [
    PathElement(
      d: 'm10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
        pathLength: PathLengthAnimation(
          from: 0.0,
          to: 1.0,
          fromOffset: 1.0,
          toOffset: 0.0,
          duration: Duration(milliseconds: 500),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
        opacity: OpacityAnimation(
          from: 0.0,
          to: 1.0,
          duration: Duration(milliseconds: 500),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
      ),
    ),
  ],
);
