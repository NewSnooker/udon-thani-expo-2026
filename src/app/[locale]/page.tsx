import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/features/hero/hero-section";
import { AboutSection } from "@/features/about/about-section";
import { HighlightsSection } from "@/features/highlights/highlights-section";
import { ZonesSection } from "@/features/zones/zones-section";
import { TimelineSection } from "@/features/timeline/timeline-section";
import { StatisticsSection } from "@/features/statistics/statistics-section";
import { GallerySection } from "@/features/gallery/gallery-section";
import { NewsSection } from "@/features/news/news-section";
import { FaqSection } from "@/features/faq/faq-section";
import { ContactSection } from "@/features/contact/contact-section";
import { WaveDivider } from "@/components/shared/wave-divider";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <div className="-mb-px bg-secondary/40 text-background dark:bg-secondary/10">
        <WaveDivider />
      </div>
      <ZonesSection />
      <TimelineSection />
      <StatisticsSection />
      <GallerySection />
      <div className="-mb-px bg-background text-secondary/40 dark:text-secondary/10">
        <WaveDivider />
      </div>
      <NewsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
