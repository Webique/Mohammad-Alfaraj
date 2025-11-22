"use client";

import { Award, CheckCircle, Shield, Sparkles, Star } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function TrustSection() {
  const t = useTranslations("IndexPage.trust");

  const trustBadges = [
    {
      icon: Award,
      title: t("items.certified.title"),
      description: t("items.certified.description")
    },
    {
      icon: Shield,
      title: t("items.insured.title"),
      description: t("items.insured.description")
    },
    {
      icon: CheckCircle,
      title: t("items.security.title"),
      description: t("items.security.description")
    },
    {
      icon: Star,
      title: t("items.leader.title"),
      description: t("items.leader.description")
    }
  ];

  return (
    <section className="bg-muted relative overflow-hidden py-24">
      {/* Enhanced decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <m.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="bg-primary/20 absolute -end-32 top-1/4 h-[700px] w-[700px] rounded-full blur-3xl"
        />
        <m.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="bg-primary/20 absolute -start-32 bottom-1/4 h-[700px] w-[700px] rounded-full blur-3xl"
        />
        {/* Additional accent orbs */}
        <m.div
          animate={{
            y: [0, 50, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="bg-primary/30 absolute end-1/3 top-1/2 h-64 w-64 rounded-full blur-2xl"
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

        {/* Trust Badges Grid */}
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((badge, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-card hover:border-primary/20 group relative overflow-hidden rounded-3xl border border-transparent p-8 text-center shadow-lg transition-all hover:shadow-2xl"
            >
              {/* Gradient background on hover */}
              <div className="bg-linear-to-br from-primary/0 to-primary/10 absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <m.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1 + 0.2,
                    type: "spring",
                    bounce: 0.5
                  }}
                  className="bg-primary mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl shadow-2xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
                >
                  <badge.icon className="h-10 w-10 text-white" />
                </m.div>

                <h3 className="group-hover:text-primary mb-3 text-xl font-black transition-colors">
                  {badge.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {badge.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="bg-primary/5 absolute -end-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            </m.div>
          ))}
        </div>

        {/* Certificate highlight */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <m.div
            whileHover={{ scale: 1.05 }}
            className="border-primary/30 bg-primary/10 inline-flex items-center gap-4 rounded-2xl border-2 px-8 py-5 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl"
          >
            <Award className="text-primary h-8 w-8" />
            <div className="text-start">
              <p className="text-muted-foreground text-sm font-semibold">
                {t("certificate.label")}
              </p>
              <p className="text-primary text-2xl font-black">
                {t("certificate.number")}
              </p>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
