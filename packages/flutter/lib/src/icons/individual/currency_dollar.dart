import 'package:heroicons_animated/src/icons/icon_base.dart';

const currencyDollar = HeroiconAnimatedIconData(
  name: 'currency-dollar',
  animation: ScaleXYKeyframeAnimation(
    keyframesX: [1.0, -1.0, 1.0],
    keyframesY: [1.0, 1.0, 1.0],
    duration: Duration(milliseconds: 600),
    delay: Duration(milliseconds: 0),
    curve: Curves.easeInOut,
  ),
  elements: [
    PathElement(
      d: 'M12 6V18M9 15.1818L9.87887 15.841C11.0504 16.7197 12.9498 16.7197 14.1214 15.841C15.2929 14.9623 15.2929 13.5377 14.1214 12.659C13.5355 12.2196 12.7677 12 11.9999 12C11.275 12 10.5502 11.7804 9.99709 11.341C8.891 10.4623 8.891 9.03772 9.9971 8.15904C11.1032 7.28036 12.8965 7.28036 14.0026 8.15904L14.4175 8.48863M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z',
    ),
  ],
);
