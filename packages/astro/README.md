# @heroicons-animated/astro

Beautifully animated [Heroicons](https://heroicons.com) for Astro, built with CSS animations.

## Installation

```bash
pnpm add @heroicons-animated/astro
# or
npm install @heroicons-animated/astro
```

## Usage

```astro
---
import { BeakerIcon } from "@heroicons-animated/astro";
---

<BeakerIcon size={32} color="orange" strokeWidth={2.5} />
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | number | 24 | Icon size in pixels |
| color | string | 'currentColor' | Icon stroke color |
| strokeWidth | number | 1.5 | SVG stroke width |
| class | string | - | Additional CSS classes |
| title | string | - | Accessible title for the icon |

### Import Strategy

Both root named imports and deep per-icon imports are supported.

```astro
---
// Root import
import { BeakerIcon, HeartIcon } from "@heroicons-animated/astro";

// Deep import
import { BeakerIcon } from "@heroicons-animated/astro/icons/beaker";
---

<BeakerIcon size={32} />
<HeartIcon size={32} color="red" />
```

### Client-Side Interactivity

For hover animations, add the `client:load` directive:

```astro
---
import { BeakerIcon } from "@heroicons-animated/astro";
---

<BeakerIcon size={32} client:load />
```

## Available Animations

Each icon has a unique animation that triggers on hover:

- `scale` - Scale up/down
- `rotate` - Rotate back and forth
- `shake` - Horizontal shake
- `bounce` - Vertical bounce
- `swing` - Pendulum swing
- `pulse` - Pulse opacity
- `spin` - Full rotation
- `wiggle` - Wiggle motion
- `flip` - 3D flip
- `fade` - Fade in/out
- `slide` - Horizontal slide
- `float` - Float up/down
- `rubber-band` - Rubber band stretch

## Requirements

- Astro 4.0+

## Documentation

Visit [astro.heroicons-animated.com](https://astro.heroicons-animated.com)

## License

[MIT](../../LICENSE)
