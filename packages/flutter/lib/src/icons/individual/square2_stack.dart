import 'package:heroicons_animated/src/icons/icon_base.dart';

const square2Stack = HeroiconAnimatedIconData(
  name: 'square-2-stack',
  elements: [
    PathElement(
      d: 'M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
        opacityKeyframe: OpacityKeyframeAnimation(
          keyframes: [0.0, 1.0],
          duration: Duration(milliseconds: 300),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeOut,
        ),
        translateKeyframe: TranslateKeyframeAnimation(
          keyframesX: [-4.0, 0.0],
          keyframesY: [-4.0, 0.0],
          duration: Duration(milliseconds: 300),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeOut,
        ),
      ),
    ),
    PathElement(
      d: 'M16.5 8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, 1.0, 0.0],
        keyframesY: [0.0, 1.0, 0.0],
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
      ),
    ),
  ],
);
