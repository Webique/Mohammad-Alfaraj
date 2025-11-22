"use client";

import { Globe, MapPin, Navigation } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function CoverageSection() {
  const t = useTranslations("IndexPage.coverage");

  return (
    <section className="bg-secondary text-secondary-foreground relative overflow-hidden py-24">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <m.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="bg-primary absolute left-1/4 top-1/4 h-96 w-96 rounded-full blur-3xl"
        />
        <m.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="bg-primary absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full blur-3xl"
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
          <m.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
            className="bg-primary/20 mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full shadow-2xl backdrop-blur-sm"
          >
            <MapPin className="text-primary h-12 w-12" />
          </m.div>

          <h2 className="mb-6 text-4xl font-black md:text-5xl lg:text-6xl">
            {t("title")}
          </h2>
          <p className="text-primary mb-6 text-xl font-bold md:text-2xl">
            {t("subtitle")}
          </p>
          <p className="text-secondary-foreground/80 mx-auto mb-12 max-w-3xl text-lg leading-relaxed">
            {t("description")}
          </p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="border-primary/30 bg-primary/15 relative overflow-hidden rounded-3xl border-2 p-10 shadow-2xl backdrop-blur-md"
          >
            {/* Decorative elements */}
            <div className="bg-primary/10 absolute -right-10 -top-10 h-40 w-40 rounded-full blur-2xl" />
            <div className="bg-primary/10 absolute -bottom-10 -left-10 h-40 w-40 rounded-full blur-2xl" />

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

          {/* Additional info cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: MapPin,
                label: "Eastern Province",
                desc: "Primary Coverage"
              },
              { icon: Navigation, label: "Nationwide", desc: "Available" },
              { icon: Globe, label: "24/7", desc: "Support" }
            ].map((item, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-secondary-foreground/5 border-primary/20 hover:border-primary/40 rounded-2xl border p-6 backdrop-blur-sm transition-all"
              >
                <item.icon className="text-primary mx-auto mb-3 h-8 w-8" />
                <p className="mb-1 font-bold">{item.label}</p>
                <p className="text-secondary-foreground/70 text-sm">
                  {item.desc}
                </p>
              </m.div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
