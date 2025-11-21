"use client";

import { Building } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function ClientsSection() {
  const t = useTranslations("LandingPage.clients");

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
          <p className="mb-4 text-xl font-semibold text-primary">
            {t("subtitle")}
          </p>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            {t("description")}
          </p>
        </m.div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {clients.map((client, index) => (
            <m.div
              key={client}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="flex items-center justify-center rounded-xl border border-border bg-card p-6 text-center shadow-md transition-shadow hover:shadow-xl"
            >
              <div>
                <Building className="mx-auto mb-3 h-8 w-8 text-primary" />
                <p className="font-semibold text-card-foreground">{client}</p>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
