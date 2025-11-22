"use client";

import { Award, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import { siteConfig } from "@/config/site";

export default function ContactSection() {
  const t = useTranslations("IndexPage.contact");

  return (
    <section id="contact" className="bg-muted relative overflow-hidden py-24">
      {/* Enhanced decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <m.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="bg-primary/20 absolute -start-32 top-1/4 h-[700px] w-[700px] rounded-full blur-3xl"
        />
        <m.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, -90, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="bg-primary/20 absolute -end-32 bottom-1/4 h-[700px] w-[700px] rounded-full blur-3xl"
        />
        {/* Additional accent orbs */}
        <m.div
          animate={{
            y: [0, 50, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="bg-primary/30 absolute start-1/3 top-1/2 h-64 w-64 rounded-full blur-2xl"
        />
        <m.div
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="bg-primary/30 absolute end-1/4 top-1/3 h-64 w-64 rounded-full blur-2xl"
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

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="mb-8 text-2xl font-black">{t("info.title")}</h3>

            <div className="space-y-5">
              <m.a
                href={`tel:${siteConfig.support.phone}`}
                whileHover={{ x: 10, scale: 1.03 }}
                className="bg-card hover:border-primary/40 group relative flex items-center gap-6 overflow-hidden rounded-3xl border border-transparent p-6 shadow-lg transition-all hover:shadow-2xl"
              >
                <div className="bg-primary flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-2xl transition-transform group-hover:rotate-3 group-hover:scale-110">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="text-muted-foreground mb-1 text-xs font-bold uppercase tracking-wider">
                    {t("info.phone")}
                  </p>
                  <p
                    dir="ltr"
                    className="group-hover:text-primary text-xl font-black transition-colors"
                  >
                    {siteConfig.support.phone}
                  </p>
                </div>
                <div className="bg-primary/5 absolute -end-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              </m.a>

              <m.a
                href={`mailto:${siteConfig.support.email}`}
                whileHover={{ x: 10, scale: 1.03 }}
                className="bg-card hover:border-primary/40 group relative flex items-center gap-6 overflow-hidden rounded-3xl border border-transparent p-6 shadow-lg transition-all hover:shadow-2xl"
              >
                <div className="bg-primary flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-2xl transition-transform group-hover:rotate-3 group-hover:scale-110">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="text-muted-foreground mb-1 text-xs font-bold uppercase tracking-wider">
                    {t("info.email")}
                  </p>
                  <p className="group-hover:text-primary text-xl font-black transition-colors">
                    {siteConfig.support.email}
                  </p>
                </div>
                <div className="bg-primary/5 absolute -end-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              </m.a>

              <m.div className="bg-card relative flex items-center gap-6 overflow-hidden rounded-3xl border border-transparent p-6 shadow-lg">
                <div className="bg-primary flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-2xl">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="text-muted-foreground mb-1 text-xs font-bold uppercase tracking-wider">
                    {t("info.location")}
                  </p>
                  <p className="text-xl font-black">{t("info.address")}</p>
                </div>
              </m.div>
            </div>
          </m.div>

          {/* Certificate Badge */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card relative overflow-hidden rounded-3xl border border-transparent p-10 shadow-2xl"
          >
            {/* Decorative background */}
            <div className="bg-primary/5 absolute -end-20 -top-20 h-60 w-60 rounded-full blur-3xl" />
            <div className="bg-primary/5 absolute -bottom-20 -start-20 h-60 w-60 rounded-full blur-3xl" />

            <div className="relative z-10 space-y-8 text-center">
              <m.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                className="bg-primary mx-auto flex h-24 w-24 items-center justify-center rounded-full shadow-2xl"
              >
                <Award className="h-12 w-12 text-white" />
              </m.div>
              <div>
                <h3 className="mb-3 text-3xl font-black">
                  {t("certificate.title")}
                </h3>
                <p className="text-muted-foreground mb-6 text-base">
                  {t("certificate.subtitle")}
                </p>
                <div className="bg-linear-to-br from-primary/10 to-primary/5 border-primary/20 rounded-2xl border-2 p-6 shadow-xl">
                  <p className="text-muted-foreground mb-2 text-xs font-semibold uppercase tracking-wider">
                    {t("certificate.label")}
                  </p>
                  <p className="text-primary text-3xl font-black">
                    {siteConfig.certificate}
                  </p>
                </div>
              </div>
              <div className="border-border border-t pt-6">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("certificate.description")}
                </p>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
