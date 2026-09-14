import 'package:heroicons_animated/src/icons/icon_base.dart';

const wallet = HeroiconAnimatedIconData(
  name: 'wallet',
  elements: [
    PathElement(
      d: 'M21 12V18C21 19.2426 19.9926 20.25 18.75 20.25H5.25C4.00736 20.25 3 19.2426 3 18V12M21 12V9M3 12V9M21 12C21 10.7574 19.9926 9.75 18.75 9.75H15C15 11.4069 13.6569 12.75 12 12.75C10.3431 12.75 9 11.4069 9 9.75H5.25C4.00736 9.75 3 10.7574 3 12',
    ),
    PathElement(
      d: 'M21 9C21 7.75736 19.9926 6.75 18.75 6.75H5.25C4.00736 6.75 3 7.75736 3 9M21 9V6M3 9V6',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 400),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
        opacityKeyframe: OpacityKeyframeAnimation(
          keyframes: [0.0, 1.0],
          duration: Duration(milliseconds: 400),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeOut,
        ),
        translateKeyframe: TranslateKeyframeAnimation(
          keyframesX: [0.0, 0.0],
          keyframesY: [2.0, 0.0],
          duration: Duration(milliseconds: 400),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeOut,
        ),
      ),
    ),
    PathElement(
      d: 'M21 9V6C21 4.75736 19.9926 3.75 18.75 3.75H5.25C4.00736 3.75 3 4.75736 3 6V9',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 400),
        delay: Duration(milliseconds: 150),
        curve: Curves.easeOut,
        opacityKeyframe: OpacityKeyframeAnimation(
          keyframes: [0.0, 1.0],
          duration: Duration(milliseconds: 400),
          delay: Duration(milliseconds: 150),
          curve: Curves.easeOut,
        ),
        translateKeyframe: TranslateKeyframeAnimation(
          keyframesX: [0.0, 0.0],
          keyframesY: [2.0, 0.0],
          duration: Duration(milliseconds: 400),
          delay: Duration(milliseconds: 150),
          curve: Curves.easeOut,
        ),
      ),
    ),
  ],
);
