import type { ComponentType } from "react";

import EduroamPost from "@/content/posts/graphene-eduroam-fix";

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  readingTime: string;
  tags: string[];
  Content: ComponentType;
};

export const posts: Post[] = [
  {
    slug: "graphene-eduroam-empty-anonymous-identity",
    title:
      "eduroam won't connect on your Pixel? Check the Anonymous Identity field",
    description:
      "A GrapheneOS eduroam profile can look perfectly configured and still fail — the Wi-Fi associates, then authentication silently times out. Here's how to prove it over ADB and fix it with one field.",
    date: "2026-07-10",
    readingTime: "6 min read",
    tags: ["GrapheneOS", "Networking", "802.1X", "Debugging"],
    Content: EduroamPost,
  },
];

export const sortedPosts = [...posts].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
