# @heroicons-animated/react

Beautifully animated [Heroicons](https://heroicons.com) for React, built with [Motion](https://motion.dev).

## Installation

```bash
npm install @heroicons-animated/react motion
# or
pnpm add @heroicons-animated/react motion
```

## Usage

```tsx
import { BeakerIcon } from "@heroicons-animated/react";

export default function App() {
  return <BeakerIcon className="size-6" />;
}
```

### Tree-shakable Imports

Import individual icons to reduce bundle size:

```tsx
import { BeakerIcon } from "@heroicons-animated/react/beaker";
```

## Requirements

- React 18 or 19
- Motion 12+

## Documentation

Visit [heroicons-animated.com](https://www.heroicons-animated.com) for the full documentation and icon gallery.

## License

MIT
