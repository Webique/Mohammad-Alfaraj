"use client";

import { ArrowRight, Play, Sparkles } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function HeroSection() {
  const t = useTranslations("IndexPage.hero");

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Video Background with Enhanced Overlay */}
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
        {/* Multi-layer gradient overlay for depth */}
        <div className="bg-linear-to-b absolute inset-0 from-black/80 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
        {/* Animated light rays */}
        <div className="absolute inset-0 opacity-20">
          <m.div
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(212,175,55,0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(212,175,55,0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(212,175,55,0.3) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="h-full w-full"
          />
        </div>
      </div>

      {/* MORE Floating particles effect */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {[...Array(40)].map((_, i) => (
          <m.div
            key={i}
            className="bg-primary/40 absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1 + "px",
              height: Math.random() * 4 + 1 + "px"
            }}
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1920),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 1080)
            }}
            animate={{
              y: [null, Math.random() * -150 - 50],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 text-center text-white">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-6xl"
        >
          {/* PREMIUM Badge BIGGER */}
          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              type: "spring",
              bounce: 0.5
            }}
            className="border-primary/50 bg-primary/20 shadow-primary/30 mb-10 inline-flex items-center gap-3 rounded-full border-2 px-10 py-5 shadow-2xl backdrop-blur-xl"
          >
            <Sparkles className="text-primary h-6 w-6 animate-pulse" />
            <span className="text-primary text-base font-black uppercase tracking-widest md:text-lg">
              {t("certificate")}
            </span>
            <Sparkles className="text-primary h-6 w-6 animate-pulse" />
          </m.div>

          {/* Main Heading with MASSIVE cinematic styling */}
          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-linear-to-r mb-8 from-white via-white to-gray-300 bg-clip-text text-6xl font-black leading-[1.05] tracking-tight text-transparent md:text-8xl lg:text-9xl"
            style={{
              textShadow:
                "0 4px 40px rgba(0,0,0,0.9), 0 0 80px rgba(212,175,55,0.5)"
            }}
          >
            {t("title")}
          </m.h1>

          {/* Subtitle with BIGGER glow effect */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-6"
          >
            <p className="text-primary mb-3 text-3xl font-black drop-shadow-[0_0_25px_rgba(212,175,55,0.7)] md:text-5xl lg:text-6xl">
              {t("subtitle")}
            </p>
          </m.div>

          {/* Description with ENHANCED readability */}
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto mb-16 max-w-4xl text-xl leading-relaxed text-gray-100 drop-shadow-2xl md:text-2xl lg:text-3xl"
          >
            {t("description")}
          </m.p>

          {/* MASSIVE Enhanced CTAs */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-20 flex flex-col items-center justify-center gap-6 sm:flex-row"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/80 shadow-primary/60 group relative overflow-hidden rounded-full px-14 py-9 text-2xl font-black shadow-2xl transition-all hover:scale-110"
              asChild
            >
              <Link href="#portfolio">
                <span className="relative z-10 flex items-center gap-3">
                  {t("cta")}
                  <ArrowRight className="h-7 w-7 transition-transform group-hover:translate-x-2" />
                </span>
                <div className="bg-linear-to-r absolute inset-0 from-transparent via-white/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hover:border-primary hover:bg-primary/30 group rounded-full border-2 border-white/50 bg-white/10 px-14 py-9 text-2xl font-black text-white backdrop-blur-xl transition-all hover:scale-110"
              asChild
            >
              <Link
                href={`https://wa.me/${siteConfig.support.whatsapp.replace(/\+/g, "")}`}
              >
                <Play className="mr-3 h-7 w-7 transition-transform group-hover:scale-125" />
                {t("ctaSecondary")}
              </Link>
            </Button>
          </m.div>

          {/* PREMIUM Stats with HUGE cards */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:gap-10"
          >
            {[
              { value: "8+", label: "Major Clients", icon: "🏢" },
              { value: "4K", label: "Cinema Quality", icon: "🎬" },
              { value: "100%", label: "GACA Certified", icon: "✓" }
            ].map((stat, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.8 + index * 0.1,
                  duration: 0.5,
                  type: "spring"
                }}
                whileHover={{ scale: 1.12, y: -15 }}
                className="hover:border-primary/60 hover:shadow-primary/40 group relative overflow-hidden rounded-3xl border-2 border-white/30 bg-white/5 p-10 backdrop-blur-2xl transition-all hover:shadow-2xl md:p-12"
              >
                <div className="bg-linear-to-br from-primary/30 absolute inset-0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10 space-y-4">
                  <div className="text-6xl md:text-7xl">{stat.icon}</div>
                  <div className="text-primary text-5xl font-black drop-shadow-[0_0_25px_rgba(212,175,55,0.8)] md:text-7xl">
                    {stat.value}
                  </div>
                  <div className="text-base font-bold uppercase tracking-wider text-gray-100 md:text-lg">
                    {stat.label}
                  </div>
                </div>
                {/* BIGGER Decorative corner accent */}
                <div className="bg-primary/30 absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              </m.div>
            ))}
          </m.div>
        </m.div>

        {/* Animated Scroll Indicator */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <m.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex h-12 w-7 justify-center rounded-full border-2 border-white/60 pt-2 backdrop-blur-sm"
          >
            <m.div
              animate={{ height: ["8px", "16px", "8px"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1 rounded-full bg-white/80"
            />
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
