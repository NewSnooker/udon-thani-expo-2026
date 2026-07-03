"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ZONE_ICONS, GALLERY_IMAGES } from "@/lib/constants";
import type { ZoneContent, ZoneId } from "@/types";

export function ZonesSection() {
  const t = useTranslations("zones");
  const items = t.raw("items") as ZoneContent[];

  return (
    <section id="zones" className="section-padding bg-background">
      <div className="container">
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

        <Tabs defaultValue={items[0]?.id} className="mt-14 flex flex-col items-center">
          <TabsList>
            {items.map((zone) => {
              const Icon = ZONE_ICONS[zone.id as ZoneId];
              return (
                <TabsTrigger key={zone.id} value={zone.id} className="gap-1.5">
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{zone.name}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {items.map((zone, i) => {
            const Icon = ZONE_ICONS[zone.id as ZoneId];
            const image = GALLERY_IMAGES[i % GALLERY_IMAGES.length];
            return (
              <TabsContent key={zone.id} value={zone.id} className="w-full">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="grid items-center gap-10 lg:grid-cols-2"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
                    <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
                  </div>

                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                      <Icon className="h-6 w-6" strokeWidth={1.6} />
                    </span>
                    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.15em] text-gold">{zone.tagline}</p>
                    <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">{zone.name}</h3>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{zone.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {zone.highlights.map((h) => (
                        <Badge key={h} variant="default" className="gap-1.5">
                          <Check className="h-3 w-3" /> {h}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
