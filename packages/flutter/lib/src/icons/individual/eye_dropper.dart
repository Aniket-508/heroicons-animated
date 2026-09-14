import 'package:heroicons_animated/src/icons/icon_base.dart';

const eyeDropper = HeroiconAnimatedIconData(
  name: 'eye-dropper',
  animation: CombinedAnimation(
    duration: Duration(milliseconds: 400),
    delay: Duration(milliseconds: 0),
    curve: Curves.easeInOut,
    rotateKeyframe: RotateKeyframeAnimation(
      keyframes: [0.0, -3.0, 0.0],
      duration: Duration(milliseconds: 400),
      delay: Duration(milliseconds: 0),
      curve: Curves.easeInOut,
    ),
    translateKeyframe: TranslateKeyframeAnimation(
      keyframesX: [0.0, 0.0, 0.0],
      keyframesY: [0.0, 2.0, 0.0],
      duration: Duration(milliseconds: 400),
      delay: Duration(milliseconds: 0),
      curve: Curves.easeInOut,
    ),
  ),
  elements: [
    PathElement(
      d: 'M15 11.25L16.5 12.75L17.25 12V8.75798L19.5264 8.14802C20.019 8.01652 20.4847 7.75778 20.8712 7.37132C22.0428 6.19975 22.0428 4.30025 20.8712 3.12868C19.6996 1.95711 17.8001 1.95711 16.6286 3.12868C16.2421 3.51509 15.9832 3.98069 15.8517 4.47324L15.2416 6.74998H12L11.25 7.49998L12.75 8.99999M15 11.25L6.53033 19.7197C6.19077 20.0592 5.73022 20.25 5.25 20.25C4.76978 20.25 4.30924 20.4408 3.96967 20.7803L3 21.75L2.25 21L3.21967 20.0303C3.55923 19.6908 3.75 19.2302 3.75 18.75C3.75 18.2698 3.94077 17.8092 4.28033 17.4697L12.75 8.99999M15 11.25L12.75 8.99999',
    ),
  ],
);
