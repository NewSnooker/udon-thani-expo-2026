import { useTranslations } from "next-intl";
import { StatCounter } from "./stat-counter";
import type { StatItemContent } from "@/types";

export function StatisticsSection() {
  const t = useTranslations("statistics");
  const items = t.raw("items") as StatItemContent[];

  return (
    <section className="bg-primary bg-noise py-16 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground">
            {t("eyebrow")}
          </span>
          <h2 className="mt-4 font-display text-2xl font-semibold text-primary-foreground sm:text-3xl">
            {t("title")}
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {items.map((stat) => (
            <StatCounter key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
