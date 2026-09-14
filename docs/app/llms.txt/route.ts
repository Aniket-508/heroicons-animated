import { getIcons } from "@/actions/get-icons";
import { LINK, SITE } from "@/constants";

export function GET() {
  const icons = getIcons();
  const iconNames = icons.map((icon) => icon.name).join(", ");

  const content = `# ${SITE.NAME}

> Beautifully animated Heroicons for React

${SITE.NAME} is an open-source (MIT License) collection of smooth animated ${icons.length} icons for React projects.

## Overview

- Website: ${SITE.URL}
- GitHub: ${LINK.GITHUB}
- Author: ${SITE.AUTHOR.TWITTER} (${LINK.TWITTER})

## Packages

| Package | Framework | Animation Engine |
|---------|-----------|------------------|
| @heroicons-animated/react | React 18/19 | Motion |

## Installation

\`\`\`bash
npm install @heroicons-animated/react motion
\`\`\`

\`\`\`tsx
import { BeakerIcon } from '@heroicons-animated/react'

export default function App() {
  return <BeakerIcon className="size-6" />
}
\`\`\`

### Copy-paste via CLI

\`\`\`bash
npx shadcn@latest add "${SITE.URL}/r/{icon-name}.json"
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
