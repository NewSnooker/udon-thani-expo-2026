"use client";

import { useCounter } from "@/hooks/use-counter";
import type { StatItemContent } from "@/types";

export function StatCounter({ stat }: { stat: StatItemContent }) {
  const { ref, value } = useCounter(stat.value);
  const display = Number.isInteger(stat.value) ? Math.round(value) : value.toFixed(1);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl font-semibold text-primary-foreground sm:text-5xl">
        {display}
        <span className="text-gold">{stat.suffix}</span>
      </p>
      <p className="mt-2 text-sm leading-snug text-primary-foreground/75">{stat.label}</p>
    </div>
  );
}
