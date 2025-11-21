"use client";

import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function ContactSection() {
  const t = useTranslations("LandingPage.contact");

  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">{t("title")}</h2>
          <p className="text-primary mb-4 text-xl font-semibold">
            {t("subtitle")}
          </p>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
            {t("description")}
          </p>
        </m.div>

        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>

              <div className="space-y-6">
                <m.a
                  href={`tel:${siteConfig.support.phone}`}
                  whileHover={{ x: 5 }}
                  className="bg-card hover:bg-card/80 flex items-center gap-4 rounded-xl p-4 transition-colors"
                >
                  <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-lg">
                    <Phone className="text-primary-foreground h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Phone</p>
                    <p className="text-lg font-semibold">
                      {siteConfig.support.phone}
                    </p>
                  </div>
                </m.a>

                <m.a
                  href={`mailto:${siteConfig.support.email}`}
                  whileHover={{ x: 5 }}
                  className="bg-card hover:bg-card/80 flex items-center gap-4 rounded-xl p-4 transition-colors"
                >
                  <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-lg">
                    <Mail className="text-primary-foreground h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Email</p>
                    <p className="text-lg font-semibold">
                      {siteConfig.support.email}
                    </p>
                  </div>
                </m.a>

                <m.div className="bg-card flex items-center gap-4 rounded-xl p-4">
                  <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-lg">
                    <MapPin className="text-primary-foreground h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Location</p>
                    <p className="text-lg font-semibold">
                      Eastern Province, Saudi Arabia
                    </p>
                  </div>
                </m.div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold">Follow Us</h3>
              <div className="flex gap-4">
                <m.a
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-linear-to-br flex h-12 w-12 items-center justify-center rounded-lg from-purple-600 to-pink-600"
                >
                  <Instagram className="h-6 w-6 text-white" />
                </m.a>
                <m.a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700"
                >
                  <Linkedin className="h-6 w-6 text-white" />
                </m.a>
              </div>
            </div>
          </m.div>

          {/* Certificate Badge */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 shadow-2xl"
          >
            <div className="space-y-6 text-center">
              <div className="bg-primary mx-auto flex h-20 w-20 items-center justify-center rounded-full">
                <Mail className="text-primary-foreground h-10 w-10" />
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-bold">GACA Certified</h3>
                <p className="text-muted-foreground mb-4">
                  Authorized Commercial Drone Pilot
                </p>
                <div className="bg-muted rounded-xl p-4 shadow-md">
                  <p className="text-muted-foreground mb-1 text-sm">
                    Freelancer Certificate
                  </p>
                  <p className="text-primary text-2xl font-bold">
                    {siteConfig.certificate}
                  </p>
                </div>
              </div>
              <div className="border-border border-t pt-4">
                <p className="text-muted-foreground text-sm">
                  Fully licensed and insured for commercial operations across
                  Saudi Arabia
                </p>
              </div>
            </div>
          </m.div>
        </div>

        {/* CTA */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg"
            asChild
          >
            <Link
              href={`https://wa.me/${siteConfig.support.whatsapp.replace(/\+/g, "")}`}
            >
              Contact via WhatsApp
            </Link>
          </Button>
        </m.div>
      </div>
    </section>
  );
}
