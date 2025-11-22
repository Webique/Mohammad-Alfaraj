"use client";

import { ArrowRight, Phone, Sparkles } from "lucide-react";
import * as m from "motion/react-m";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function CTABanner() {
  return (
    <section className="bg-primary text-primary-foreground relative overflow-hidden py-24">
      {/* Animated background patterns */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <m.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 top-0 h-96 w-96 rounded-full bg-white blur-3xl"
        />
        <m.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white blur-3xl"
        />
      </div>

      {/* Grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: "50px 50px"
          }}
        />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-primary-foreground/30 bg-primary-foreground/10 mb-6 inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 backdrop-blur-sm"
          >
            <Sparkles className="h-5 w-5 animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-wider">
              Ready to Start Your Project?
            </span>
            <Sparkles className="h-5 w-5 animate-pulse" />
          </m.div>

          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-6 text-4xl font-black leading-tight md:text-5xl lg:text-6xl"
          >
            Let&apos;s Capture Your Vision from Above
          </m.h2>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-primary-foreground/90 mb-10 text-lg leading-relaxed md:text-xl"
          >
            Professional aerial imaging solutions for your business. Contact us
            today for a free consultation and quote.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col items-center justify-center gap-5 sm:flex-row"
          >
            <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="secondary"
                className="hover:shadow-primary-foreground/20 group relative overflow-hidden rounded-2xl px-10 py-7 text-lg font-bold shadow-2xl transition-all"
                asChild
              >
                <Link
                  href={`https://wa.me/${siteConfig.support.whatsapp.replace(/\+/g, "")}`}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Phone className="h-6 w-6" />
                    Contact via WhatsApp
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </span>
                  <div className="bg-linear-to-r via-primary/20 absolute inset-0 z-0 from-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
              </Button>
            </m.div>

            <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 bg-primary-foreground/10 text-primary-foreground hover:border-primary-foreground/60 hover:bg-primary-foreground/20 group rounded-2xl border-2 px-10 py-7 text-lg font-bold backdrop-blur-md transition-all"
                asChild
              >
                <Link href="#portfolio">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
            </m.div>
          </m.div>

          {/* Trust indicators */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-primary-foreground/80 mt-12 flex flex-wrap items-center justify-center gap-8 text-sm font-semibold"
          >
            <div className="flex items-center gap-2">
              <div className="bg-primary-foreground h-2 w-2 rounded-full" />
              GACA Certified
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-primary-foreground h-2 w-2 rounded-full" />
              Fully Insured
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-primary-foreground h-2 w-2 rounded-full" />
              8+ Major Clients
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-primary-foreground h-2 w-2 rounded-full" />
              Fast Turnaround
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
