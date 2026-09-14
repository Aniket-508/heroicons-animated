# heroicons-animated-react-native

**316 beautifully animated [Heroicons](https://heroicons.com) for React Native**, powered by [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/).

A React Native port of [heroicons-animated](https://heroicons-animated.com).

[![npm version](https://img.shields.io/npm/v/@heroicons-animated/react-native.svg)](https://www.npmjs.com/package/@heroicons-animated/react-native)
[![license](https://img.shields.io/npm/l/@heroicons-animated/react-native.svg)](./LICENSE)

---

## Repository Structure

```
├── packages/react-native/   # Publishable @heroicons-animated/react-native npm package
├── app/                      # Expo demo app (icon showcase)
├── components/               # Demo app UI components
├── constants/                # Demo app constants (icon list, theme, site config)
├── scripts/                  # Icon generation script
└── assets/                   # App icons and splash screen
```

## Quick Start

### Install the package

```bash
pnpm add @heroicons-animated/react-native
```

### Use in your app

```tsx
import { HeartIcon, BellIcon, StarIcon } from "@heroicons-animated/react-native";

export default function App() {
  return (
    <View style={{ flexDirection: "row", gap: 16 }}>
      <HeartIcon size={32} color="#ef4444" />
      <BellIcon size={32} color="#6366f1" />
      <StarIcon size={32} color="#eab308" />
    </View>
  );
}
```

See [packages/react-native/README.md](packages/react-native/README.md) for full documentation.

## Development

### Prerequisites

- Node.js 18+
- [pnpm](https://pnpm.io/) 9+
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- iOS Simulator / Android Emulator (or physical device via Expo Go)

### Setup

```bash
# Clone the repo
git clone https://github.com/heroicons-animated/heroicons-animated-react-native.git
cd heroicons-animated-react-native

# Install dependencies
pnpm install

# Start the demo app
pnpm start
```

### Run the Demo App

```bash
# iOS Simulator
pnpm ios

# Android Emulator
pnpm android

# Web (Expo Web)
pnpm web
```

### Regenerating Icons

If the upstream [heroicons-animated](https://github.com/heroicons-animated/heroicons-animated) library adds new icons:

```bash
# Clone the upstream repo (one-time)
git clone --depth 1 https://github.com/heroicons-animated/heroicons-animated.git /tmp/heroicons-animated-upstream

# Run the generation script
pnpm generate-icons
```

### Building the Package

```bash
cd packages/react-native
pnpm build
```

### Publishing

```bash
cd packages/react-native
npm publish --access public
```

### EAS Build (Expo Cloud)

```bash
# Preview build (internal testing)
eas build --profile preview --platform all

# Production build
eas build --profile production --platform all
```

## Credits

- [heroicons-animated](https://heroicons-animated.com) — the original React library by [Aniket Pawar](https://x.com/alaymanguy)
- [Heroicons](https://heroicons.com) — icon designs by the Tailwind CSS team
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/) — animation engine by Software Mansion

## License

[MIT](./LICENSE) — free for personal and commercial use.
