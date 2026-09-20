import Image from "next/image";

type BrandLogoProps = {
  size?: number;
};

export function BrandLogo({ size = 32 }: BrandLogoProps) {
  return (
    <span
      aria-hidden="true"
      className="relative block shrink-0 overflow-hidden"
      style={{ height: size, width: size }}
    >
      <Image
        priority
        alt=""
        className="absolute left-1/2 top-1/2 h-auto max-w-none -translate-x-1/2 -translate-y-1/2 mix-blend-multiply dark:invert dark:mix-blend-screen"
        height={526}
        src="/images/sl-logo.png"
        style={{ width: size }}
        width={607}
      />
    </span>
  );
}
