# @heroicons-animated/preact

Beautifully animated [Heroicons](https://heroicons.com) for Preact, built with CSS animations.

## Installation

```bash
pnpm add @heroicons-animated/preact
# or
npm install @heroicons-animated/preact
```

## Usage

```tsx
import { BeakerIcon } from "@heroicons-animated/preact";

function App() {
  return <BeakerIcon class="size-6" />;
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | number | 28 | Icon size in pixels |
| color | string | 'currentColor' | Icon stroke color |
| strokeWidth | number | 1.5 | SVG stroke width |
| class | string | - | Additional CSS classes |

### Import Strategy

Both root named imports and deep per-icon imports are supported and tree-shakable.

```tsx
// Root import
import { BeakerIcon, HeartIcon } from "@heroicons-animated/preact";

// Deep import (better tree-shaking)
import { BeakerIcon } from "@heroicons-animated/preact/beaker";
```

## Requirements

- Preact 10.0+

## Documentation

Visit [preact.heroicons-animated.com](https://preact.heroicons-animated.com)

## License

[MIT](../../LICENSE)
