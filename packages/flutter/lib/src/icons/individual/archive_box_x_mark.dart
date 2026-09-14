import 'package:heroicons_animated/src/icons/icon_base.dart';

const archiveBoxXMark = HeroiconAnimatedIconData(
  name: 'archive-box-x-mark',
  elements: [
    PathElement(
      d: 'M19.6246 18.1321C19.5546 19.3214 18.5698 20.25 17.3785 20.25H6.62154C5.43022 20.25 4.44538 19.3214 4.37542 18.1321',
      animation: TranslateAnimation(
        fromX: 0.0,
        fromY: 0.0,
        toX: 0.0,
        toY: 1.0,
        duration: Duration(milliseconds: 200),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M20.25 7.5L19.6246 18.1321',
      animation: TranslateAnimation(
        fromX: 0.0,
        fromY: 0.0,
        toX: 0.0,
        toY: 1.0,
        duration: Duration(milliseconds: 200),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M3.75 7.5L4.37542 18.1321',
      animation: TranslateAnimation(
        fromX: 0.0,
        fromY: 0.0,
        toX: 0.0,
        toY: 1.0,
        duration: Duration(milliseconds: 200),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M9.75 11.625L14.25 16.125',
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
        translateKeyframe: TranslateKeyframeAnimation(
          keyframesX: [0.0, 0.0],
          keyframesY: [0.0, 1.0],
          duration: Duration(milliseconds: 500),
          delay: Duration(milliseconds: 200),
          curve: Curves.easeOut,
        ),
      ),
    ),
    PathElement(
      d: 'M14.25 11.625L9.75 16.125',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 400),
        curve: Curves.easeOut,
        pathLength: PathLengthAnimation(
          from: 0.0,
          to: 1.0,
          fromOffset: 0.0,
          toOffset: 0.0,
          duration: Duration(milliseconds: 500),
          delay: Duration(milliseconds: 400),
          curve: Curves.easeOut,
        ),
        opacity: OpacityAnimation(
          from: 0.0,
          to: 1.0,
          duration: Duration(milliseconds: 500),
          delay: Duration(milliseconds: 400),
          curve: Curves.easeOut,
        ),
        translateKeyframe: TranslateKeyframeAnimation(
          keyframesX: [0.0, 0.0],
          keyframesY: [0.0, 1.0],
          duration: Duration(milliseconds: 500),
          delay: Duration(milliseconds: 400),
          curve: Curves.easeOut,
        ),
      ),
    ),
    PathElement(
      d: 'M3.375 7.5H20.625C21.2463 7.5 21.75 6.99632 21.75 6.375V4.875C21.75 4.25368 21.2463 3.75 20.625 3.75H3.375C2.75368 3.75 2.25 4.25368 2.25 4.875V6.375C2.25 6.99632 2.75368 7.5 3.375 7.5Z',
      animation: TranslateAnimation(
        fromX: 0.0,
        fromY: 0.0,
        toX: 0.0,
        toY: -1.5,
        duration: Duration(milliseconds: 200),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
  ],
);
