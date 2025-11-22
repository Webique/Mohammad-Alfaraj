"use client";

import { Play, Sparkles, Video } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

export default function VideoShowcaseSection() {
  const t = useTranslations("IndexPage.videoShowcase");
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="bg-background relative overflow-hidden py-24">
      {/* Enhanced decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <m.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="bg-primary/10 absolute -end-32 top-1/4 h-[600px] w-[600px] rounded-full blur-3xl"
        />
        <m.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="bg-primary/10 absolute -start-32 bottom-1/4 h-[600px] w-[600px] rounded-full blur-3xl"
        />
        {/* Additional accent orb */}
        <m.div
          animate={{
            y: [0, -50, 0],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="bg-primary/20 absolute start-1/2 top-1/2 h-64 w-64 rounded-full blur-2xl"
        />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-primary/30 bg-primary/10 mb-6 inline-flex items-center gap-2 rounded-full border px-6 py-2.5 shadow-lg backdrop-blur-sm"
          >
            <Sparkles className="text-primary h-4 w-4" />
            <span className="text-primary text-sm font-bold uppercase tracking-wider">
              {t("badge")}
            </span>
          </m.div>
          <h2 className="mb-5 text-4xl font-black md:text-5xl lg:text-6xl">
            {t("title")}
          </h2>
          <p className="text-primary mx-auto max-w-2xl text-xl font-bold md:text-2xl">
            {t("subtitle")}
          </p>
        </m.div>

        {/* Video Container */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-6xl"
        >
          <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
            {/* Video */}
            <div className="relative aspect-video">
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                controls
                poster="/images/video-placeholder.png"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              >
                <source src="/national-day.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play Button Overlay (shows when not playing) */}
              {!isPlaying && (
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity group-hover:bg-black/50"
                  style={{ pointerEvents: "none" }}
                >
                  <m.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary flex h-24 w-24 items-center justify-center rounded-full shadow-2xl transition-all hover:shadow-[0_0_40px_rgba(212,175,55,0.6)]"
                    style={{ pointerEvents: "auto" }}
                    onClick={() => {
                      videoRef.current?.play();
                    }}
                  >
                    <Play className="text-primary-foreground ms-1 h-12 w-12 fill-current" />
                  </m.button>
                </m.div>
              )}
            </div>

            {/* Animated border */}
            <div className="border-primary/0 group-hover:border-primary/60 pointer-events-none absolute inset-0 rounded-3xl border-[3px] transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]" />

            {/* Video Badge */}
            <m.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="pointer-events-none absolute start-6 top-6 z-20"
            >
              <div className="bg-primary/95 flex items-center gap-2 rounded-xl px-4 py-2 shadow-xl backdrop-blur-sm">
                <Video className="text-primary-foreground h-5 w-5" />
                <span className="text-primary-foreground text-sm font-black">
                  {t("featured")}
                </span>
              </div>
            </m.div>
          </div>

          {/* Video Info */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 text-center"
          >
            <h3 className="mb-3 text-2xl font-black">{t("videoTitle")}</h3>
            <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed">
              {t("videoDescription")}
            </p>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
