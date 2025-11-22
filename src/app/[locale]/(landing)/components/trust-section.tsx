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
    <section className="relative overflow-hidden bg-muted py-20">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
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
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2"
          >
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Trust & Compliance
            </span>
          </m.div>

          <h2 className="mb-5 text-4xl font-black md:text-5xl lg:text-6xl">
            Licensed & Certified Professional
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
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
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 text-center shadow-lg transition-all hover:shadow-2xl"
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${badge.color} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
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
                  className={`mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br ${badge.color} shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                >
                  <badge.icon className="h-10 w-10 text-white" />
                </m.div>

                <h3 className="mb-3 text-xl font-black transition-colors group-hover:text-primary">
                  {badge.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {badge.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
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
          <div className="inline-flex items-center gap-4 rounded-2xl border-2 border-primary/30 bg-primary/10 px-8 py-5 backdrop-blur-sm">
            <Award className="h-8 w-8 text-primary" />
            <div className="text-left">
              <p className="text-sm font-semibold text-muted-foreground">
                Freelancer Certificate
              </p>
              <p className="text-2xl font-black text-primary">FL-479717920</p>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
