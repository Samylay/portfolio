import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { siteConfig } from "@/config/site";

const Hero = () => {
  return (
    <section className="pt-10 sm:pt-16" id="top">
      <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <p className="fade-up flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for new work
          </p>

          <h1 className="fade-up fade-up-1 mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            Samy Layaida
          </h1>

          <p className="fade-up fade-up-2 mt-4 text-xl text-default-600 sm:text-2xl">
            Full-stack software engineer building web apps end to end — and
            running the homelab they live on.
          </p>

          <p className="fade-up fade-up-3 mt-5 max-w-xl text-default-500">
            Based in Paris. I like shipping small, sharp products, wiring up
            self-hosted infrastructure, and writing down what I learn along the
            way. Currently employed and open to interesting problems.
          </p>

          <div className="fade-up fade-up-4 mt-8 flex flex-wrap items-center gap-3">
            <Button
              as={Link}
              className="font-medium transition-[transform,box-shadow] duration-200 ease-[var(--ease-out-custom)] hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.97]"
              color="primary"
              href={siteConfig.links.contact}
              radius="full"
              variant="shadow"
            >
              Get in touch
            </Button>
            <Button
              isExternal
              as={Link}
              className="transition-[transform,box-shadow] duration-200 ease-[var(--ease-out-custom)] hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.97]"
              href={siteConfig.links.github}
              radius="full"
              startContent={<FaGithub size={18} />}
              variant="bordered"
            >
              GitHub
            </Button>
            <Button
              isExternal
              isIconOnly
              as={Link}
              aria-label="LinkedIn"
              className="transition-[transform,box-shadow] duration-200 ease-[var(--ease-out-custom)] hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.97]"
              href={siteConfig.links.linkedin}
              radius="full"
              variant="bordered"
            >
              <FaLinkedinIn size={16} />
            </Button>
          </div>
        </div>

        <div className="fade-up relative h-32 w-32 shrink-0 sm:h-44 sm:w-44">
          <div className="absolute -inset-2 rounded-full bg-primary/15 blur-2xl" />
          <div className="relative h-full w-full overflow-hidden rounded-full border border-default-200 ring-1 ring-primary/20">
            <Image
              priority
              alt="Samy Layaida"
              className="h-full w-full object-cover"
              height={176}
              src="/images/my_image.jpg"
              width={176}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
