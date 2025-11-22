"use client";

import { Award, Camera, Target } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("IndexPage.about");

  return (
    <section id="about" className="bg-muted relative overflow-hidden py-40">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <m.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="bg-primary/10 absolute right-0 top-0 h-[600px] w-[600px] rounded-full blur-3xl"
        />
        <m.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="bg-primary/10 absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full blur-3xl"
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
              About Us
            </span>
          </m.div>
          <h2 className="mb-5 text-4xl font-black md:text-5xl lg:text-6xl">
            {t("title")}
          </h2>
          <p className="text-primary text-xl font-bold md:text-2xl">
            {t("subtitle")}
          </p>
        </m.div>

        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div className="space-y-8">
              <p className="text-muted-foreground text-xl leading-relaxed md:text-2xl">
                {t("description")}
              </p>
              <p className="text-muted-foreground text-xl leading-relaxed md:text-2xl">
                {t("mission")}
              </p>
            </div>

            {/* Feature highlights BIGGER */}
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  icon: Camera,
                  label: "Professional Equipment",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: Award,
                  label: "GACA Certified",
                  color: "from-amber-500 to-yellow-500"
                },
                {
                  icon: Target,
                  label: "Precision Focus",
                  color: "from-purple-500 to-pink-500"
                }
              ].map((item, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -12, scale: 1.05 }}
                  className="bg-card border-border/50 hover:border-primary/40 group relative overflow-hidden rounded-3xl border-2 p-8 shadow-xl transition-all hover:shadow-2xl"
                >
                  <div
                    className={`bg-linear-to-br ${item.color} mb-5 inline-flex rounded-2xl p-4 shadow-lg transition-transform group-hover:rotate-6 group-hover:scale-110`}
                  >
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-lg font-black">{item.label}</p>
                  {/* Decorative element BIGGER */}
                  <div
                    className={`bg-linear-to-br ${item.color} absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-30`}
                  />
                </m.div>
              ))}
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative"
          >
            <div className="rounded-4xl relative h-[650px] overflow-hidden shadow-2xl">
              <ExportedImage
                src="/images/DJI_20240227182720_0289_D-Enhanced-NR.jpg"
                alt="Drone Photography"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Enhanced gradient overlay */}
              <div className="bg-linear-to-t absolute inset-0 from-black/50 via-transparent to-transparent" />
              {/* Gold border accent with BIGGER glow */}
              <div className="border-primary/0 group-hover:border-primary/70 rounded-4xl absolute inset-0 border-8 transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(212,175,55,0.6)]" />
            </div>

            {/* Floating badge with BIGGER enhanced design */}
            <m.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
              whileHover={{ scale: 1.08, rotate: 3 }}
              className="bg-primary border-background rounded-4xl absolute -bottom-10 -right-10 border-4 p-10 shadow-2xl"
            >
              <div className="text-center">
                <div className="text-primary-foreground mb-2 text-7xl font-black">
                  8+
                </div>
                <div className="text-primary-foreground/90 text-base font-black uppercase tracking-wider">
                  Years Experience
                </div>
              </div>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
