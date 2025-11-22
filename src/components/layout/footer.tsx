"use client";

import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import Logo from "@/components/ui/logo";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "#about" },
    { label: t("services"), href: "#services" },
    { label: t("portfolio"), href: "#portfolio" },
    { label: t("contactUs"), href: "#contact" }
  ];

  const services = [
    { label: t("marketing"), href: "#services" },
    { label: t("development"), href: "#services" },
    { label: t("consulting"), href: "#services" }
  ];

  return (
    <footer className="from-secondary via-secondary/98 to-secondary text-secondary-foreground bg-linear-to-br relative">
      {/* Enhanced decorative top wave */}
      <div className="leading-0 absolute left-0 top-0 w-full overflow-hidden">
        <svg
          className="relative block h-20 w-full md:h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-muted"
          />
        </svg>
      </div>

      {/* Enhanced animated background elements */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <m.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="bg-primary absolute right-0 top-1/4 h-96 w-96 rounded-full blur-3xl"
        />
        <m.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
            x: [0, -50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="bg-primary absolute bottom-0 left-0 h-96 w-96 rounded-full blur-3xl"
        />
      </div>

      {/* Subtle grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
            backgroundSize: "50px 50px"
          }}
        />
      </div>

      <div className="container relative mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Company Info */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <Logo
              imgClassName="w-28 filter invert brightness-0 lg:w-32"
              className="mb-6"
              width={333}
              height={197}
            />
            <p className="text-secondary-foreground/80 mb-8 max-w-md text-base leading-relaxed">
              {t("companyDescription")}
            </p>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider">
                {t("connectWithUs")}
              </h4>
              <div className="flex gap-5">
                {[
                  {
                    icon: Instagram,
                    href: siteConfig.links.instagram,
                    label: "Instagram",
                    color: "from-purple-600 to-pink-600",
                    shadow: "hover:shadow-[0_15px_50px_rgba(168,85,247,0.5)]"
                  },
                  {
                    icon: Linkedin,
                    href: siteConfig.links.linkedin,
                    label: "LinkedIn",
                    color: "from-blue-600 to-blue-700",
                    shadow: "hover:shadow-[0_15px_50px_rgba(29,78,216,0.5)]"
                  },
                  {
                    icon: Phone,
                    href: siteConfig.links.whatsapp,
                    label: "WhatsApp",
                    color: "from-green-600 to-green-700",
                    shadow: "hover:shadow-[0_15px_50px_rgba(21,128,61,0.5)]"
                  }
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <m.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-linear-to-br group relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-3xl ${social.color} shadow-2xl transition-all ${social.shadow}`}
                      aria-label={social.label}
                      whileHover={{ y: -10, scale: 1.2, rotate: 8 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="relative z-10 h-9 w-9 text-white transition-transform group-hover:scale-110" />
                      <div className="absolute inset-0 bg-white opacity-0 transition-opacity group-hover:opacity-20" />
                    </m.a>
                  );
                })}
              </div>
            </div>
          </m.div>

          {/* Quick Links */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary group inline-flex items-center text-base transition-colors"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="bg-primary absolute -bottom-1 left-0 h-px w-0 transition-all group-hover:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </m.div>

          {/* Services */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider">
              {t("services")}
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-muted-foreground hover:text-primary group inline-flex items-center text-base transition-colors"
                  >
                    <span className="relative">
                      {service.label}
                      <span className="bg-primary absolute -bottom-1 left-0 h-px w-0 transition-all group-hover:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </m.div>

          {/* Contact Info */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider">
              {t("contactUs")}
            </h3>
            <div className="space-y-4">
              <a
                href={`tel:${siteConfig.support.phone}`}
                className="group flex items-start gap-3 transition-colors"
              >
                <div className="bg-primary/20 group-hover:bg-primary/30 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors">
                  <Phone className="text-primary h-5 w-5" />
                </div>
                <div>
                  <div className="text-muted-foreground text-xs">
                    {t("phone")}
                  </div>
                  <div
                    className="text-foreground group-hover:text-primary text-sm"
                    dir="ltr"
                  >
                    {siteConfig.support.phone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.support.email}`}
                className="group flex items-start gap-3 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-primary/20 group-hover:bg-primary/30 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors">
                  <Mail className="text-primary h-5 w-5" />
                </div>
                <div>
                  <div className="text-muted-foreground text-xs">
                    {t("email")}
                  </div>
                  <div className="text-foreground group-hover:text-primary text-sm">
                    {siteConfig.support.email}
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="bg-primary/20 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                  <MapPin className="text-primary h-5 w-5" />
                </div>
                <div>
                  <div className="text-muted-foreground text-xs">
                    {t("location")}
                  </div>
                  <div className="text-foreground text-sm">
                    {t("saudiArabia")}
                  </div>
                </div>
              </div>

              {/* Certificate Badge */}
              <m.div
                whileHover={{ scale: 1.05 }}
                className="border-primary/40 bg-primary/15 mt-10 rounded-3xl border-2 p-6 shadow-2xl"
              >
                <div className="flex items-center gap-5">
                  <div className="bg-primary flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-lg">
                    <svg
                      className="text-primary-foreground h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-sm font-black uppercase tracking-wider">
                      GACA Certified
                    </div>
                    <div className="text-primary text-xl font-black">
                      {siteConfig.certificate}
                    </div>
                  </div>
                </div>
              </m.div>
            </div>
          </m.div>
        </div>

        {/* Bottom Bar */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-border mt-16 border-t pt-8"
        >
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-muted-foreground text-center text-sm">
              {t("copyright", { year: currentYear })}
            </p>
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              <span>Made with</span>
              <m.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-red-500"
              >
                ♥
              </m.span>
              <span>in Saudi Arabia</span>
            </div>
          </div>
        </m.div>
      </div>
    </footer>
  );
};

export default Footer;
