"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Waves, FlaskConical, Cpu, Landmark, TreePine, Users,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";
import type { HighlightItemContent } from "@/types";

const ICONS = [Waves, FlaskConical, Cpu, Landmark, TreePine, Users];

export function HighlightsSection() {
  const t = useTranslations("highlights");
  const items = t.raw("items") as HighlightItemContent[];

  return (
    <section id="highlights" className="section-padding bg-secondary/40">
      <div className="container">
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: "easeOut" }}
              >
                <Card className="group h-full p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
