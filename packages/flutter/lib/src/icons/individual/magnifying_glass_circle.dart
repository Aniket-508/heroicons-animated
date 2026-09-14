import 'package:heroicons_animated/src/icons/icon_base.dart';

const magnifyingGlassCircle = HeroiconAnimatedIconData(
  name: 'magnifying-glass-circle',
  elements: [
    PathElement(
      d: 'M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z',
    ),
    PathElement(
      d: 'M15.75 15.75L13.2615 13.2615M13.2615 13.2615C13.8722 12.6507 14.25 11.807 14.25 10.875C14.25 9.01104 12.739 7.5 10.875 7.5C9.01104 7.5 7.5 9.01104 7.5 10.875C7.5 12.739 9.01104 14.25 10.875 14.25C11.807 14.25 12.6507 13.8722 13.2615 13.2615',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, 0.0, -2.0, 0.0],
        keyframesY: [0.0, -3.0, 0.0, 0.0],
        duration: Duration(milliseconds: 1000),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
  ],
);
