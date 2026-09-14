import 'package:heroicons_animated/src/icons/icon_base.dart';

const bookOpen = HeroiconAnimatedIconData(
  name: 'book-open',
  elements: [
    PathElement(
      d: 'M12 6.04168C10.4077 4.61656 8.30506 3.75 6 3.75C4.94809 3.75 3.93834 3.93046 3 4.26212V18.5121C3.93834 18.1805 4.94809 18 6 18C8.30506 18 10.4077 18.8666 12 20.2917',
      animation: RotateYKeyframeAnimation(
        keyframes: [0.0, 15.0, 0.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
        originX: 1.0,
        originY: 0.5,
      ),
    ),
    PathElement(
      d: 'M12 6.04168C13.5923 4.61656 15.6949 3.75 18 3.75C19.0519 3.75 20.0617 3.93046 21 4.26212V18.5121C20.0617 18.1805 19.0519 18 18 18C15.6949 18 13.5923 18.8666 12 20.2917',
      animation: RotateYKeyframeAnimation(
        keyframes: [0.0, -15.0, 0.0],
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
        originX: 0.0,
        originY: 0.5,
      ),
    ),
    PathElement(d: 'M12 6.04168V20.2917'),
  ],
);
