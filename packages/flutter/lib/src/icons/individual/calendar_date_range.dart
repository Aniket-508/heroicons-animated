import 'package:heroicons_animated/src/icons/icon_base.dart';

const calendarDateRange = HeroiconAnimatedIconData(
  name: 'calendar-date-range',
  elements: [
    PathElement(
      d: 'M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5',
    ),
    PathElement(
      d: 'M12 12.75h.005v.006H12v-.006Z',
      animation: OpacityKeyframeAnimation(
        keyframes: [1.0, 0.3, 1.0],
        duration: Duration(milliseconds: 400),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M14.25 12.75h2.25',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 400),
        curve: Curves.easeOut,
        pathLength: PathLengthAnimation(
          from: 0.0,
          to: 1.0,
          duration: Duration(milliseconds: 300),
          delay: Duration(milliseconds: 400),
          curve: Curves.easeOut,
        ),
        opacity: OpacityAnimation(
          from: 0.0,
          to: 1.0,
          duration: Duration(milliseconds: 300),
          delay: Duration(milliseconds: 400),
          curve: Curves.easeOut,
        ),
      ),
    ),
    PathElement(
      d: 'M7.5 15h4.5',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 550),
        curve: Curves.easeOut,
        pathLength: PathLengthAnimation(
          from: 0.0,
          to: 1.0,
          duration: Duration(milliseconds: 300),
          delay: Duration(milliseconds: 550),
          curve: Curves.easeOut,
        ),
        opacity: OpacityAnimation(
          from: 0.0,
          to: 1.0,
          duration: Duration(milliseconds: 300),
          delay: Duration(milliseconds: 550),
          curve: Curves.easeOut,
        ),
      ),
    ),
    PathElement(
      d: 'M14.25 15h.005v.005h-.005v-.005Z',
      animation: OpacityKeyframeAnimation(
        keyframes: [1.0, 0.3, 1.0],
        duration: Duration(milliseconds: 400),
        delay: Duration(milliseconds: 700),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M16.5 15h.006v.005H16.5v-.005Z',
      animation: OpacityKeyframeAnimation(
        keyframes: [1.0, 0.3, 1.0],
        duration: Duration(milliseconds: 400),
        delay: Duration(milliseconds: 800),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M7.5 17.25h.005v.005h-.006v-.005Z',
      animation: OpacityKeyframeAnimation(
        keyframes: [1.0, 0.3, 1.0],
        duration: Duration(milliseconds: 400),
        delay: Duration(milliseconds: 900),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M9.75 17.25h.005v.006H9.75v-.006Z',
      animation: OpacityKeyframeAnimation(
        keyframes: [1.0, 0.3, 1.0],
        duration: Duration(milliseconds: 400),
        delay: Duration(milliseconds: 1000),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M12 17.25h.006v.006h-.006v-.005Z',
      animation: OpacityKeyframeAnimation(
        keyframes: [1.0, 0.3, 1.0],
        duration: Duration(milliseconds: 400),
        delay: Duration(milliseconds: 1100),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M14.25 17.25h.006v.006h-.006v-.006Z',
      animation: OpacityKeyframeAnimation(
        keyframes: [1.0, 0.3, 1.0],
        duration: Duration(milliseconds: 400),
        delay: Duration(milliseconds: 1200),
        curve: Curves.easeOut,
      ),
    ),
  ],
);
