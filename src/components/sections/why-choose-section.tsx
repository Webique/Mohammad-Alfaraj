"use client";

import {
    Award,
    Briefcase,
    Camera,
    Clock,
    FileCheck,
    Shield
} from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

const featureIcons = {
  certified: Award,
  equipment: Camera,
  experience: Briefcase,
  turnaround: Clock,
  compliance: FileCheck,
  insured: Shield
};

export default function WhyChooseSection() {
  const t = useTranslations("LandingPage.why");

  const features = Object.keys(featureIcons) as Array<keyof typeof featureIcons>;

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
          <p className="text-xl font-semibold text-primary">{t("subtitle")}</p>
        </m.div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = featureIcons[feature];
            return (
              <m.div
                key={feature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <m.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary shadow-lg"
                >
                  <Icon className="h-10 w-10 text-primary-foreground" />
                </m.div>
                <h3 className="mb-3 text-xl font-bold">
                  {t(`items.${feature}.title`)}
                </h3>
                <p className="text-muted-foreground">
                  {t(`items.${feature}.description`)}
                </p>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
