import { LINK, SITE } from "@heroicons-animated/shared";
import { getIcons } from "@/actions/get-icons";

export function GET() {
  const icons = getIcons();
  const iconNames = icons.map((icon) => icon.name).join(", ");

  const content = `# ${SITE.NAME}

> Beautifully animated heroicons for React, Vue, and Svelte

${SITE.NAME} is an open-source (MIT License) collection of smooth animated ${icons.length} icons for React, Vue, and Svelte projects.

## Overview

- Website: ${SITE.URL}
- GitHub: ${LINK.GITHUB}
- Author: ${SITE.AUTHOR.TWITTER} (${LINK.TWITTER})

## Packages

| Package | Framework | Animation Engine |
|---------|-----------|------------------|
| @heroicons-animated/react | React 18/19 | Motion |
| @heroicons-animated/vue | Vue 3 | @vueuse/motion |
| @heroicons-animated/svelte | Svelte 5 | CSS animations |

## Installation

### React

\`\`\`bash
npm install @heroicons-animated/react motion
\`\`\`

\`\`\`tsx
import { BeakerIcon } from '@heroicons-animated/react'

export default function App() {
  return <BeakerIcon className="size-6" />
}
\`\`\`

### Vue

\`\`\`bash
npm install @heroicons-animated/vue @vueuse/motion
\`\`\`

\`\`\`vue
<script setup>
import { BeakerIcon } from '@heroicons-animated/vue'
</script>

<template>
  <BeakerIcon class="size-6" />
</template>
\`\`\`

### Svelte

\`\`\`bash
npm install @heroicons-animated/svelte
\`\`\`

\`\`\`svelte
<script>
  import { BeakerIcon } from '@heroicons-animated/svelte'
</script>

<BeakerIcon class="size-6" />
\`\`\`

### Copy-paste via CLI

#### React
\`\`\`bash
npx shadcn@latest add "${SITE.URL}/r/{icon-name}.json"
\`\`\`

#### Vue
\`\`\`bash
npx shadcn-vue@latest add "${SITE.URL}/r/vue/{icon-name}.json"
\`\`\`

#### Svelte
\`\`\`bash
npx shadcn-svelte@latest add "${SITE.URL}/r/svelte/{icon-name}.json"
\`\`\`

Replace {icon-name} with the desired icon name (kebab-case).

## Available Icons (${icons.length} total)

${iconNames}

## Icon Page URLs

Each icon has a dedicated page at: ${SITE.URL}/icons/{icon-name}

For example:
- ${SITE.URL}/icons/beaker
- ${SITE.URL}/icons/academic-cap
- ${SITE.URL}/icons/arrow-down

## License

MIT License - free for personal and commercial use.

## Contributing

Contributions welcome! See ${LINK.GITHUB}/blob/main/CONTRIBUTING.md for guidelines.
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
