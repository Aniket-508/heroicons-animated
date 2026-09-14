import 'package:heroicons_animated/src/icons/icon_base.dart';

const cursorArrowRipple = HeroiconAnimatedIconData(
  name: 'cursor-arrow-ripple',
  elements: [
    PathElement(
      d: 'M15.0423 21.6718L13.6835 16.6007M13.6835 16.6007L11.1741 18.826L11.7425 9.35623L16.9697 17.2731L13.6835 16.6007Z',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, 0.0, -3.0, 0.0],
        keyframesY: [0.0, -4.0, 0.0, 0.0],
        duration: Duration(milliseconds: 1000),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M6.16637 16.3336C2.94454 13.1118 2.94454 7.88819 6.16637 4.66637C9.38819 1.44454 14.6118 1.44454 17.8336 4.66637C19.4445 6.27724 20.25 8.38854 20.25 10.4999',
      animation: OpacityAnimation(
        from: 0.0,
        to: 1.0,
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 1300),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M8.28769 14.2123C6.23744 12.1621 6.23744 8.83794 8.28769 6.78769C10.3379 4.73744 13.6621 4.73744 15.7123 6.78769C16.7374 7.8128 17.25 9.15637 17.25 10.4999',
      animation: OpacityAnimation(
        from: 0.0,
        to: 1.0,
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 1000),
        curve: Curves.easeOut,
      ),
    ),
  ],
);
