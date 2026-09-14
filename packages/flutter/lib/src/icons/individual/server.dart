import 'package:heroicons_animated/src/icons/icon_base.dart';

const server = HeroiconAnimatedIconData(
  name: 'server',
  animation: TranslateKeyframeAnimation(
    keyframesX: [0.0, 0.0, 0.0],
    keyframesY: [0.0, -2.0, 0.0],
    duration: Duration(milliseconds: 400),
    delay: Duration(milliseconds: 0),
    curve: Curves.easeInOut,
  ),
  elements: [
    PathElement(
      d: 'M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3',
    ),
    PathElement(
      d: 'M18.75 17.25h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z',
      animation: OpacityKeyframeAnimation(
        keyframes: [1.0, 0.4, 1.0, 0.4, 1.0],
        duration: Duration(milliseconds: 600),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
      ),
    ),
  ],
);
