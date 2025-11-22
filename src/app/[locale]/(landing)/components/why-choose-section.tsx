"use client";

import {
  Award,
  Briefcase,
  Camera,
  Clock,
  FileCheck,
  Shield,
  Sparkles
} from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function WhyChooseSection() {
  const t = useTranslations("IndexPage.why");

  const features = [
    {
      icon: Award,
      title: t("items.certified.title"),
      description: t("items.certified.description")
    },
    {
      icon: Camera,
      title: t("items.equipment.title"),
      description: t("items.equipment.description")
    },
    {
      icon: Briefcase,
      title: t("items.experience.title"),
      description: t("items.experience.description")
    },
    {
      icon: Clock,
      title: t("items.turnaround.title"),
      description: t("items.turnaround.description")
    },
    {
      icon: FileCheck,
      title: t("items.compliance.title"),
      description: t("items.compliance.description")
    },
    {
      icon: Shield,
      title: t("items.insured.title"),
      description: t("items.insured.description")
    }
  ];

  return (
    <section className="bg-background relative overflow-hidden py-24">
      {/* Enhanced decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <m.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="bg-primary/10 absolute -start-32 top-1/4 h-[600px] w-[600px] rounded-full blur-3xl"
        />
        <m.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 90, 0]
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
            y: [0, 50, 0],
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

        {/* Features Grid */}
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -10 }}
                className="group text-center"
              >
                <m.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3, type: "spring", bounce: 0.5 }}
                  className="bg-primary mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-3xl shadow-2xl transition-all"
                >
                  <Icon className="h-14 w-14 text-white transition-transform group-hover:scale-110" />
                </m.div>
                <h3 className="group-hover:text-primary mb-4 text-2xl font-black transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {feature.description}
                </p>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
