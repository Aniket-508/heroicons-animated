import 'package:heroicons_animated/src/icons/icon_base.dart';

const envelopeOpen = HeroiconAnimatedIconData(
  name: 'envelope-open',
  animation: CombinedAnimation(
    duration: Duration(milliseconds: 400),
    delay: Duration(milliseconds: 0),
    curve: Curves.easeOut,
    scaleKeyframe: ScaleKeyframeAnimation(
      keyframes: [1.0, 1.1, 1.0],
      duration: Duration(milliseconds: 400),
      delay: Duration(milliseconds: 0),
      curve: Curves.easeOut,
    ),
    translateKeyframe: TranslateKeyframeAnimation(
      keyframesX: [0.0, 0.0, 0.0],
      keyframesY: [0.0, -1.0, 0.0],
      duration: Duration(milliseconds: 400),
      delay: Duration(milliseconds: 0),
      curve: Curves.easeOut,
    ),
  ),
  elements: [
    PathElement(
      d: 'M21.75 8.99997V9.90606C21.75 10.7338 21.2955 11.4947 20.5667 11.8871L14.0893 15.375M2.25 8.99997V9.90606C2.25 10.7338 2.70448 11.4947 3.43328 11.8871L9.91074 15.375M18.75 17.8846L14.0893 15.375M14.0893 15.375L13.0667 14.8244C12.4008 14.4658 11.5992 14.4658 10.9333 14.8244L9.91074 15.375M9.91074 15.375L5.25 17.8846M21.75 19.5C21.75 20.7426 20.7426 21.75 19.5 21.75H4.5C3.25736 21.75 2.25 20.7426 2.25 19.5L2.25 8.84388C2.25 8.01614 2.70448 7.25525 3.43328 6.86282L10.9333 2.82436C11.5992 2.46577 12.4008 2.46577 13.0667 2.82436L20.5667 6.86282C21.2955 7.25525 21.75 8.01615 21.75 8.84388V19.5Z',
    ),
  ],
);
