import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@nextui-org/link";
import { FaArrowLeft } from "react-icons/fa";

import { posts, getPost, formatDate } from "@/config/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);

  if (!post) notFound();

  const { Content } = post;

  return (
    <article className="mx-auto max-w-2xl">
      <Link
        className="group inline-flex items-center gap-2 font-mono text-sm text-default-500 hover:text-primary"
        href="/blog"
      >
        <FaArrowLeft
          className="transition-transform group-hover:-translate-x-1"
          size={12}
        />
        Blog
      </Link>

      <header className="mt-8 border-b border-default-200 pb-8">
        <div className="flex items-center gap-3 font-mono text-xs text-default-400">
          <span>{formatDate(post.date)}</span>
          <span className="h-px w-4 bg-default-300" />
          <span>{post.readingTime}</span>
        </div>
        <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-default-200 bg-default-100/60 px-2 py-0.5 font-mono text-xs text-default-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="mt-10">
        <Content />
      </div>

      <footer className="mt-16 border-t border-default-200 pt-8">
        <p className="text-default-500">
          Found this useful, or hit a variation of it?{" "}
          <Link className="link-underline text-primary" href="/#contact">
            Let me know
          </Link>
          .
        </p>
      </footer>
    </article>
  );
}
