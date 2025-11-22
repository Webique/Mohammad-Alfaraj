"use client";

import { Check, Sparkles } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function FeaturesSection() {
  const t = useTranslations("IndexPage.features");

  const features = [
    t("list.cinema"),
    t("list.colorProfiles"),
    t("list.streaming"),
    t("list.rcPro"),
    t("list.security"),
    t("list.editing"),
    t("list.turnaround"),
    t("list.insured")
  ];

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
          className="bg-primary/10 absolute -start-32 top-1/4 h-[600px] w-[600px] rounded-full blur-3xl"
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
          className="bg-primary/10 absolute -end-32 bottom-1/4 h-[600px] w-[600px] rounded-full blur-3xl"
        />
        {/* Additional accent orb */}
        <m.div
          animate={{
            y: [0, -50, 0],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="bg-primary/20 absolute end-1/3 top-1/2 h-64 w-64 rounded-full blur-2xl"
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

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Image Grid */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Large image */}
              <m.div
                whileHover={{ scale: 1.02 }}
                className="group/img relative col-span-2 h-64 overflow-hidden rounded-3xl shadow-2xl"
              >
                <ExportedImage
                  src="/images/portfolio/4.jpg"
                  alt={t("imageAlt.equipment")}
                  fill
                  className="object-cover transition-transform duration-700 group-hover/img:scale-110"
                />
                <div className="bg-linear-to-t absolute inset-0 from-black/60 via-black/20 to-transparent" />
                <div className="border-primary/0 group-hover/img:border-primary/60 absolute inset-0 rounded-3xl border-[6px] transition-all duration-500 group-hover/img:shadow-[0_0_60px_rgba(212,175,55,0.5)]" />
              </m.div>

              {/* Small images */}
              <m.div
                whileHover={{ scale: 1.02 }}
                className="group/img relative h-48 overflow-hidden rounded-3xl shadow-xl"
              >
                <ExportedImage
                  src="/images/portfolio/2.jpg"
                  alt={t("imageAlt.aerial")}
                  fill
                  className="object-cover transition-transform duration-700 group-hover/img:scale-110"
                />
                <div className="bg-linear-to-t absolute inset-0 from-black/50 to-transparent" />
                <div className="border-primary/0 group-hover/img:border-primary/40 absolute inset-0 rounded-3xl border-4 transition-all duration-500" />
              </m.div>

              <m.div
                whileHover={{ scale: 1.02 }}
                className="group/img relative h-48 overflow-hidden rounded-3xl shadow-xl"
              >
                <ExportedImage
                  src="/images/portfolio/1.jpg"
                  alt={t("imageAlt.professional")}
                  fill
                  className="object-cover transition-transform duration-700 group-hover/img:scale-110"
                />
                <div className="bg-linear-to-t absolute inset-0 from-black/50 to-transparent" />
                <div className="border-primary/0 group-hover/img:border-primary/40 absolute inset-0 rounded-3xl border-4 transition-all duration-500" />
              </m.div>
            </div>

            {/* Floating badge */}
            <m.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
                duration: 0.6,
                type: "spring",
                bounce: 0.4
              }}
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="bg-primary border-background absolute -bottom-7 -end-2 rounded-2xl border-4 p-6 shadow-2xl sm:rounded-3xl lg:-bottom-10 lg:-end-10 lg:p-8"
            >
              <div className="text-center">
                <div className="text-primary-foreground mb-0.5 text-3xl font-black sm:mb-1 sm:text-6xl lg:text-5xl">
                  4K
                </div>
                <div className="text-primary-foreground/90 text-sm font-black uppercase tracking-wider lg:text-base">
                  {t("qualityBadge")}
                </div>
              </div>
            </m.div>

            {/* Decorative elements */}
            <m.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="border-primary/30 absolute -end-6 -top-6 h-24 w-24 rounded-full border-4 border-dashed"
            />
            <m.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="border-primary/20 absolute -bottom-4 -start-4 h-32 w-32 rounded-full border-4 border-dashed"
            />
          </m.div>

          {/* Content Side */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            {/* Description */}
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed md:text-xl">
                {t("description")}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed md:text-xl">
                {t("commitment")}
              </p>
            </div>

            {/* Features list */}
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{ x: -5 }}
                  className="group flex items-center gap-3"
                >
                  <div className="bg-linear-to-br from-primary to-primary/70 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg shadow-lg transition-transform group-hover:scale-110">
                    <Check className="text-primary-foreground h-5 w-5" />
                  </div>
                  <span className="font-semibold">{feature}</span>
                </m.div>
              ))}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
