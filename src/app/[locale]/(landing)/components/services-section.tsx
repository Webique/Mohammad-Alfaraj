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
  Sparkles,
  Video
} from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function ServicesSection() {
  const t = useTranslations("IndexPage.services");

  const services = [
    {
      icon: Camera,
      title: t("items.aerial.title"),
      description: t("items.aerial.description"),
      image: "/images/portfolio/7.jpg"
    },
    {
      icon: Building2,
      title: t("items.industrial.title"),
      description: t("items.industrial.description"),
      image: "/images/portfolio/33.jpg"
    },
    {
      icon: HardHat,
      title: t("items.construction.title"),
      description: t("items.construction.description"),
      image: "/images/portfolio/22.jpg"
    },
    {
      icon: Video,
      title: t("items.corporate.title"),
      description: t("items.corporate.description"),
      image: "/images/portfolio/32.jpg"
    },
    {
      icon: Ship,
      title: t("items.maritime.title"),
      description: t("items.maritime.description"),
      image: "/images/portfolio/28.jpg"
    },
    {
      icon: Map,
      title: t("items.survey.title"),
      description: t("items.survey.description"),
      image: "/images/portfolio/6.jpg"
    },
    {
      icon: Home,
      title: t("items.architectural.title"),
      description: t("items.architectural.description"),
      image: "/images/portfolio/17.jpg"
    },
    {
      icon: Calendar,
      title: t("items.events.title"),
      description: t("items.events.description"),
      image: "/images/portfolio/11.jpg"
    },
    {
      icon: Film,
      title: t("items.ground.title"),
      description: t("items.ground.description"),
      image: "/images/portfolio/8.jpg"
    },
    {
      icon: Radio,
      title: t("items.streaming.title"),
      description: t("items.streaming.description"),
      image: "/images/portfolio/29.jpg"
    }
  ];

  return (
    <section id="services" className="bg-muted relative overflow-hidden py-24">
      {/* Enhanced decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <m.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="bg-primary/20 absolute -start-32 top-1/4 h-[700px] w-[700px] rounded-full blur-3xl"
        />
        <m.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, -90, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="bg-primary/20 absolute -end-32 bottom-1/4 h-[700px] w-[700px] rounded-full blur-3xl"
        />
        {/* Additional accent orbs */}
        <m.div
          animate={{
            y: [0, 50, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="bg-primary/30 absolute start-1/3 top-1/2 h-64 w-64 rounded-full blur-2xl"
        />
        <m.div
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="bg-primary/30 absolute end-1/4 top-1/3 h-64 w-64 rounded-full blur-2xl"
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

        {/* Services Grid */}
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-3xl shadow-lg transition-all hover:shadow-2xl"
              >
                {/* Image-based card */}
                <div className="relative h-full min-h-[320px]">
                  {/* Background Image */}
                  <ExportedImage
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlays */}
                  <div className="bg-linear-to-t absolute inset-0 from-black/90 via-black/60 to-black/30" />
                  <div className="bg-linear-to-br from-primary/0 to-primary/30 absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col justify-end p-8">
                    {/* Icon */}
                    <m.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="bg-primary mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl shadow-lg"
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </m.div>

                    {/* Title */}
                    <h3 className="mb-2 text-2xl font-black text-white">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base leading-relaxed text-white/90">
                      {service.description}
                    </p>
                  </div>

                  {/* Animated border */}
                  <div className="border-primary/0 group-hover:border-primary/60 absolute inset-0 rounded-3xl border-[3px] transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]" />
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
