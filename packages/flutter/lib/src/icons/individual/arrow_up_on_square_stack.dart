import 'package:heroicons_animated/src/icons/icon_base.dart';

const arrowUpOnSquareStack = HeroiconAnimatedIconData(
  name: 'arrow-up-on-square-stack',
  elements: [
    PathElement(
      d: 'M13.5 4.5L10.5 1.5M10.5 1.5L7.5 4.5M10.5 1.5L10.5 12.75',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, 0.0, 0.0, 0.0],
        keyframesY: [0.0, 1.0, -1.0, 0.0],
        duration: Duration(milliseconds: 400),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
      ),
    ),
    PathElement(
      d: 'M7.5 7.5H6.75C5.50736 7.5 4.5 8.50736 4.5 9.75V17.25C4.5 18.4926 5.50736 19.5 6.75 19.5H14.25C15.4926 19.5 16.5 18.4926 16.5 17.25V9.75C16.5 8.50736 15.4926 7.5 14.25 7.5H13.5',
    ),
    PathElement(
      d: 'M16.5 10.5H17.25C18.4926 10.5 19.5 11.5074 19.5 12.75V20.25C19.5 21.4926 18.4926 22.5 17.25 22.5H9.75C8.50736 22.5 7.5 21.4926 7.5 20.25V19.5',
    ),
  ],
);
