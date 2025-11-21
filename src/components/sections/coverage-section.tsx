"use client";

import { MapPin } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function CoverageSection() {
  const t = useTranslations("LandingPage.coverage");

  return (
    <section className="bg-secondary text-secondary-foreground py-20">
      <div className="container mx-auto px-4">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <m.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="bg-primary/20 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full backdrop-blur-sm"
          >
            <MapPin className="text-primary h-10 w-10" />
          </m.div>

          <h2 className="mb-4 text-4xl font-bold md:text-5xl">{t("title")}</h2>
          <p className="text-primary mb-6 text-xl font-semibold">
            {t("subtitle")}
          </p>
          <p className="text-secondary-foreground/80 mb-8 text-lg">
            {t("description")}
          </p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="border-primary/20 bg-primary/10 rounded-2xl border p-8 backdrop-blur-sm"
          >
            <p className="text-primary text-2xl font-semibold">{t("areas")}</p>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
