"use client";

import { Building2, Sparkles, Star } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function ClientsSection() {
  const t = useTranslations("IndexPage.clients");

  const clients = [
    "Saudi Aramco",
    "Tamimi Global",
    "Chinese Contracting Company",
    "Ministry of Defence & Aviation",
    "Dammam Seaport",
    "Saudi League (ROSHN)",
    "Batterjee Medical College",
    "Prince Sultan Cultural Center"
  ];

  return (
    <section className="bg-muted relative overflow-hidden py-24">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <m.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="bg-primary/10 absolute start-1/4 top-0 h-[500px] w-[500px] rounded-full blur-3xl"
        />
        <m.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="bg-primary/10 absolute bottom-0 end-1/4 h-[500px] w-[500px] rounded-full blur-3xl"
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
            className="border-primary/20 bg-primary/5 mb-4 inline-flex items-center gap-2 rounded-full border px-5 py-2"
          >
            <Star className="text-primary h-4 w-4 fill-current" />
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Trusted By Leaders
            </span>
            <Star className="text-primary h-4 w-4 fill-current" />
          </m.div>
          <h2 className="mb-5 text-4xl font-black md:text-5xl lg:text-6xl">
            {t("title")}
          </h2>
          <p className="text-primary mb-4 text-xl font-bold md:text-2xl">
            {t("subtitle")}
          </p>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed">
            {t("description")}
          </p>
        </m.div>

        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((client, index) => (
            <m.div
              key={client}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{
                y: -15,
                scale: 1.08,
                transition: { duration: 0.3 }
              }}
              className="bg-card border-border hover:border-primary/50 rounded-4xl group relative overflow-hidden border-2 p-10 shadow-xl transition-all hover:shadow-2xl"
            >
              {/* Gradient overlay on hover STRONGER */}
              <div className="bg-linear-to-br from-primary/20 absolute inset-0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <div className="bg-primary/20 group-hover:bg-primary/30 mb-6 rounded-3xl p-5 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Building2 className="text-primary h-12 w-12 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <p className="text-card-foreground group-hover:text-primary text-lg font-black leading-snug transition-colors duration-300">
                  {client}
                </p>
              </div>

              {/* Sparkle effect on hover BIGGER */}
              <m.div
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute end-5 top-5"
              >
                <Sparkles className="text-primary h-6 w-6" />
              </m.div>

              {/* Decorative corner glow BIGGER */}
              <div className="bg-primary/30 absolute -end-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            </m.div>
          ))}
        </div>

        {/* Trust badge */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="border-primary/20 bg-primary/5 inline-flex items-center gap-3 rounded-full border px-8 py-4">
            <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-full">
              <Star className="text-primary-foreground h-5 w-5 fill-current" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold">
                Trusted by 8+ Major Organizations
              </p>
              <p className="text-muted-foreground text-xs">
                Delivering excellence since 2016
              </p>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
