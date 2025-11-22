"use client";

import { Building2, Sparkles, Star } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function ClientsSection() {
  const t = useTranslations("IndexPage.clients");

  const clients = [
    t("list.0"),
    t("list.1"),
    t("list.2"),
    t("list.3"),
    t("list.4"),
    t("list.5"),
    t("list.6"),
    t("list.7")
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
            <Star className="text-primary h-4 w-4 fill-current" />
            <span className="text-primary text-sm font-bold uppercase tracking-wider">
              {t("badge")}
            </span>
            <Star className="text-primary h-4 w-4 fill-current" />
          </m.div>
          <h2 className="mb-5 text-4xl font-black md:text-5xl lg:text-6xl">
            {t("title")}
          </h2>
          <p className="text-primary mx-auto max-w-2xl text-xl font-bold md:text-2xl">
            {t("subtitle")}
          </p>
        </m.div>

        {/* Clients Grid */}
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((client, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{
                y: -8,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="bg-card hover:border-primary/20 group relative overflow-hidden rounded-3xl border border-transparent p-8 shadow-lg transition-all hover:shadow-2xl"
            >
              {/* Gradient overlay on hover */}
              <div className="bg-linear-to-br from-primary/0 to-primary/10 absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <m.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-primary/10 group-hover:bg-primary/20 mb-6 rounded-2xl p-5 transition-all duration-300"
                >
                  <Building2 className="text-primary h-12 w-12" />
                </m.div>
                <p className="group-hover:text-primary text-lg font-black leading-snug transition-colors duration-300">
                  {client}
                </p>
              </div>

              {/* Sparkle effect on hover */}
              <m.div
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute end-4 top-4"
              >
                <Sparkles className="text-primary h-5 w-5" />
              </m.div>

              {/* Decorative corner glow */}
              <div className="bg-primary/5 absolute -end-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            </m.div>
          ))}
        </div>

        {/* Trust badge */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <m.div
            whileHover={{ scale: 1.05 }}
            className="border-primary/30 bg-primary/10 inline-flex items-center gap-3 rounded-full border px-8 py-4 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl"
          >
            <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-full">
              <Star className="h-5 w-5 fill-current text-white" />
            </div>
            <div className="text-start">
              <p className="text-sm font-semibold">{t("trustBadge.title")}</p>
              <p className="text-muted-foreground text-xs">
                {t("trustBadge.subtitle")}
              </p>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
