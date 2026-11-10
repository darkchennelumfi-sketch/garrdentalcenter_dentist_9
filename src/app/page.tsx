import type { Metadata } from "next";

import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { HomeHero } from "@/components/home-hero";
import { IntroSection } from "@/components/intro-section";
import { MarqueeStrip } from "@/components/marquee-strip";
import { OffersSection } from "@/components/offers-section";
import { ServicesShowcase } from "@/components/services-showcase";
import { StructuredData } from "@/components/structured-data";
import { SupraGingivalSection } from "@/components/supra-gingival-section";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { VirtualConsultSection } from "@/components/virtual-consult-section";

export const metadata: Metadata = {
  title:
    "Cosmetic Dentistry & Dental Implants in Carrington, ND",
  description:
    "Garr Dental Center provides a comprehensive range of dental services, including cosmetic smile makeovers, implant dentistry, sleep apnea treatment & more in Carrington, North Dakota.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <HomeHero />
      <MarqueeStrip />
      <IntroSection />
      <ServicesShowcase />
      <SupraGingivalSection />
      <VirtualConsultSection />
      <TestimonialCarousel />
      <OffersSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
