"use client";

import { Award, CheckCircle, Shield, Star } from "lucide-react";
import * as m from "motion/react-m";

export default function TrustSection() {
  const trustBadges = [
    {
      icon: Award,
      title: "GACA Certified",
      description: "Official commercial drone pilot license",
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Complete coverage for all operations",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: CheckCircle,
      title: "Security Cleared",
      description: "Authorized for high-security sites",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Star,
      title: "Industry Leader",
      description: "Trusted by major corporations",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="bg-muted relative overflow-hidden py-20">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-primary/5 absolute start-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full blur-3xl" />
        <div className="bg-primary/5 absolute end-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-primary/20 bg-primary/5 mb-4 inline-flex items-center gap-2 rounded-full border px-5 py-2"
          >
            <Shield className="text-primary h-4 w-4" />
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Trust & Compliance
            </span>
          </m.div>

          <h2 className="mb-5 text-4xl font-black md:text-5xl lg:text-6xl">
            Licensed & Certified Professional
          </h2>

          <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed">
            Operating with full legal compliance and industry certifications to
            ensure safe, professional, and reliable service delivery
          </p>
        </m.div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((badge, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="border-border bg-card group relative overflow-hidden rounded-3xl border p-8 text-center shadow-lg transition-all hover:shadow-2xl"
            >
              {/* Gradient background on hover */}
              <div
                className={`bg-linear-to-br absolute inset-0 ${badge.color} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
              />

              <div className="relative z-10">
                <m.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1 + 0.2,
                    type: "spring",
                    bounce: 0.5
                  }}
                  className={`bg-linear-to-br mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl ${badge.color} shadow-2xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
                >
                  <badge.icon className="h-10 w-10 text-white" />
                </m.div>

                <h3 className="group-hover:text-primary mb-3 text-xl font-black transition-colors">
                  {badge.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {badge.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="bg-primary/5 absolute -end-8 -top-8 h-24 w-24 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </m.div>
          ))}
        </div>

        {/* Certificate highlight */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="border-primary/30 bg-primary/10 inline-flex items-center gap-4 rounded-2xl border-2 px-8 py-5 backdrop-blur-sm">
            <Award className="text-primary h-8 w-8" />
            <div className="text-left">
              <p className="text-muted-foreground text-sm font-semibold">
                Freelancer Certificate
              </p>
              <p className="text-primary text-2xl font-black">FL-479717920</p>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
