import 'package:heroicons_animated/src/icons/icon_base.dart';

const chartPie = HeroiconAnimatedIconData(
  name: 'chart-pie',
  elements: [
    PathElement(
      d: 'M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z',
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
    PathElement(d: 'M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z'),
  ],
);
