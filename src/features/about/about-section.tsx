"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Sparkles, Target } from "lucide-react";
import { ABOUT_IMAGE } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/section-header";

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("lead")}
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={ABOUT_IMAGE}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden max-w-[15rem] rounded-2xl border border-border/60 bg-card p-5 shadow-lg sm:block">
              <p className="font-display text-3xl font-semibold text-primary">
                1,030
              </p>
              {/* <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                ไร่
              </p> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="space-y-6"
          >
            <p className="leading-relaxed text-foreground/85">
              {t("paragraph1")}
            </p>
            <p className="leading-relaxed text-foreground/85">
              {t("paragraph2")}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/60 bg-card p-5">
                <Sparkles className="h-5 w-5 text-gold" />
                <h3 className="mt-3 font-display text-base font-semibold">
                  {t("historyTitle")}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {t("historyText")}
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card p-5">
                <Target className="h-5 w-5 text-primary" />
                <h3 className="mt-3 font-display text-base font-semibold">
                  {t("missionTitle")}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {t("missionText")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
