"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import Email from "@/assets/icons/email.svg";
import Instagram from "@/assets/icons/instagram.svg";
import LinkedIn from "@/assets/icons/linkedin.svg";
import Logo from "@/components/ui/logo";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "#about" },
    { label: t("myservices"), href: "#services" },
    { label: t("myportfolio"), href: "#portfolio" }
  ];

  const services = [
    { label: t("marketing"), href: "#services" },
    { label: t("development"), href: "#services" },
    { label: t("consulting"), href: "#services" }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: siteConfig.links.instagram,
      label: t("socialMedia.instagram")
    },
    {
      icon: LinkedIn,
      href: siteConfig.links.linkedin,
      label: t("socialMedia.linkedin")
    },
    {
      icon: Email,
      href: `mailto:${siteConfig.support.email}`,
      label: t("socialMedia.email")
    },
    {
      icon: Phone,
      href: `tel:${siteConfig.support.phone}`,
      label: t("socialMedia.whatsapp")
    }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground border-border/40 relative border-t">
      {/* Subtle decorative top accent */}
      <div className="via-primary/20 bg-linear-to-r absolute start-0 top-0 h-px w-full from-transparent to-transparent" />

      <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Company Info */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <Logo
              imgClassName="w-24 filter invert brightness-0 lg:w-28"
              className="mb-5"
              width={333}
              height={197}
            />
            <p className="text-secondary-foreground/70 mb-6 max-w-sm text-sm leading-relaxed">
              {t("companyDescription")}
            </p>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                {t("followMe")}
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <m.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-foreground/70 hover:text-secondary-foreground bg-secondary-foreground/10 hover:bg-secondary-foreground/20 group flex h-10 w-10 items-center justify-center rounded-lg transition-all"
                      aria-label={social.label}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon
                        className={`h-5 w-5 ${index === 1 ? "fill-current" : "text-current"} transition-transform group-hover:scale-110`}
                      />
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
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-secondary-foreground mb-4 text-xs font-semibold uppercase tracking-wider">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/60 hover:text-secondary-foreground inline-flex items-center text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </m.div>

          {/* Services */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-secondary-foreground mb-4 text-xs font-semibold uppercase tracking-wider">
              {t("services")}
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-secondary-foreground/60 hover:text-secondary-foreground inline-flex items-center text-sm transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </m.div>

          {/* Contact Info */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <h3 className="text-secondary-foreground mb-4 text-xs font-semibold uppercase tracking-wider">
              {t("contactme")}
            </h3>
            <div className="space-y-3">
              <a
                href={`tel:${siteConfig.support.phone}`}
                className="group flex items-center gap-3 transition-colors"
              >
                <div className="bg-secondary-foreground/10 group-hover:bg-primary/20 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors">
                  <Phone className="text-secondary-foreground/60 group-hover:text-primary h-4 w-4 transition-colors" />
                </div>
                <div>
                  <div className="text-secondary-foreground/50 text-xs">
                    {t("phone")}
                  </div>
                  <div
                    className="text-secondary-foreground group-hover:text-primary text-sm transition-colors"
                    dir="ltr"
                  >
                    {siteConfig.support.phone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.support.email}`}
                className="group flex items-center gap-3 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-secondary-foreground/10 group-hover:bg-primary/20 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors">
                  <Mail className="text-secondary-foreground/60 group-hover:text-primary h-4 w-4 transition-colors" />
                </div>
                <div>
                  <div className="text-secondary-foreground/50 text-xs">
                    {t("email")}
                  </div>
                  <div className="text-secondary-foreground group-hover:text-primary text-sm transition-colors">
                    {siteConfig.support.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <div className="bg-secondary-foreground/10 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
                  <MapPin className="text-secondary-foreground/60 h-4 w-4" />
                </div>
                <div>
                  <div className="text-secondary-foreground/50 text-xs">
                    {t("location")}
                  </div>
                  <div className="text-secondary-foreground text-sm">
                    {t("saudiArabia")}
                  </div>
                </div>
              </div>

              {/* Certificate Badge */}
              <m.div
                whileHover={{ scale: 1.02 }}
                className="border-secondary-foreground/20 bg-secondary-foreground/5 mt-6 rounded-xl border p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-lg shadow-lg">
                    <svg
                      className="text-primary-foreground h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-secondary-foreground/60 text-xs font-medium uppercase tracking-wide">
                      {t("gacaCertified")}
                    </div>
                    <div className="text-secondary-foreground text-base font-bold">
                      {t("certificateNumber")}
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
          className="mt-20 border-t border-white/10 pt-10 text-center"
        >
          <p className="text-base text-gray-400">
            {t("copyright", { year: currentYear })}
          </p>
        </m.div>
      </div>
    </footer>
  );
};

export default Footer;
