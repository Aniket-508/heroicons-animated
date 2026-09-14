import 'package:heroicons_animated/src/icons/icon_base.dart';

const cloud = HeroiconAnimatedIconData(
  name: 'cloud',
  elements: [
    PathElement(
      d: 'M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z',
      animation: TranslateAnimation(
        fromX: 0.0,
        fromY: 0.0,
        toX: 1.1,
        toY: -1.1,
        duration: Duration(milliseconds: 500),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeOut,
      ),
    ),
  ],
);
