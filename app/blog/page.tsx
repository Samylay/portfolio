import { Metadata } from "next";
import { Link } from "@nextui-org/link";

import { sortedPosts, formatDate } from "@/config/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on building software, self-hosting, debugging, and the occasional hard-won fix.",
};

export default function BlogPage() {
  return (
    <div>
      <header className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
          Blog
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Writing
        </h1>
        <p className="mt-4 text-lg text-default-500">
          Notes on building software, self-hosting, and debugging — written down
          so the next person (often future me) doesn&apos;t have to rediscover
          it.
        </p>
      </header>

      <div className="mt-12 divide-y divide-default-200 border-y border-default-200">
        {sortedPosts.map((post) => (
          <article key={post.slug}>
            <Link
              className="group flex flex-col gap-3 px-1 py-8"
              href={`/blog/${post.slug}`}
            >
              <div className="flex items-center gap-3 font-mono text-xs text-default-400">
                <span>{formatDate(post.date)}</span>
                <span className="h-px w-4 bg-default-300" />
                <span>{post.readingTime}</span>
              </div>
              <h2 className="text-2xl font-semibold text-foreground transition-colors group-hover:text-primary">
                {post.title}
              </h2>
              <p className="max-w-2xl text-default-500">{post.description}</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-default-200 bg-default-100/60 px-2 py-0.5 font-mono text-xs text-default-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
