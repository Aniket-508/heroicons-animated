# @heroicons-animated/vue

Beautifully animated [Heroicons](https://heroicons.com) for Vue, built with [Motion for Vue (`motion-v`)](https://motion.dev/docs/vue).

## Installation

```bash
npm install @heroicons-animated/vue motion-v
# or
pnpm add @heroicons-animated/vue motion-v
```

## Usage

```vue
<script setup>
import { BeakerIcon } from "@heroicons-animated/vue";
</script>

<template>
  <BeakerIcon :size="32" color="orange" :stroke-width="2.5" />
</template>
```

### Props

| Prop          | Type              | Default        | Description                     |
| ------------- | ----------------- | -------------- | ------------------------------- |
| `size`        | number            | 28             | Icon size in pixels             |
| `color`       | string            | 'currentColor' | Stroke color (CSS color value)  |
| `strokeWidth` | number / string   | 1.5            | SVG stroke width                |
| `class`       | string            | —              | Optional additional CSS classes |

### Exposed Methods

Each icon component exposes the following methods via template refs:

| Method          | Description                              |
| --------------- | ---------------------------------------- |
| `startAnimation`| Start the icon's animation               |
| `stopAnimation` | Stop the animation and reset to normal   |
| `setControlled` | Enable/disable mouse hover control       |

```vue
<script setup>
import { ref } from "vue";
import BeakerIcon from "@heroicons-animated/vue/beaker";

const iconRef = ref();

const triggerAnimation = () => {
  iconRef.value?.startAnimation();
};
</script>

<template>
  <BeakerIcon ref="iconRef" @click="triggerAnimation" />
</template>
```

### Import Strategy

Both import styles are supported and tree-shakable in modern bundlers.

Root named imports:

```vue
<script setup>
import { BeakerIcon, RocketLaunchIcon } from "@heroicons-animated/vue";
</script>
```

Deep per-icon imports:

```vue
<script setup>
import BeakerIcon from "@heroicons-animated/vue/beaker";
</script>
```

## Requirements

- Vue 3.0+
- motion-v 1.10+

## Documentation

Visit [vue.heroicons-animated.com](https://vue.heroicons-animated.com) for the full documentation and icon gallery.

## License

[MIT](LICENSE)
