import type { PageProps } from "@/types";
import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import AboutSection from "@/app/[locale]/(landing)/components/about-section";
import ClientsSection from "@/app/[locale]/(landing)/components/clients-section";
import ContactSection from "@/app/[locale]/(landing)/components/contact-section";
import CoverageSection from "@/app/[locale]/(landing)/components/coverage-section";
import CTABanner from "@/app/[locale]/(landing)/components/cta-banner";
import FeaturesSection from "@/app/[locale]/(landing)/components/features-section";
import GallerySection from "@/app/[locale]/(landing)/components/gallery-section";
import HeroSection from "@/app/[locale]/(landing)/components/hero-section";
import ServicesSection from "@/app/[locale]/(landing)/components/services-section";
import TrustSection from "@/app/[locale]/(landing)/components/trust-section";
import WhyChooseSection from "@/app/[locale]/(landing)/components/why-choose-section";

export default function IndexPage({ params }: PageProps) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ServicesSection />
      <TrustSection />
      <ClientsSection />
      <WhyChooseSection />
      <GallerySection />
      <CTABanner />
      <CoverageSection />
      <ContactSection />
    </main>
  );
}
