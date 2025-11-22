"use client";

import { Globe, MapPin, Navigation, Sparkles } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function CoverageSection() {
  const t = useTranslations("IndexPage.coverage");

  const cards = [
    {
      icon: MapPin,
      label: t("cards.primary.label"),
      desc: t("cards.primary.desc")
    },
    {
      icon: Navigation,
      label: t("cards.nationwide.label"),
      desc: t("cards.nationwide.desc")
    },
    {
      icon: Globe,
      label: t("cards.support.label"),
      desc: t("cards.support.desc")
    }
  ];

  return (
    <section className="bg-background relative overflow-hidden py-24">
      {/* Enhanced decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <m.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="bg-primary/10 absolute -start-32 top-1/4 h-[600px] w-[600px] rounded-full blur-3xl"
        />
        <m.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -90, 0]
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
            y: [0, 50, 0],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="bg-primary/20 absolute start-1/2 top-1/2 h-64 w-64 rounded-full blur-2xl"
        />
      </div>

      <div className="container relative mx-auto px-4">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl text-center"
        >
          {/* Badge */}
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

          {/* Title */}
          <h2 className="mb-5 text-4xl font-black md:text-5xl lg:text-6xl">
            {t("title")}
          </h2>
          <p className="text-primary mb-6 text-xl font-bold md:text-2xl">
            {t("subtitle")}
          </p>
          <p className="text-muted-foreground mx-auto mb-12 max-w-3xl text-lg leading-relaxed">
            {t("description")}
          </p>

          {/* Areas Card */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-card border-primary/20 relative overflow-hidden rounded-3xl border-2 p-10 shadow-2xl"
          >
            {/* Decorative elements */}
            <div className="bg-primary/5 absolute -end-10 -top-10 h-40 w-40 rounded-full blur-2xl" />
            <div className="bg-primary/5 absolute -bottom-10 -start-10 h-40 w-40 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="mb-6 flex items-center justify-center gap-3">
                <Globe className="text-primary h-8 w-8" />
                <Navigation className="text-primary h-8 w-8 animate-pulse" />
              </div>
              <p className="text-primary text-2xl font-bold md:text-3xl">
                {t("areas")}
              </p>
            </div>
          </m.div>

          {/* Info Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {cards.map((item, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-card border-primary/20 hover:border-primary/40 rounded-2xl border p-6 shadow-lg transition-all hover:shadow-xl"
              >
                <item.icon className="text-primary mx-auto mb-3 h-8 w-8" />
                <p className="mb-1 font-bold">{item.label}</p>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </m.div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
