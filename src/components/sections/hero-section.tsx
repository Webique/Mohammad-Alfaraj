"use client";

import { ArrowRight, Play } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function HeroSection() {
  const t = useTranslations("LandingPage.hero");

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Video Background with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full scale-105 object-cover"
        >
          <source src="/اليوم الوطني 95.mp4" type="video/mp4" />
        </video>
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 text-center text-white">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl"
        >
          {/* Badge */}
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 backdrop-blur-sm"
          >
            <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <p className="text-sm font-medium text-primary">{t("certificate")}</p>
          </m.div>

          {/* Main Heading */}
          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl"
            style={{
              textShadow:
                "0 4px 20px rgba(0,0,0,0.5), 0 0 40px rgba(212,175,55,0.3)"
            }}
          >
            {t("title")}
          </m.h1>

          {/* Subtitle */}
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-3 text-xl font-semibold text-primary md:text-2xl"
          >
            {t("subtitle")}
          </m.p>

          {/* Description */}
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto mb-10 max-w-3xl text-lg text-gray-200 md:text-xl"
          >
            {t("description")}
          </m.p>

          {/* CTAs */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="group bg-primary px-8 py-6 text-lg text-primary-foreground shadow-2xl shadow-primary/50 transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-primary/70"
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
              className="border-2 border-white/30 bg-white/10 px-8 py-6 text-lg text-white backdrop-blur-md transition-all hover:scale-105 hover:border-primary/50 hover:bg-primary/20"
              asChild
            >
              <Link
                href={`https://wa.me/${siteConfig.support.whatsapp.replace(/\+/g, "")}`}
              >
                <Play className="mr-2 h-5 w-5" />
                {t("ctaSecondary")}
              </Link>
            </Button>
          </m.div>

          {/* Stats */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-16 grid grid-cols-3 gap-8"
          >
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">8+</div>
              <div className="text-sm text-gray-300">Major Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">4K</div>
              <div className="text-sm text-gray-300">Cinema Quality</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-gray-300">GACA Certified</div>
            </div>
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
