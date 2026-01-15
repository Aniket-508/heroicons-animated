import type { MetadataRoute } from "next";

import { SITE } from "@heroicons-animated/shared";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE.URL}/sitemap.xml`,
  };
}
