import {
  generateRegistryRssFeed,
  type RegistryItem,
  type UrlResolverByItem,
} from "@wandry/analytics-sdk";
import type { NextRequest } from "next/server";
import { SITE } from "@/constants";
import { ICON_MANIFEST } from "@/lib/manifest";

export const revalidate = 3600;

export async function GET(request: NextRequest) {
  const baseUrl = new URL(request.url).origin;

  const rssXml = await generateRegistryRssFeed({
    baseUrl,
    componentsUrl: ((item: RegistryItem) => {
      const originalUrl = ICON_MANIFEST.find((i) => i.name === item.name);
      return `/icons/${originalUrl?.name?.toLowerCase()}`;
    }) as UrlResolverByItem,
    excludeItemTypes: [
      "registry:style",
      "registry:block",
      "registry:page",
      "registry:hook",
      "registry:lib",
    ],
    rss: {
      title: `@${SITE.NAME}`,
      description: `Subscribe to @${SITE.NAME} updates`,
      link: SITE.URL,
      pubDateStrategy: "githubLastEdit",
    },
    github: {
      owner: SITE.AUTHOR.GITHUB,
      repo: SITE.NAME,
      token: process.env.GITHUB_TOKEN,
    },
  });

  if (!rssXml) {
    return new Response("RSS feed not available", {
      status: 404,
      headers: { "Content-Type": "text/plain" },
    });
  }

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control":
        "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
