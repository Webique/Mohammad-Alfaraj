"use client";

import { ArrowRight, Menu, Phone, X } from "lucide-react";
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
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-border/50 bg-background/98 border-b shadow-2xl shadow-black/10 backdrop-blur-3xl"
          : "bg-transparent"
      )}
    >
      <div className="layout">
        <div className="flex h-20 items-center justify-between lg:h-24">
          {/* Logo with enhanced animation */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative z-10"
          >
            <Link href="/" className="group flex items-center gap-3">
              <Logo className="transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.8)]" />
            </Link>
          </m.div>

          {/* Desktop Navigation with enhanced styling */}
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
                  className="hover:text-primary group relative px-6 py-3 font-semibold transition-all duration-300"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="bg-primary/10 absolute inset-0 scale-0 rounded-xl transition-transform duration-300 group-hover:scale-100" />
                  <span className="bg-primary absolute bottom-2 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full transition-all duration-300 group-hover:w-2/3" />
                </Link>
              </m.div>
            ))}
          </nav>

          {/* CTA & Language Switcher with enhanced design */}
          <m.div
            className="hidden items-center gap-5 lg:flex"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <LocaleSwitcher isTop={false} />

            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/80 shadow-primary/50 group relative overflow-hidden rounded-full px-10 py-7 text-lg font-black shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
              asChild
            >
              <Link
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="mr-2 h-6 w-6 transition-transform group-hover:rotate-12" />
                <span className="relative z-10">{t("cta")}</span>
                <div className="bg-linear-to-r absolute inset-0 z-0 from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            </Button>
          </m.div>

          {/* Mobile Menu Button with enhanced design */}
          <div className="flex items-center gap-3 lg:hidden">
            <LocaleSwitcher className="w-auto" isTop={false} />

            <button
              className="hover:bg-primary/15 relative z-10 rounded-xl p-3 transition-all duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="text-primary h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <m.div
          initial={false}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
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
                  className="hover:bg-primary/15 hover:text-primary group block rounded-xl px-5 py-4 font-semibold transition-all duration-300"
                >
                  <span className="flex items-center justify-between">
                    {item.label}
                    <ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                  </span>
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
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/50 w-full rounded-full py-6 text-lg font-black shadow-xl transition-all hover:scale-[1.03] hover:shadow-2xl"
                asChild
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={siteConfig.links.whatsapp}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="mr-2 h-6 w-6" />
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
