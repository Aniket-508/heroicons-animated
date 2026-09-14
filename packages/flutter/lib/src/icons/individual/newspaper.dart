import 'package:heroicons_animated/src/icons/icon_base.dart';

const newspaper = HeroiconAnimatedIconData(
  name: 'newspaper',
  elements: [
    PathElement(
      d: 'M16.5 7.5h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5',
    ),
    PathElement(
      d: 'M6 7.5h3v3H6v-3Z',
      animation: OpacityAnimation(
        from: 0.0,
        to: 1.0,
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M12 7.5h1.5',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 200),
        delay: Duration(milliseconds: 200),
        curve: Curves.easeOut,
        pathLength: PathLengthAnimation(
          from: 0.0,
          to: 1.0,
          fromOffset: 0.0,
          toOffset: 0.0,
          duration: Duration(milliseconds: 200),
          delay: Duration(milliseconds: 200),
          curve: Curves.easeOut,
        ),
        opacity: OpacityAnimation(
          from: 0.0,
          to: 1.0,
          duration: Duration(milliseconds: 100),
          delay: Duration(milliseconds: 200),
          curve: Curves.easeOut,
        ),
      ),
    ),
    PathElement(
      d: 'M12 10.5h1.5',
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
      d: 'M6 13.5h7.5',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 200),
        delay: Duration(milliseconds: 400),
        curve: Curves.easeOut,
        pathLength: PathLengthAnimation(
          from: 0.0,
          to: 1.0,
          fromOffset: 0.0,
          toOffset: 0.0,
          duration: Duration(milliseconds: 200),
          delay: Duration(milliseconds: 400),
          curve: Curves.easeOut,
        ),
        opacity: OpacityAnimation(
          from: 0.0,
          to: 1.0,
          duration: Duration(milliseconds: 100),
          delay: Duration(milliseconds: 400),
          curve: Curves.easeOut,
        ),
      ),
    ),
    PathElement(
      d: 'M6 16.5h7.5',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 200),
        delay: Duration(milliseconds: 500),
        curve: Curves.easeOut,
        pathLength: PathLengthAnimation(
          from: 0.0,
          to: 1.0,
          fromOffset: 0.0,
          toOffset: 0.0,
          duration: Duration(milliseconds: 200),
          delay: Duration(milliseconds: 500),
          curve: Curves.easeOut,
        ),
        opacity: OpacityAnimation(
          from: 0.0,
          to: 1.0,
          duration: Duration(milliseconds: 100),
          delay: Duration(milliseconds: 500),
          curve: Curves.easeOut,
        ),
      ),
    ),
  ],
);
