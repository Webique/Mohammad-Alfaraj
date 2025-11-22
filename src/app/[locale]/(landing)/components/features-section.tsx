"use client";

import { Check, Sparkles } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";

export default function FeaturesSection() {
  const features = [
    "4K/5.1K Cinema-Quality Imaging",
    "D-log & M-log Color Profiles",
    "Live Streaming Capability",
    "RC Pro with HDMI Output",
    "High-Security Site Clearance",
    "Professional Editing Suite",
    "Fast 24-48hr Turnaround",
    "Fully Insured Operations"
  ];

  return (
    <section className="bg-background relative overflow-hidden py-24">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <m.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border-primary/20 bg-primary/5 mb-4 inline-flex items-center gap-2 rounded-full border px-5 py-2"
              >
                <Sparkles className="text-primary h-4 w-4" />
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                  Premium Features
                </span>
              </m.div>

              <h2 className="mb-6 text-4xl font-black md:text-5xl lg:text-6xl">
                Professional Equipment & Expertise
              </h2>

              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                We use cutting-edge drone technology and professional camera
                systems to deliver stunning aerial imagery that exceeds industry
                standards. Every project benefits from our advanced equipment
                and years of experience.
              </p>
            </div>

            {/* Features list */}
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                  className="group flex items-center gap-3"
                >
                  <div className="bg-linear-to-br from-primary to-primary/70 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg shadow-lg transition-transform group-hover:scale-110">
                    <Check className="text-primary-foreground h-5 w-5" />
                  </div>
                  <span className="font-semibold">{feature}</span>
                </m.div>
              ))}
            </div>
          </m.div>

          {/* Image Grid */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Large image */}
              <m.div
                whileHover={{ scale: 1.05 }}
                className="group relative col-span-2 h-64 overflow-hidden rounded-3xl shadow-2xl"
              >
                <ExportedImage
                  src="/images/_DSC7506.jpg"
                  alt="Professional Equipment"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="bg-linear-to-t absolute inset-0 from-black/50 to-transparent" />
                <div className="border-primary/0 group-hover:border-primary/40 absolute inset-0 rounded-3xl border-4 transition-all duration-500" />
              </m.div>

              {/* Small images */}
              <m.div
                whileHover={{ scale: 1.05 }}
                className="group relative h-48 overflow-hidden rounded-3xl shadow-xl"
              >
                <ExportedImage
                  src="/images/_DSC1064 copy.jpg"
                  alt="Aerial View"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="bg-linear-to-t absolute inset-0 from-black/40 to-transparent" />
              </m.div>

              <m.div
                whileHover={{ scale: 1.05 }}
                className="group relative h-48 overflow-hidden rounded-3xl shadow-xl"
              >
                <ExportedImage
                  src="/images/_DSC0011 copy.jpg"
                  alt="Professional Shot"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="bg-linear-to-t absolute inset-0 from-black/40 to-transparent" />
              </m.div>
            </div>

            {/* Floating badge */}
            <m.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="border-background bg-primary absolute -bottom-6 -start-6 rounded-2xl border-4 p-6 shadow-2xl"
            >
              <div className="text-center">
                <div className="text-primary-foreground text-4xl font-black">
                  4K
                </div>
                <div className="text-primary-foreground/90 text-sm font-semibold">
                  Cinema Quality
                </div>
              </div>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
