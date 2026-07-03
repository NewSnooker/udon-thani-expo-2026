"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  CalendarDays,
  MapPin,
  ArrowRight,
  ExternalLink,
  Leaf,
  Flower2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO_IMAGE, SOCIAL_LINKS } from "@/lib/constants";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90  via-primary/70 to-background" />
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
      </div>

      <motion.div
        aria-hidden="true"
        className="absolute right-[8%] top-[22%] hidden text-gold/70 md:block"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Flower2 className="h-14 w-14" strokeWidth={1.2} />
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="absolute left-[10%] top-[38%] hidden text-primary-foreground/50 md:block"
        animate={{ y: [0, 16, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <Leaf className="h-10 w-10" strokeWidth={1.2} />
      </motion.div>

      <div className="container relative z-10 pt-24">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-flex items-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground backdrop-blur-sm"
        >
          {t("eyebrow")}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mt-6 max-w-3xl text-balance font-display text-5xl font-semibold leading-[1.05] text-primary-foreground sm:text-6xl md:text-7xl"
        >
          {t("title")}
          <span className="block text-gold">{t("titleAccent")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: "easeOut" }}
          className="mt-6 max-w-xl text-balance text-base leading-relaxed text-primary-foreground/85 md:text-lg"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32, ease: "easeOut" }}
          className="mt-8 flex flex-wrap gap-4 text-sm text-primary-foreground/90"
        >
          <div className="flex items-center gap-2 rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 backdrop-blur-sm">
            <CalendarDays className="h-4 w-4 shrink-0 text-gold" />
            <div>
              <p className="text-[11px] uppercase tracking-wide text-primary-foreground/60">
                {t("dateLabel")}
              </p>
              <p className="font-medium">{t("date")}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 backdrop-blur-sm">
            <MapPin className="h-4 w-4 shrink-0 text-gold" />
            <div>
              <p className="text-[11px] uppercase tracking-wide text-primary-foreground/60">
                {t("locationLabel")}
              </p>
              <p className="max-w-xs font-medium leading-snug">
                {t("location")}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.42, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button asChild size="lg" variant="gold" className="gap-2">
            <a href="#about">
              {t("ctaPrimary")} <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="gap-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
          >
            <a
              href={SOCIAL_LINKS.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("ctaSecondary")} <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center text-primary-foreground/70"
      >
        <p className="text-[11px] uppercase tracking-[0.25em] text-primary ">
          {t("scrollHint")}
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto mt-2 h-8 w-5 rounded-full border border-primary-foreground/40"
        >
          <div className="mx-auto mt-1.5 h-1.5 w-1.5 rounded-full bg-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
