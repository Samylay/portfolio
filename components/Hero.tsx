import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { siteConfig } from "@/config/site";

const Hero = () => {
  return (
    <section className="pt-12 sm:pt-20" id="top">
      <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <h1 className="fade-up font-display text-4xl font-medium leading-[1.08] tracking-tight text-foreground sm:text-6xl">
            Hi, I&apos;m Samy. I build web apps and keep them running.
          </h1>

          <p className="fade-up fade-up-2 mt-5 max-w-xl text-lg leading-relaxed text-default-600 sm:text-xl">
            Full-stack software engineer in Paris. Most of my work is
            TypeScript and React; the parts I can&apos;t help tinkering with
            run on servers at home. Currently employed, always happy to hear
            about interesting problems.
          </p>

          <div className="fade-up fade-up-3 mt-8 flex flex-wrap items-center gap-3">
            <Button
              as={Link}
              className="rounded-md font-medium transition-[transform,box-shadow] duration-200 ease-[var(--ease-out-custom)] hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.97]"
              color="primary"
              href={siteConfig.links.contact}
              radius="sm"
              variant="flat"
            >
              Get in touch
            </Button>
            <Button
              isExternal
              as={Link}
              className="rounded-md transition-[transform,box-shadow] duration-200 ease-[var(--ease-out-custom)] hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.97]"
              href={siteConfig.links.github}
              radius="sm"
              startContent={<FaGithub size={18} />}
              variant="bordered"
            >
              GitHub
            </Button>
            <Button
              isExternal
              as={Link}
              aria-label="LinkedIn"
              className="transition-[transform,box-shadow] duration-200 ease-[var(--ease-out-custom)] hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.97]"
              href={siteConfig.links.linkedin}
              radius="sm"
              variant="bordered"
            >
              <FaLinkedinIn size={16} />
            </Button>
          </div>
        </div>

        <div className="fade-up relative h-32 w-32 shrink-0 sm:h-44 sm:w-44">
          <div className="relative h-full w-full overflow-hidden rounded-full ring-1 ring-default-200">
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
