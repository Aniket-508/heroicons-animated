import 'package:heroicons_animated/src/icons/icon_base.dart';

const ellipsisHorizontal = HeroiconAnimatedIconData(
  name: 'ellipsis-horizontal',
  elements: [
    PathElement(
      d: 'M6.75 12C6.75 12.4142 6.41421 12.75 6 12.75C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25C6.41421 11.25 6.75 11.5858 6.75 12Z',
      animation: ScaleKeyframeAnimation(
        keyframes: [1.0, 1.3, 1.0],
        duration: Duration(milliseconds: 400),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
      ),
    ),
    PathElement(
      d: 'M12.75 12C12.75 12.4142 12.4142 12.75 12 12.75C11.5858 12.75 11.25 12.4142 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25C12.4142 11.25 12.75 11.5858 12.75 12Z',
      animation: ScaleKeyframeAnimation(
        keyframes: [1.0, 1.3, 1.0],
        duration: Duration(milliseconds: 400),
        delay: Duration(milliseconds: 50),
        curve: Curves.easeInOut,
      ),
    ),
    PathElement(
      d: 'M18.75 12C18.75 12.4142 18.4142 12.75 18 12.75C17.5858 12.75 17.25 12.4142 17.25 12C17.25 11.5858 17.5858 11.25 18 11.25C18.4142 11.25 18.75 11.5858 18.75 12Z',
      animation: ScaleKeyframeAnimation(
        keyframes: [1.0, 1.3, 1.0],
        duration: Duration(milliseconds: 400),
        delay: Duration(milliseconds: 100),
        curve: Curves.easeInOut,
      ),
    ),
  ],
);
