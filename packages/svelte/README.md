# @heroicons-animated/svelte

Beautifully animated [Heroicons](https://heroicons.com) for Svelte, built with CSS animations.

## Installation

```bash
npm install @heroicons-animated/svelte
# or
pnpm add @heroicons-animated/svelte
```

## Usage

```svelte
<script>
  import { Beaker } from '@heroicons-animated/svelte'
</script>

<Beaker size={32} color="orange" strokeWidth={2.5} />
```

### Props

| Prop          | Type    | Default        | Description                     |
| ------------- | ------- | -------------- | ------------------------------- |
| `size`        | number  | 28             | Icon size in pixels             |
| `color`       | string  | 'currentColor' | Stroke color (CSS color value)  |
| `strokeWidth` | number  | 1.5            | SVG stroke width                |
| `class`       | string  | —              | Optional additional CSS classes |
| `animate`     | boolean | false          | Controls icon animation state   |

### Import Strategy

Both import styles are supported and tree-shakable in modern bundlers.

Root named imports:

```svelte
<script>
  import { Beaker, RocketLaunch } from '@heroicons-animated/svelte'
</script>
```

Deep per-icon imports:

```svelte
<script>
  import Beaker from '@heroicons-animated/svelte/beaker'
</script>
```

## Requirements

- Svelte 5.0+

## Documentation

Visit [svelte.heroicons-animated.com](https://svelte.heroicons-animated.com) for the full documentation and icon gallery.

## License

[MIT](LICENSE)
