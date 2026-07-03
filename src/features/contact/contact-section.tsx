"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Globe, Facebook, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";
import { SOCIAL_LINKS } from "@/lib/constants";

export function ContactSection() {
  const t = useTranslations("contact");

  const channels = [
    { icon: Globe, label: t("officialWebsite"), desc: t("officialWebsiteDesc"), href: SOCIAL_LINKS.officialWebsite },
    { icon: Facebook, label: t("facebook"), desc: t("facebookDesc"), href: SOCIAL_LINKS.facebook },
    { icon: MapPin, label: t("map"), desc: t("mapDesc"), href: SOCIAL_LINKS.map },
    { icon: Phone, label: t("phone"), desc: t("phoneDesc"), href: SOCIAL_LINKS.phone },
    { icon: Mail, label: t("email"), desc: t("emailDesc"), href: SOCIAL_LINKS.email },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/40">
      <div className="container">
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

        <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className={c.label === channels[4].label ? "sm:col-span-2" : ""}
            >
              <Card className="group flex items-center gap-4 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-base font-semibold">{c.label}</span>
                  <span className="block truncate text-sm text-muted-foreground">{c.desc}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
