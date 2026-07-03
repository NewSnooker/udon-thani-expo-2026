"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowUpRight, Newspaper } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SOCIAL_LINKS } from "@/lib/constants";
import type { NewsItemContent } from "@/types";

export function NewsSection() {
  const t = useTranslations("news");
  const items = t.raw("items") as NewsItemContent[];

  return (
    <section id="news" className="section-padding bg-secondary/40">
      <div className="container">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.a
              key={item.title}
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="block"
            >
              <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
                <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-primary/15 via-accent to-gold/10">
                  <Newspaper
                    className="h-10 w-10 text-primary/50"
                    strokeWidth={1.3}
                  />
                </div>
                <CardContent className="flex flex-1 flex-col p-6">
                  <Badge variant="outline" className="w-fit">
                    {item.date}
                  </Badge>
                  <h3 className="mt-3 font-display text-lg font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    {t("readMore")}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
