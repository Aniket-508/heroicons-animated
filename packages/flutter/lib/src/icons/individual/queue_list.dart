import 'package:heroicons_animated/src/icons/icon_base.dart';

const queueList = HeroiconAnimatedIconData(
  name: 'queue-list',
  elements: [
    PathElement(
      d: 'M5.625 4.5H18.375C19.4105 4.5 20.25 5.33947 20.25 6.375C20.25 7.41053 19.4105 8.25 18.375 8.25H5.625C4.58947 8.25 3.75 7.41053 3.75 6.375C3.75 5.33947 4.58947 4.5 5.625 4.5Z',
    ),
    PathElement(
      d: 'M3.75 19.5H20.25',
      animation: OpacityAnimation(
        from: 0.0,
        to: 1.0,
        duration: Duration(milliseconds: 200),
        delay: Duration(milliseconds: 400),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M3.75 15.75H20.25',
      animation: OpacityAnimation(
        from: 0.0,
        to: 1.0,
        duration: Duration(milliseconds: 200),
        delay: Duration(milliseconds: 250),
        curve: Curves.easeOut,
      ),
    ),
    PathElement(
      d: 'M3.75 12H20.25',
      animation: OpacityAnimation(
        from: 0.0,
        to: 1.0,
        duration: Duration(milliseconds: 200),
        delay: Duration(milliseconds: 100),
        curve: Curves.easeOut,
      ),
    ),
  ],
);
