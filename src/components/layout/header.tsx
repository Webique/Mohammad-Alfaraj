"use client";

import { Menu, X } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import * as React from "react";

import LocaleSwitcher from "@/components/locale-switcher";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation.public";
import { cn } from "@/lib/utils";

export default function Header() {
  const t = useTranslations("Header");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.portfolio"), href: "#portfolio" },
    { label: t("nav.contact"), href: "#contact" }
  ];

  return (
    <m.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="layout">
        <div className="flex h-20 items-center justify-between lg:h-24">
          {/* Logo with animation */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative z-10"
          >
            <Link href="/" className="group flex items-center gap-3">
              <Logo className="transition-transform duration-300 group-hover:scale-105" />
            </Link>
          </m.div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <Link
                  href={item.href}
                  className="hover:text-primary group relative px-4 py-2 font-medium transition-colors"
                >
                  {item.label}
                  <span className="bg-primary absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
                </Link>
              </m.div>
            ))}
          </nav>

          {/* CTA & Language Switcher */}
          <m.div
            className="hidden items-center gap-4 lg:flex"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <LocaleSwitcher isTop={false} />

            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/50 group relative overflow-hidden px-6 py-2.5 transition-all hover:shadow-lg"
              asChild
            >
              <Link
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10">{t("cta")}</span>
                <div className="from-primary/0 to-primary/0 absolute inset-0 -z-0 bg-gradient-to-r via-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </Button>
          </m.div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <LocaleSwitcher className="w-auto" isTop={false} />

            <button
              className="hover:bg-muted relative z-10 rounded-lg p-2 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <m.div
          initial={false}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden lg:hidden"
        >
          <nav className="border-border space-y-2 border-t py-6">
            {navItems.map((item, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:bg-primary/10 hover:text-primary block rounded-lg px-4 py-3 font-medium transition-colors"
                >
                  {item.label}
                </Link>
              </m.div>
            ))}

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="pt-4"
            >
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                asChild
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={siteConfig.links.whatsapp}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("cta")}
                </a>
              </Button>
            </m.div>
          </nav>
        </m.div>
      </div>
    </m.header>
  );
}
