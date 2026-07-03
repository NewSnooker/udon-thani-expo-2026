"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/shared/section-header";
import type { TimelineItemContent } from "@/types";

export function TimelineSection() {
  const t = useTranslations("timeline");
  const items = t.raw("items") as TimelineItemContent[];

  return (
    <section id="timeline" className="section-padding bg-secondary/40">
      <div className="container">
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

        {/* Mobile: vertical timeline */}
        <div className="relative mt-14 space-y-8 md:hidden">
          <div className="absolute bottom-0 left-[7px] top-2 w-px bg-border" />
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative pl-8"
            >
              <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background" />
              <p className="text-xs font-semibold uppercase tracking-wide text-gold">{item.date}</p>
              <h3 className="mt-1 font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="relative mt-20 hidden md:block">
          <div className="absolute left-0 right-0 top-[9px] h-px bg-border" />
          <div className="grid grid-cols-5 gap-6">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pt-8"
              >
                <span className="absolute left-0 top-0 h-[18px] w-[18px] -translate-y-1/2 rounded-full border-4 border-background bg-primary shadow" />
                <p className="text-xs font-semibold uppercase tracking-wide text-gold">{item.date}</p>
                <h3 className="mt-2 font-display text-base font-semibold leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
