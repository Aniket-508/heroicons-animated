## `heroicons-animated` is beautifully animated heroicons.

![preview](./apps/www/public/og.png)

**Demo** → [heroicons-animated](https://www.heroicons-animated.com)

**Sponsorship** → [heroicons-animated/sponsorship](https://github.com/sponsors/Aniket-508)

## Project Structure

```
heroicons-animated/
├── apps/
│   └── www/              # Website
├── packages/
│   ├── react/            # React package (@heroicons-animated/react)
│   ├── vue/              # Vue package (@heroicons-animated/vue)
│   ├── svelte/           # Svelte package (@heroicons-animated/svelte)
│   └── shared/           # Shared utilities and types
└── tooling/
    └── typescript/       # Shared TypeScript configuration
```

## Installation

### Using shadcn CLI

#### React

```bash
pnpm dlx shadcn add @heroicons-animated/heart
pnpm dlx shadcn add @heroicons-animated/wifi
```

#### Vue

```bash
pnpm dlx shadcn-vue add @heroicons-animated/vue/heart
pnpm dlx shadcn-vue add @heroicons-animated/vue/wifi
```

#### Svelte

```bash
pnpm dlx shadcn-svelte add @heroicons-animated/svelte/heart
pnpm dlx shadcn-svelte add @heroicons-animated/svelte/wifi
```

### Using npm packages

#### React

```bash
pnpm add @heroicons-animated/react motion
```

```tsx
import { BeakerIcon } from "@heroicons-animated/react";

export default function App() {
  return <BeakerIcon className="size-6" />;
}
```

#### Vue

```bash
pnpm add @heroicons-animated/vue @vueuse/motion
```

```vue
<script setup>
import { BeakerIcon } from "@heroicons-animated/vue";
</script>

<template>
  <BeakerIcon class="size-6" />
</template>
```

#### Svelte

```bash
pnpm add @heroicons-animated/svelte
```

```svelte
<script>
  import { BeakerIcon } from '@heroicons-animated/svelte'
</script>

<BeakerIcon class="size-6" />
```

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Aniket-508/heroicons-animated&type=date&legend=top-left)](https://www.star-history.com/#Aniket-508/heroicons-animated&type=date&legend=top-left)

## Contributing

We welcome contributions to `heroicons-animated`! Please read our [contributing guidelines](CONTRIBUTING.md) on how to submit improvements and new icons.

## Credits

- Original project: [lucide-animated](https://lucide-animated.com/) by [@pqoqubbw](https://x.com/pqoqubbw)
- Heroicons: [heroicons.com](https://heroicons.com)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or just want to say hi, feel free to reach out to me on X 👉 [@alaymanguy](https://x.com/alaymanguy).
