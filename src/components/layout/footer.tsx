"use client";

import {
  Instagram as InstagramIcon,
  Linkedin as LinkedinIcon,
  Mail,
  MapPin,
  Phone
} from "lucide-react";
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

  const socialLinks = [
    {
      icon: InstagramIcon,
      href: siteConfig.links.instagram,
      label: "Instagram",
      target: "_blank"
    },
    {
      icon: LinkedinIcon,
      href: siteConfig.links.linkedin,
      label: "LinkedIn",
      target: "_blank"
    },
    {
      icon: Phone,
      href: siteConfig.links.whatsapp,
      label: "WhatsApp",
      target: "_blank"
    }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground relative">
      <div className="via-primary bg-linear-to-r h-1 w-full from-transparent to-transparent"></div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary))_0%,transparent_50%,transparent_100%)]"></div>
      </div>

      <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Company Info - Takes more space */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <Logo
              imgClassName="w-36 lg:w-44"
              className="mb-6"
              width={333}
              height={197}
            />
            <p className="text-secondary-foreground/80 mb-8 max-w-md text-base leading-relaxed">
              {t("companyDescription")}
            </p>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-secondary-foreground text-sm font-bold uppercase tracking-wider">
                {t("connectWithUs")}
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <m.a
                      key={social.label}
                      href={social.href}
                      target={social.target}
                      rel="noopener noreferrer"
                      className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white/10 transition-all hover:bg-white/20"
                      aria-label={social.label}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="text-secondary-foreground/70 group-hover:text-primary relative z-10 h-5 w-5 transition-colors" />
                      <div className="from-primary to-primary/50 bg-linear-to-br absolute inset-0 opacity-0 transition-opacity group-hover:opacity-20" />
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
            <h3 className="text-secondary-foreground mb-6 text-sm font-bold uppercase tracking-wider">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-primary group inline-flex items-center text-base transition-colors"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="bg-primary absolute -bottom-1 start-0 h-px w-0 transition-all group-hover:w-full" />
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
            <h3 className="text-secondary-foreground mb-6 text-sm font-bold uppercase tracking-wider">
              {t("services")}
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-secondary-foreground/80 hover:text-primary group inline-flex items-center text-base transition-colors"
                  >
                    <span className="relative">
                      {service.label}
                      <span className="bg-primary absolute -bottom-1 start-0 h-px w-0 transition-all group-hover:w-full" />
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
            className="lg:col-span-3"
          >
            <h3 className="text-secondary-foreground mb-6 text-sm font-bold uppercase tracking-wider">
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
                  <div className="text-secondary-foreground/70 text-xs">
                    {t("phone")}
                  </div>
                  <div
                    className="text-secondary-foreground group-hover:text-primary text-sm"
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
                  <div className="text-secondary-foreground/70 text-xs">
                    {t("email")}
                  </div>
                  <div className="text-secondary-foreground group-hover:text-primary text-sm">
                    {siteConfig.support.email}
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="bg-primary/20 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                  <MapPin className="text-primary h-5 w-5" />
                </div>
                <div>
                  <div className="text-secondary-foreground/70 text-xs">
                    {t("location")}
                  </div>
                  <div className="text-secondary-foreground text-sm">
                    {t("saudiArabia")}
                  </div>
                </div>
              </div>
            </div>
          </m.div>
        </div>

        {/* Bottom Bar */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-white/20 pt-8"
        >
          <div className="text-center">
            <p className="text-secondary-foreground/70 text-sm">
              {t("copyright", { year: currentYear })}
            </p>
          </div>
        </m.div>
      </div>
    </footer>
  );
};

export default Footer;
