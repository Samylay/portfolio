"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, Logo } from "@/components/icons";

export const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href.startsWith("/#") ? pathname === "/" : pathname.startsWith(href);

  return (
    <NextUINavbar
      isBordered
      classNames={{ base: "bg-background/70 backdrop-blur-md" }}
      isMenuOpen={isMenuOpen}
      maxWidth="lg"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent justify="start">
        <NavbarBrand className="max-w-fit">
          <NextLink
            className="flex items-center gap-2 text-primary"
            href="/"
            onClick={() => setIsMenuOpen(false)}
          >
            <Logo />
            <span className="font-mono text-sm font-semibold tracking-tight text-foreground">
              samy<span className="text-primary">.</span>layaida
            </span>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-7 sm:flex" justify="center">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href} isActive={isActive(item.href)}>
            <Link
              className={clsx(
                "font-mono text-sm",
                isActive(item.href) ? "text-primary" : "text-default-600",
              )}
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex items-center gap-3">
          <Link
            isExternal
            aria-label="GitHub"
            className="text-default-500 hover:text-primary"
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarMenuToggle className="sm:hidden" />
      </NavbarContent>

      <NavbarMenu className="bg-background/95 pt-6">
        {siteConfig.navItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              className="w-full font-mono text-lg text-foreground"
              href={item.href}
              size="lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
};
