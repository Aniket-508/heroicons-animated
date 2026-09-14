# heroicons_animated

Beautifully animated Heroicons for Flutter.

## Installation

Until the package is published to pub.dev, depend on this monorepo package:

```yaml
dependencies:
  heroicons_animated:
    git:
      url: https://github.com/heroicons-animated/heroicons-animated.git
      path: packages/flutter
```

## Usage

```dart
import 'package:flutter/material.dart';
import 'package:heroicons_animated/heroicons_animated.dart';

HeroiconAnimatedIcon(
  icon: heart,
  size: 32,
  color: Colors.red,
  trigger: AnimationTrigger.onTap,
);
```

The package exports all 316 icon constants, plus `allHeroicons` for galleries
and search interfaces.

## Animation triggers

Icons support tap, hover, looping, and manual animation:

```dart
final controller = HeroiconAnimatedIconController();

HeroiconAnimatedIcon(
  icon: arrowPath,
  trigger: AnimationTrigger.manual,
  controller: controller,
);

controller.animate();
controller.reverse();
controller.reset();
```

Use `AnimationTrigger.onHover` for pointer-driven desktop and web interfaces,
or `AnimationTrigger.loop` for continuous playback.

## Customization

`HeroiconAnimatedIcon` accepts `size`, `color`, `strokeWidth`, `duration`, and
`curve`. Each icon uses the original 24-by-24 Heroicons geometry and scales to
the requested logical size.

## License

MIT
