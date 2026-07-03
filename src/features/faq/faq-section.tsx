import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/shared/section-header";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import type { FaqItemContent } from "@/types";

export function FaqSection() {
  const t = useTranslations("faq");
  const items = t.raw("items") as FaqItemContent[];

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container">
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} />

        <div className="mx-auto mt-14 max-w-2xl rounded-3xl border border-border/60 bg-card px-6 shadow-sm sm:px-8">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
