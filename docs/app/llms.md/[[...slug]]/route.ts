import type { NextRequest } from "next/server";
import { getIcons } from "@/actions/get-icons";
import { LINK, SITE } from "@/constants";
import { kebabToPascalCase } from "@/lib/kebab-to-pascal";
import { ICON_MANIFEST } from "@/lib/manifest";

type RouteContext = {
  params: Promise<{ slug?: string[] }>;
};

const getIconBySlug = (slug: string) => {
  return ICON_MANIFEST.find((icon) => icon.name === slug);
};

const getSimilarIcons = (
  currentIcon: (typeof ICON_MANIFEST)[number],
  limit = 5
) => {
  const currentKeywords = new Set(currentIcon.keywords);
  return ICON_MANIFEST.filter((icon) => icon.name !== currentIcon.name)
    .map((icon) => ({
      icon,
      score: icon.keywords.filter((k) => currentKeywords.has(k)).length,
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.icon);
};

const generateHomePage = () => {
  const icons = getIcons();

  const iconsList = icons
    .map(
      (icon) =>
        `- [${icon.name}](${SITE.URL}/icons/${icon.name}) - Keywords: ${icon.keywords.slice(0, 5).join(", ")}`
    )
    .join("\n");

  return `# ${SITE.NAME} - Home

> Beautifully animated Heroicons for React

## About

${SITE.NAME} is an open-source (MIT License) collection of ${icons.length} beautifully animated icons built with Motion and Heroicons for React.

## Quick Links

- Website: ${SITE.URL}
- GitHub: ${LINK.GITHUB}
- License: ${LINK.LICENSE}
- Sponsor: ${LINK.SPONSOR}

## Package

- Package: "@heroicons-animated/react"
- Peer dependencies: "react", "motion"
- Supports: React 18 and 19

## Installation

\`\`\`bash
npm install @heroicons-animated/react motion
\`\`\`

## Copy-paste via CLI

\`\`\`bash
npx shadcn@latest add "${SITE.URL}/r/{icon-name}.json"
\`\`\`

Replace {icon-name} with the desired icon name (kebab-case).

## All Icons (${icons.length} total)

${iconsList}

## Features

- ${icons.length} animated icons
- React support
- Smooth animations
- Fully customizable (size, color via className)
- Tree-shakable imports
- TypeScript support
- MIT licensed
- Copy-paste ready

## Author

${SITE.AUTHOR.NAME} - ${LINK.TWITTER}
`;
};

const generateIconPage = (slug: string) => {
  const icon = getIconBySlug(slug);

  if (!icon) {
    return null;
  }

  const pascalName = kebabToPascalCase(slug);
  const similarIcons = getSimilarIcons(icon);

  return `# ${pascalName}

> Animated ${icon.name.replace(/-/g, " ")} icon for React

## Overview

- **Name**: ${pascalName}
- **Slug**: ${icon.name}
- **Page URL**: ${SITE.URL}/icons/${slug}
- **License**: MIT

## Keywords

${icon.keywords.map((k) => `- ${k}`).join("\n")}

## Installation

\`\`\`bash
npm install @heroicons-animated/react motion
\`\`\`

\`\`\`tsx
import { ${pascalName} } from '@heroicons-animated/react'

export default function App() {
  return <${pascalName} className="size-6" />
}
\`\`\`

### Copy-paste via CLI

\`\`\`bash
npx shadcn@latest add "${SITE.URL}/r/${slug}.json"
\`\`\`

## Similar Icons

${similarIcons.length > 0 ? similarIcons.map((i) => `- [${kebabToPascalCase(i.name)}](${SITE.URL}/icons/${i.name})`).join("\n") : "No similar icons found."}

## Links

- [All Icons](${SITE.URL})
- [GitHub](${LINK.GITHUB})
- [License](${LINK.LICENSE})
`;
};

const generateNotFound = (path: string) => {
  return `# Page Not Found

The page "${path}" was not found.

## Available Pages

- [Home](${SITE.URL})
- [All Icons](${SITE.URL}/#icons)
- [GitHub](${LINK.GITHUB})
`;
};

export async function GET(_request: NextRequest, context: RouteContext) {
  const { slug } = await context.params;

  let content: string;
  let status = 200;

  if (!slug || slug.length === 0) {
    content = generateHomePage();
  } else if (slug[0] === "page") {
    content = generateHomePage();
  } else if (slug[0] === "icons" && slug.length === 2) {
    const iconSlug = slug[1];
    const iconContent = generateIconPage(iconSlug);
    if (iconContent) {
      content = iconContent;
    } else {
      content = generateNotFound(`/icons/${iconSlug}`);
      status = 404;
    }
  } else {
    content = generateNotFound(`/${slug.join("/")}`);
    status = 404;
  }

  return new Response(content, {
    status,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}
