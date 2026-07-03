"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Menu, Sprout, ExternalLink } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { SOCIAL_LINKS } from "@/lib/constants";

const NAV_KEYS = [
  ["about", "#about"],
  ["highlights", "#highlights"],
  ["zones", "#zones"],
  ["gallery", "#gallery"],
  ["news", "#news"],
  ["faq", "#faq"],
  ["contact", "#contact"],
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const tc = useTranslations("common");
  const scrolled = useScrollPosition(16);
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 shadow-sm backdrop-blur-lg border-b border-border/60"
          : "bg-transparent",
      )}
    >
      <div className="container flex h-[4.5rem] items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
            <Sprout className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold tracking-tight">
              Udon Thani Expo
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              2026
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV_KEYS.map(([key, href]) => (
            <a
              key={key}
              href={href}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {t(key)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-1.5 lg:flex">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button asChild size="sm" variant="gold" className="ml-1 gap-1.5">
            <a
              href={SOCIAL_LINKS.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("officialSite")}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label={tc("openMenu")}>
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <Sprout className="h-5 w-5 text-primary" /> World
                  Horticultural Expo Udon Thani 2026
                </SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="mt-8 flex flex-col gap-1">
                {NAV_KEYS.map(([key, href]) => (
                  <SheetClose asChild key={key}>
                    <a
                      href={href}
                      className="rounded-xl px-4 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      {t(key)}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-6">
                <LanguageSwitcher />
                <Button asChild size="sm" variant="gold" className="gap-1.5">
                  <a
                    href={SOCIAL_LINKS.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("officialSite")}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
