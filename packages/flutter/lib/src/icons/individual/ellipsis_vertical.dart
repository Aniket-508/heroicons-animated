import 'package:heroicons_animated/src/icons/icon_base.dart';

const ellipsisVertical = HeroiconAnimatedIconData(
  name: 'ellipsis-vertical',
  elements: [
    PathElement(
      d: 'M12 6.75C11.5858 6.75 11.25 6.41421 11.25 6C11.25 5.58579 11.5858 5.25 12 5.25C12.4142 5.25 12.75 5.58579 12.75 6C12.75 6.41421 12.4142 6.75 12 6.75Z',
      animation: ScaleKeyframeAnimation(
        keyframes: [1.0, 1.3, 1.0],
        duration: Duration(milliseconds: 400),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
      ),
    ),
    PathElement(
      d: 'M12 12.75C11.5858 12.75 11.25 12.4142 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25C12.4142 11.25 12.75 11.5858 12.75 12C12.75 12.4142 12.4142 12.75 12 12.75Z',
      animation: ScaleKeyframeAnimation(
        keyframes: [1.0, 1.3, 1.0],
        duration: Duration(milliseconds: 400),
        delay: Duration(milliseconds: 50),
        curve: Curves.easeInOut,
      ),
    ),
    PathElement(
      d: 'M12 18.75C11.5858 18.75 11.25 18.4142 11.25 18C11.25 17.5858 11.5858 17.25 12 17.25C12.4142 17.25 12.75 17.5858 12.75 18C12.75 18.4142 12.4142 18.75 12 18.75Z',
      animation: ScaleKeyframeAnimation(
        keyframes: [1.0, 1.3, 1.0],
        duration: Duration(milliseconds: 400),
        delay: Duration(milliseconds: 100),
        curve: Curves.easeInOut,
      ),
    ),
  ],
);
