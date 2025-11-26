"use client";

import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useVideoAutoplay } from "@/hooks/use-video-autoplay";

export default function HeroSection() {
  const t = useTranslations("IndexPage.hero");
  // Fix for Safari
  const { videoRef } = useVideoAutoplay();
  return (
    <section className="relative flex min-h-[700px] items-center overflow-hidden sm:min-h-[600px] lg:h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="z-1 absolute inset-0 h-full w-full object-cover"
          muted
          autoPlay
          playsInline
          loop
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="bg-linear-to-b z-1 absolute inset-0 from-black/30 via-black/10 to-black/30" />
        {/* Animated light rays */}
        <div className="z-1 absolute inset-0 opacity-20">
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

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 pt-24 text-center text-white lg:pt-32">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-6xl"
        >
          {/* Vision 2030 badge */}
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="bg-white/10 mx-auto mb-6 w-fit rounded-2xl px-6 py-3 backdrop-blur-md shadow-2xl md:mb-8"
          >
            <ExportedImage
              src="/images/2030.png"
              alt="Vision 2030 logo"
              width={360}
              height={120}
              className="max-h-20 w-auto object-contain"
              priority
            />
          </m.div>

          {/* PREMIUM Badge */}
          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              type: "spring",
              bounce: 0.5
            }}
            className="border-primary/50 bg-primary/20 shadow-primary/30 mb-6 inline-flex items-center gap-2 rounded-full border px-5 py-2 shadow-2xl backdrop-blur-xl md:mb-8 md:gap-3 md:px-6 md:py-3"
          >
            <Sparkles className="text-primary h-4 w-4 animate-pulse md:h-5 md:w-5" />
            <span className="text-primary text-xs font-bold uppercase tracking-wider md:text-sm">
              {t("certificate")}
            </span>
            <Sparkles className="text-primary h-4 w-4 animate-pulse md:h-5 md:w-5" />
          </m.div>

          {/* Main Heading with cinematic styling */}
          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-linear-to-r mb-4 from-white via-white to-gray-300 bg-clip-text text-4xl font-black leading-tight tracking-tight text-transparent md:mb-6 md:text-6xl lg:text-7xl"
            style={{
              textShadow:
                "0 4px 40px rgba(0,0,0,0.9), 0 0 80px rgba(212,175,55,0.5)"
            }}
          >
            {t("title")}
          </m.h1>

          {/* Subtitle with glow effect */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-4 md:mb-6"
          >
            <p className="text-primary mb-2 text-xl font-bold drop-shadow-[0_0_20px_rgba(212,175,55,0.7)] md:mb-3 md:text-3xl lg:text-4xl">
              {t("subtitle")}
            </p>
          </m.div>

          {/* Description with enhanced readability */}
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-gray-100 drop-shadow-2xl md:mb-12 md:text-lg lg:text-xl"
          >
            {t("description")}
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row md:mb-16"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 shadow-primary/50 hover:shadow-primary/70 group relative overflow-hidden rounded-full py-6 text-base font-bold text-black shadow-2xl transition-all duration-300 hover:scale-105 has-[>svg]:px-4 md:py-7 md:text-lg"
              asChild
            >
              <Link href="#portfolio">
                <span className="relative z-10 flex items-center gap-2">
                  {t("cta")}
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </span>
                <div className="bg-linear-to-r absolute inset-0 from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hover:border-primary/80 hover:bg-primary/20 group rounded-full border-2 border-white/40 bg-white/5 py-6 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:text-white has-[>svg]:px-6 md:py-7 md:text-lg"
              asChild
            >
              <Link href="#contact">
                <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                {t("ctaSecondary")}
              </Link>
            </Button>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
