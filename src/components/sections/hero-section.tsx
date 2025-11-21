"use client";

import { ArrowRight } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function HeroSection() {
  const t = useTranslations("LandingPage.hero");

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="bg-linear-to-b absolute inset-0 from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 text-center text-white">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="border-primary/30 bg-primary/10 mb-6 inline-block rounded-full border px-4 py-2 backdrop-blur-sm"
          >
            <p className="text-primary text-sm font-medium">
              {t("certificate")}
            </p>
          </m.div>

          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 text-5xl font-bold leading-tight md:text-7xl"
          >
            {t("title")}
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-primary mb-3 text-xl font-semibold md:text-2xl"
          >
            {t("subtitle")}
          </m.p>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto mb-10 max-w-3xl text-lg text-gray-200 md:text-xl"
          >
            {t("description")}
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 group px-8 py-6 text-lg"
              asChild
            >
              <Link href="#portfolio">
                {t("cta")}
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 bg-primary/10 hover:bg-primary/20 px-8 py-6 text-lg text-white backdrop-blur-sm"
              asChild
            >
              <Link
                href={`https://wa.me/${siteConfig.support.whatsapp.replace(/\+/g, "")}`}
              >
                {t("ctaSecondary")}
              </Link>
            </Button>
          </m.div>
        </m.div>

        {/* Scroll Indicator */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <m.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex h-10 w-6 justify-center rounded-full border-2 border-white/50 pt-2"
          >
            <div className="h-2 w-1 rounded-full bg-white/70" />
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
