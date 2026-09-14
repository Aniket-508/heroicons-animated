import 'package:heroicons_animated/src/icons/icon_base.dart';

const folderPlus = HeroiconAnimatedIconData(
  name: 'folder-plus',
  elements: [
    PathElement(
      d: 'M10.94 4.19a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z',
    ),
    PathElement(
      d: 'M12 10.5v6',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 200),
        delay: Duration(milliseconds: 300),
        curve: Curves.easeOut,
        pathLength: PathLengthAnimation(
          from: 0.0,
          to: 1.0,
          fromOffset: 0.0,
          toOffset: 0.0,
          duration: Duration(milliseconds: 200),
          delay: Duration(milliseconds: 300),
          curve: Curves.easeOut,
        ),
        opacity: OpacityAnimation(
          from: 0.0,
          to: 1.0,
          duration: Duration(milliseconds: 200),
          delay: Duration(milliseconds: 300),
          curve: Curves.easeOut,
        ),
      ),
    ),
    PathElement(
      d: 'M9 13.5h6',
      animation: CombinedAnimation(
        duration: Duration(milliseconds: 200),
        delay: Duration(milliseconds: 600),
        curve: Curves.easeOut,
        pathLength: PathLengthAnimation(
          from: 0.0,
          to: 1.0,
          fromOffset: 0.0,
          toOffset: 0.0,
          duration: Duration(milliseconds: 200),
          delay: Duration(milliseconds: 600),
          curve: Curves.easeOut,
        ),
        opacity: OpacityAnimation(
          from: 0.0,
          to: 1.0,
          duration: Duration(milliseconds: 200),
          delay: Duration(milliseconds: 600),
          curve: Curves.easeOut,
        ),
      ),
    ),
  ],
);
