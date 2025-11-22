"use client";

import {
  Building2,
  Calendar,
  Camera,
  Film,
  HardHat,
  Home,
  Map,
  Radio,
  Ship,
  Video
} from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

const serviceIcons = {
  aerial: Camera,
  industrial: Building2,
  construction: HardHat,
  corporate: Video,
  maritime: Ship,
  survey: Map,
  architectural: Home,
  events: Calendar,
  ground: Film,
  streaming: Radio
};

export default function ServicesSection() {
  const t = useTranslations("LandingPage.services");

  const services = Object.keys(serviceIcons) as Array<
    keyof typeof serviceIcons
  >;

  return (
    <section className="bg-background py-20">
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

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[service];
            return (
              <m.div
                key={service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-card rounded-2xl p-8 shadow-lg transition-shadow hover:shadow-2xl"
              >
                <div className="bg-primary mb-4 flex h-14 w-14 items-center justify-center rounded-xl">
                  <Icon className="text-primary-foreground h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold">
                  {t(`items.${service}.title`)}
                </h3>
                <p className="text-muted-foreground">
                  {t(`items.${service}.description`)}
                </p>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
