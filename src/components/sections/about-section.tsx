"use client";

import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("LandingPage.about");

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
          <p className="text-primary text-xl font-semibold">{t("subtitle")}</p>
        </m.div>

        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t("description")}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t("mission")}
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative h-[400px] overflow-hidden rounded-2xl shadow-2xl"
          >
            <ExportedImage
              src="/images/DJI_20240227182720_0289_D-Enhanced-NR.jpg"
              alt="Drone Photography"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gold border accent */}
            <div className="border-primary/0 group-hover:border-primary/30 absolute inset-0 border-2 transition-all duration-500" />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </m.div>
        </div>
      </div>
    </section>
  );
}
