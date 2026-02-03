# @heroicons-animated/vue

Beautifully animated [Heroicons](https://heroicons.com) for Vue, built with [@vueuse/motion](https://motion.vueuse.org).

## Installation

```bash
npm install @heroicons-animated/vue @vueuse/motion
# or
pnpm add @heroicons-animated/vue @vueuse/motion
```

## Usage

```vue
<script setup>
import { BeakerIcon } from "@heroicons-animated/vue";
</script>

<template>
  <BeakerIcon class="size-6" />
</template>
```

### Tree-shakable Imports

Import individual icons to reduce bundle size:

```vue
<script setup>
import BeakerIcon from "@heroicons-animated/vue/beaker";
</script>
```

## Requirements

- Vue 3.0+
- @vueuse/motion 2.0+

## Documentation

Visit [heroicons-animated.com](https://www.heroicons-animated.com) for the full documentation and icon gallery.

## License

MIT
