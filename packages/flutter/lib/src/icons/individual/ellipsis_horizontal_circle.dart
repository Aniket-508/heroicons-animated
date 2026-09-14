import 'package:heroicons_animated/src/icons/icon_base.dart';

const ellipsisHorizontalCircle = HeroiconAnimatedIconData(
  name: 'ellipsis-horizontal-circle',
  elements: [
    PathElement(
      d: 'M8.625 12C8.625 12.2071 8.45711 12.375 8.25 12.375C8.04289 12.375 7.875 12.2071 7.875 12C7.875 11.7929 8.04289 11.625 8.25 11.625C8.45711 11.625 8.625 11.7929 8.625 12ZM8.625 12H8.25',
      animation: ScaleKeyframeAnimation(
        keyframes: [1.0, 1.2, 1.0],
        duration: Duration(milliseconds: 400),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
      ),
    ),
    PathElement(
      d: 'M12.375 12C12.375 12.2071 12.2071 12.375 12 12.375C11.7929 12.375 11.625 12.2071 11.625 12C11.625 11.7929 11.7929 11.625 12 11.625C12.2071 11.625 12.375 11.7929 12.375 12ZM12.375 12H12',
      animation: ScaleKeyframeAnimation(
        keyframes: [1.0, 1.2, 1.0],
        duration: Duration(milliseconds: 400),
        delay: Duration(milliseconds: 50),
        curve: Curves.easeInOut,
      ),
    ),
    PathElement(
      d: 'M16.125 12C16.125 12.2071 15.9571 12.375 15.75 12.375C15.5429 12.375 15.375 12.2071 15.375 12C15.375 11.7929 15.5429 11.625 15.75 11.625C15.9571 11.625 16.125 11.7929 16.125 12ZM16.125 12H15.75',
      animation: ScaleKeyframeAnimation(
        keyframes: [1.0, 1.2, 1.0],
        duration: Duration(milliseconds: 400),
        delay: Duration(milliseconds: 100),
        curve: Curves.easeInOut,
      ),
    ),
    PathElement(
      d: 'M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z',
    ),
  ],
);
