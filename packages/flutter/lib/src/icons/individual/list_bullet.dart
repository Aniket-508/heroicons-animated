import 'package:heroicons_animated/src/icons/icon_base.dart';

const listBullet = HeroiconAnimatedIconData(
  name: 'list-bullet',
  elements: [
    PathElement(
      d: 'M3.75 6.75H3.7575V6.7575H3.75V6.75ZM4.125 6.75C4.125 6.95711 3.95711 7.125 3.75 7.125C3.54289 7.125 3.375 6.95711 3.375 6.75C3.375 6.54289 3.54289 6.375 3.75 6.375C3.95711 6.375 4.125 6.54289 4.125 6.75Z',
      animation: OpacityAnimation(
        from: 0.0,
        to: 1.0,
        duration: Duration(milliseconds: 100),
        delay: Duration(milliseconds: 0),
        curve: Curves.easeInOut,
      ),
    ),
    PathElement(
      d: 'M8.25 6.75H20.25',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 100),
        curve: Curves.easeInOut,
        pathLength: PathLengthAnimation(
          from: 0.0,
          to: 1.0,
          fromOffset: 0.0,
          toOffset: 0.0,
          duration: Duration(milliseconds: 300),
          delay: Duration(milliseconds: 100),
          curve: Curves.easeInOut,
        ),
        opacity: OpacityAnimation(
          from: 0.0,
          to: 1.0,
          duration: Duration(milliseconds: 300),
          delay: Duration(milliseconds: 100),
          curve: Curves.easeInOut,
        ),
      ),
    ),
    PathElement(
      d: 'M3.75 12H3.7575V12.0075H3.75V12ZM4.125 12C4.125 12.2071 3.95711 12.375 3.75 12.375C3.54289 12.375 3.375 12.2071 3.375 12C3.375 11.7929 3.54289 11.625 3.75 11.625C3.95711 11.625 4.125 11.7929 4.125 12Z',
      animation: OpacityAnimation(
        from: 0.0,
        to: 1.0,
        duration: Duration(milliseconds: 100),
        delay: Duration(milliseconds: 400),
        curve: Curves.easeInOut,
      ),
    ),
    PathElement(
      d: 'M8.25 12H20.25',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 500),
        curve: Curves.easeInOut,
        pathLength: PathLengthAnimation(
          from: 0.0,
          to: 1.0,
          fromOffset: 0.0,
          toOffset: 0.0,
          duration: Duration(milliseconds: 300),
          delay: Duration(milliseconds: 500),
          curve: Curves.easeInOut,
        ),
        opacity: OpacityAnimation(
          from: 0.0,
          to: 1.0,
          duration: Duration(milliseconds: 300),
          delay: Duration(milliseconds: 500),
          curve: Curves.easeInOut,
        ),
      ),
    ),
    PathElement(
      d: 'M3.75 17.25H3.7575V17.2575H3.75V17.25ZM4.125 17.25C4.125 17.4571 3.95711 17.625 3.75 17.625C3.54289 17.625 3.375 17.4571 3.375 17.25C3.375 17.0429 3.54289 16.875 3.75 16.875C3.95711 16.875 4.125 17.0429 4.125 17.25Z',
      animation: OpacityAnimation(
        from: 0.0,
        to: 1.0,
        duration: Duration(milliseconds: 100),
        delay: Duration(milliseconds: 800),
        curve: Curves.easeInOut,
      ),
    ),
    PathElement(
      d: 'M8.25 17.25H20.25',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 300),
        delay: Duration(milliseconds: 900),
        curve: Curves.easeInOut,
        pathLength: PathLengthAnimation(
          from: 0.0,
          to: 1.0,
          fromOffset: 0.0,
          toOffset: 0.0,
          duration: Duration(milliseconds: 300),
          delay: Duration(milliseconds: 900),
          curve: Curves.easeInOut,
        ),
        opacity: OpacityAnimation(
          from: 0.0,
          to: 1.0,
          duration: Duration(milliseconds: 300),
          delay: Duration(milliseconds: 900),
          curve: Curves.easeInOut,
        ),
      ),
    ),
  ],
);
