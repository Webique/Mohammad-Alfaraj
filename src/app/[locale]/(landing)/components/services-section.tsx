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

  const gradients = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-amber-500 to-orange-500",
    "from-green-500 to-emerald-500",
    "from-red-500 to-rose-500",
    "from-indigo-500 to-blue-500",
    "from-yellow-500 to-amber-500",
    "from-teal-500 to-cyan-500",
    "from-violet-500 to-purple-500",
    "from-orange-500 to-red-500"
  ];

  return (
    <section
      id="services"
      className="bg-background relative overflow-hidden py-40"
    >
      {/* Animated background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px"
          }}
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
              Our Services
            </span>
          </m.div>
          <h2 className="mb-5 text-4xl font-black md:text-5xl lg:text-6xl">
            {t("title")}
          </h2>
          <p className="text-primary text-xl font-bold md:text-2xl">
            {t("subtitle")}
          </p>
        </m.div>

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[service];
            const gradient = gradients[index % gradients.length];
            return (
              <m.div
                key={service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -12, transition: { duration: 0.2 } }}
                className="bg-card group relative overflow-hidden rounded-3xl p-10 shadow-xl transition-all hover:shadow-2xl"
              >
                {/* Gradient background on hover STRONGER */}
                <div
                  className={`bg-linear-to-br absolute inset-0 ${gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                />

                <div className="relative z-10">
                  <div
                    className={`bg-linear-to-br ${gradient} mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl shadow-xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
                  >
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="group-hover:text-primary mb-4 text-2xl font-black transition-colors">
                    {t(`items.${service}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {t(`items.${service}.description`)}
                  </p>
                </div>

                {/* Decorative corner accent BIGGER */}
                <div className="bg-primary/10 absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
