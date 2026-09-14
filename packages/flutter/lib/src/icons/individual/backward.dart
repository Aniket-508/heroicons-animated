import 'package:heroicons_animated/src/icons/icon_base.dart';

const backward = HeroiconAnimatedIconData(
  name: 'backward',
  animation: RotateKeyframeAnimation(
    keyframes: [0.0, 10.0, 0.0, 0.0],
    duration: Duration(milliseconds: 500),
    delay: Duration(milliseconds: 0),
    curve: Curves.easeOut,
  ),
  elements: [
    PathElement(
      d: 'M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z',
    ),
  ],
);
