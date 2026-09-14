import 'package:heroicons_animated/src/icons/icon_base.dart';

const pencilSquare = HeroiconAnimatedIconData(
  name: 'pencil-square',
  elements: [
    PathElement(
      d: 'M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10',
    ),
    PathElement(
      d: 'M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 600),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
        rotateKeyframe: RotateKeyframeAnimation(
          keyframes: [-0.5, 0.5, -0.5],
          duration: Duration(milliseconds: 600),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
        translateKeyframe: TranslateKeyframeAnimation(
          keyframesX: [0.0, -1.0, 1.0, 0.0],
          keyframesY: [0.0, 1.0, -1.0, 0.0],
          duration: Duration(milliseconds: 600),
          delay: Duration(milliseconds: 0),
          curve: Curves.easeInOut,
        ),
      ),
    ),
  ],
);
