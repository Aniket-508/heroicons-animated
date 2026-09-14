import 'package:heroicons_animated/src/icons/icon_base.dart';

const share = HeroiconAnimatedIconData(
  name: 'share',
  elements: [
    PathElement(
      d: 'M7.21721 10.9071C7.39737 11.2307 7.5 11.6034 7.5 12C7.5 12.3966 7.39737 12.7693 7.21721 13.0929M7.21721 10.9071L16.7828 5.5929M7.21721 13.0929L16.7828 18.4071',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 400),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
        pathLength: PathLengthAnimation(
          from: 0.0,
          to: 1.0,
          fromOffset: 0.0,
          toOffset: 0.0,
          duration: Duration(milliseconds: 400),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeOut,
        ),
        opacity: OpacityAnimation(
          from: 0.0,
          to: 1.0,
          duration: Duration(milliseconds: 400),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeOut,
        ),
      ),
    ),
    CircleElement(
      cx: 5.25,
      cy: 12,
      r: 2.25,
      animation: ScaleKeyframeAnimation(
        keyframes: [1.0, 1.3, 1.0],
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
    CircleElement(
      cx: 18.75,
      cy: 4.5,
      r: 2.25,
      animation: ScaleKeyframeAnimation(
        keyframes: [1.0, 1.3, 1.0],
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 150),
        curve: Curves.easeOut,
      ),
    ),
    CircleElement(
      cx: 18.75,
      cy: 19.5,
      r: 2.25,
      animation: ScaleKeyframeAnimation(
        keyframes: [1.0, 1.3, 1.0],
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 300),
        curve: Curves.easeOut,
      ),
    ),
  ],
);
