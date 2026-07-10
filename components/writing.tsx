import { Link } from "@nextui-org/link";
import { FaArrowRight } from "react-icons/fa";

import { sortedPosts, formatDate } from "@/config/posts";
import { SectionHeading, Reveal } from "@/components/section";

const Writing = () => {
  const recent = sortedPosts.slice(0, 3);

  return (
    <section className="pt-24 sm:pt-28" id="writing">
      <SectionHeading eyebrow="Blog" index="03" title="Writing" />
      <div className="divide-y divide-default-200 border-y border-default-200">
        {recent.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.06}>
            <Link
              className="group flex flex-col gap-2 px-1 py-6 sm:flex-row sm:items-baseline sm:gap-6"
              href={`/blog/${post.slug}`}
            >
              <span className="shrink-0 font-mono text-xs text-default-400 sm:w-28">
                {formatDate(post.date)}
              </span>
              <span className="flex-grow">
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </span>
                <span className="mt-1 block text-sm text-default-500">
                  {post.description}
                </span>
              </span>
              <FaArrowRight
                className="hidden shrink-0 text-default-400 transition-[transform,color] duration-150 ease-[var(--ease-out-custom)] group-hover:translate-x-1 group-hover:text-primary sm:mt-1 sm:block"
                size={13}
              />
            </Link>
          </Reveal>
        ))}
      </div>
      <div className="mt-6">
        <Link
          className="group inline-flex items-center gap-2 font-mono text-sm text-default-600 hover:text-primary"
          href="/blog"
        >
          All posts
          <FaArrowRight
            className="transition-transform group-hover:translate-x-1"
            size={13}
          />
        </Link>
      </div>
    </section>
  );
};

export default Writing;
