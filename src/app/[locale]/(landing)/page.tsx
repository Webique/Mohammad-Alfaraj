import type { PageProps } from "@/types";
import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import AboutSection from "@/components/sections/about-section";
import ClientsSection from "@/components/sections/clients-section";
import ContactSection from "@/components/sections/contact-section";
import CoverageSection from "@/components/sections/coverage-section";
import GallerySection from "@/components/sections/gallery-section";
import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";
import WhyChooseSection from "@/components/sections/why-choose-section";

export default function IndexPage({ params }: PageProps) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ClientsSection />
      <WhyChooseSection />
      <GallerySection />
      <CoverageSection />
      <ContactSection />
    </main>
  );
}
