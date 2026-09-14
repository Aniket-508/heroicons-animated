import 'package:heroicons_animated/src/icons/icon_base.dart';

const microphone = HeroiconAnimatedIconData(
  name: 'microphone',
  elements: [
    PathElement(
      d: 'M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5',
    ),
    PathElement(
      d: 'M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z',
      animation: TranslateKeyframeAnimation(
        keyframesX: [0.0, 0.0, 0.0, 0.0, 0.0],
        keyframesY: [0.0, -3.0, 0.0, -2.0, 0.0],
        duration: Duration(milliseconds: 600),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
      ),
    ),
  ],
);
