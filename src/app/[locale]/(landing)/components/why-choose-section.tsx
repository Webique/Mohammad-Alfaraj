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
  const t = useTranslations("IndexPage.why");

  const features = Object.keys(featureIcons) as Array<
    keyof typeof featureIcons
  >;

  const gradients = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-amber-500 to-orange-500",
    "from-green-500 to-emerald-500",
    "from-red-500 to-rose-500",
    "from-indigo-500 to-violet-500"
  ];

  return (
    <section className="bg-background relative overflow-hidden py-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <m.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="bg-primary/15 absolute start-0 top-1/4 h-[500px] w-[500px] rounded-full blur-3xl"
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
          className="bg-primary/15 absolute bottom-1/4 end-0 h-[500px] w-[500px] rounded-full blur-3xl"
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
              Why Choose Us
            </span>
          </m.div>
          <h2 className="mb-5 text-4xl font-black md:text-5xl lg:text-6xl">
            {t("title")}
          </h2>
          <p className="text-primary text-xl font-bold md:text-2xl">
            {t("subtitle")}
          </p>
        </m.div>

        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = featureIcons[feature];
            const gradient = gradients[index % gradients.length];
            return (
              <m.div
                key={feature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -15 }}
                className="group text-center"
              >
                <m.div
                  whileHover={{ scale: 1.2, rotate: 12 }}
                  transition={{ duration: 0.3, type: "spring", bounce: 0.5 }}
                  className={`bg-linear-to-br ${gradient} rounded-4xl mx-auto mb-10 flex h-36 w-36 items-center justify-center shadow-2xl transition-all`}
                >
                  <Icon className="h-16 w-16 text-white transition-transform group-hover:scale-110" />
                </m.div>
                <h3 className="group-hover:text-primary mb-6 text-3xl font-black transition-colors">
                  {t(`items.${feature}.title`)}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
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
