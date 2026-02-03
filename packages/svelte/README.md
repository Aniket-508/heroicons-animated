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
  import { BeakerIcon } from '@heroicons-animated/svelte'
</script>

<BeakerIcon class="size-6" />
```

### Tree-shakable Imports

Import individual icons to reduce bundle size:

```svelte
<script>
  import BeakerIcon from '@heroicons-animated/svelte/beaker'
</script>
```

## Requirements

- Svelte 5.0+

## Documentation

Visit [heroicons-animated.com](https://www.heroicons-animated.com) for the full documentation and icon gallery.

## License

MIT
