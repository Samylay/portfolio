import { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { posts } from "@/config/posts";
import { projects } from "@/config/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  return [
    { url: base },
    { url: `${base}/about` },
    { url: `${base}/blog` },
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: p.date,
    })),
    ...projects.map((p) => ({ url: `${base}/projects/${p.slug}` })),
  ];
}
