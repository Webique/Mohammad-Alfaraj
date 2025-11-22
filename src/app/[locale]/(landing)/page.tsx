import type { PageProps } from "@/types";
import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import VideoShowcaseSection from "@/app/[locale]/(landing)/components/video-showcase-section";

import AboutSection from "./components/about-section";
import ClientsSection from "./components/clients-section";
import ContactSection from "./components/contact-section";
import CoverageSection from "./components/coverage-section";
import CTABanner from "./components/cta-banner";
import FeaturesSection from "./components/features-section";
import GallerySection from "./components/gallery-section";
import HeroSection from "./components/hero-section";
import ServicesSection from "./components/services-section";
import TrustSection from "./components/trust-section";
import WhyChooseSection from "./components/why-choose-section";

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
      <VideoShowcaseSection />
      <CTABanner />
      <CoverageSection />
      <ContactSection />
    </main>
  );
}
