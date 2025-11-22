"use client";

import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function ContactSection() {
  const t = useTranslations("IndexPage.contact");

  return (
    <section id="contact" className="bg-muted relative overflow-hidden py-32">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <m.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="bg-primary/15 absolute right-0 top-0 h-[500px] w-[500px] rounded-full blur-3xl"
        />
        <m.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="bg-primary/15 absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full blur-3xl"
        />
      </div>

      <div className="container relative mx-auto px-4">
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
            className="border-primary/20 bg-primary/5 mb-4 inline-block rounded-full border px-5 py-2"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Get In Touch
            </span>
          </m.div>
          <h2 className="mb-5 text-4xl font-black md:text-5xl lg:text-6xl">
            {t("title")}
          </h2>
          <p className="text-primary mb-4 text-xl font-bold md:text-2xl">
            {t("subtitle")}
          </p>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed">
            {t("description")}
          </p>
        </m.div>

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-8 text-2xl font-black">Contact Information</h3>

              <div className="space-y-5">
                <m.a
                  href={`tel:${siteConfig.support.phone}`}
                  whileHover={{ x: 10, scale: 1.03 }}
                  className="bg-card border-border hover:border-primary/40 group relative flex items-center gap-6 overflow-hidden rounded-3xl border-2 p-6 shadow-xl transition-all hover:shadow-2xl"
                >
                  <div className="bg-linear-to-br flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl from-blue-500 to-cyan-500 shadow-2xl transition-transform group-hover:rotate-3 group-hover:scale-110">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1 text-xs font-bold uppercase tracking-wider">
                      Phone
                    </p>
                    <p className="group-hover:text-primary text-xl font-black transition-colors">
                      {siteConfig.support.phone}
                    </p>
                  </div>
                  <div className="bg-linear-to-br absolute -right-10 -top-10 h-32 w-32 rounded-full from-blue-500/10 to-cyan-500/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                </m.a>

                <m.a
                  href={`mailto:${siteConfig.support.email}`}
                  whileHover={{ x: 10, scale: 1.03 }}
                  className="bg-card border-border hover:border-primary/40 group relative flex items-center gap-6 overflow-hidden rounded-3xl border-2 p-6 shadow-xl transition-all hover:shadow-2xl"
                >
                  <div className="bg-linear-to-br flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl from-purple-500 to-pink-500 shadow-2xl transition-transform group-hover:rotate-3 group-hover:scale-110">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1 text-xs font-bold uppercase tracking-wider">
                      Email
                    </p>
                    <p className="group-hover:text-primary text-xl font-black transition-colors">
                      {siteConfig.support.email}
                    </p>
                  </div>
                  <div className="bg-linear-to-br absolute -right-10 -top-10 h-32 w-32 rounded-full from-purple-500/10 to-pink-500/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                </m.a>

                <m.div className="bg-card border-border relative flex items-center gap-6 overflow-hidden rounded-3xl border-2 p-6 shadow-xl">
                  <div className="bg-linear-to-br flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl from-amber-500 to-orange-500 shadow-2xl">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1 text-xs font-bold uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-xl font-black">
                      Eastern Province, Saudi Arabia
                    </p>
                  </div>
                </m.div>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-2xl font-black">Follow Us</h3>
              <div className="flex gap-5">
                <m.a
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-linear-to-br flex h-16 w-16 items-center justify-center rounded-2xl from-purple-600 to-pink-600 shadow-2xl transition-shadow hover:shadow-[0_10px_40px_rgba(168,85,247,0.4)]"
                >
                  <Instagram className="h-7 w-7 text-white" />
                </m.a>
                <m.a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700 shadow-2xl transition-shadow hover:shadow-[0_10px_40px_rgba(29,78,216,0.4)]"
                >
                  <Linkedin className="h-7 w-7 text-white" />
                </m.a>
              </div>
            </div>
          </m.div>

          {/* Enhanced Certificate Badge */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border-border relative overflow-hidden rounded-3xl border p-10 shadow-2xl"
          >
            {/* Decorative background */}
            <div className="bg-primary/5 absolute -right-20 -top-20 h-60 w-60 rounded-full blur-3xl" />
            <div className="bg-primary/5 absolute -bottom-20 -left-20 h-60 w-60 rounded-full blur-3xl" />

            <div className="relative z-10 space-y-8 text-center">
              <m.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                className="bg-primary mx-auto flex h-24 w-24 items-center justify-center rounded-full shadow-2xl"
              >
                <Mail className="text-primary-foreground h-12 w-12" />
              </m.div>
              <div>
                <h3 className="mb-3 text-3xl font-black">GACA Certified</h3>
                <p className="text-muted-foreground mb-6 text-base">
                  Authorized Commercial Drone Pilot
                </p>
                <div className="bg-linear-to-br from-primary/10 to-primary/5 border-primary/20 rounded-2xl border-2 p-6 shadow-xl">
                  <p className="text-muted-foreground mb-2 text-xs font-semibold uppercase tracking-wider">
                    Freelancer Certificate
                  </p>
                  <p className="text-primary text-3xl font-black">
                    {siteConfig.certificate}
                  </p>
                </div>
              </div>
              <div className="border-border border-t pt-6">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Fully licensed and insured for commercial operations across
                  Saudi Arabia
                </p>
              </div>
            </div>
          </m.div>
        </div>

        {/* Enhanced CTA */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/60 shadow-primary/40 group relative overflow-hidden rounded-2xl px-14 py-7 text-lg font-bold shadow-2xl transition-all"
              asChild
            >
              <Link
                href={`https://wa.me/${siteConfig.support.whatsapp.replace(/\+/g, "")}`}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Phone className="h-6 w-6" />
                  Contact via WhatsApp
                </span>
                <div className="bg-linear-to-r absolute inset-0 z-0 from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            </Button>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
