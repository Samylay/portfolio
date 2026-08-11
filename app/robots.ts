import { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

// Explicitly open to all crawlers, including AI/answer-engine bots
// (GPTBot, ClaudeBot, PerplexityBot inherit the wildcard allow).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
