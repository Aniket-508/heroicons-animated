import 'package:heroicons_animated/src/icons/icon_base.dart';

const rss = HeroiconAnimatedIconData(
  name: 'rss',
  elements: [
    PathElement(d: 'M6 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'),
    PathElement(
      d: 'M12.75 19.5v-.75a7.5 7.5 0 0 0-7.5-7.5H4.5',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 600),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
        opacityKeyframe: OpacityKeyframeAnimation(
          keyframes: [1.0, 0.0, 0.0, 1.0],
          duration: Duration(milliseconds: 600),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
        scaleKeyframe: ScaleKeyframeAnimation(
          keyframes: [1.0, 0.0, 0.0, 1.0],
          duration: Duration(milliseconds: 600),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
      ),
    ),
    PathElement(
      d: 'M4.5 4.5h.75c7.87 0 14.25 6.38 14.25 14.25v.75',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 600),
        delay: Duration(milliseconds: 200),
        curve: Curves.easeInOut,
        opacityKeyframe: OpacityKeyframeAnimation(
          keyframes: [1.0, 0.0, 0.0, 1.0],
          duration: Duration(milliseconds: 600),
          delay: Duration(milliseconds: 200),
          curve: Curves.easeInOut,
        ),
        scaleKeyframe: ScaleKeyframeAnimation(
          keyframes: [1.0, 0.0, 0.0, 1.0],
          duration: Duration(milliseconds: 600),
          delay: Duration(milliseconds: 200),
          curve: Curves.easeInOut,
        ),
      ),
    ),
  ],
);
