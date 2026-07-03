import { useTranslations } from "next-intl";
import { Sprout, Facebook, Globe, MapPin } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Separator } from "@/components/ui/separator";
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

export function Footer() {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");

  return (
    <footer className="border-t border-border/60 bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/15">
                <Sprout className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-semibold">Udon Thani Expo 2026</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
              {t("tagline")}
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.15em] text-primary-foreground/50">
              {t("officialNotice")}
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-primary-foreground/60">
              {t("navTitle")}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_KEYS.map(([key, href]) => (
                <li key={key}>
                  <a href={href} className="text-primary-foreground/80 transition-colors hover:text-gold">
                    {tn(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-primary-foreground/60">
              {t("followTitle")}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={SOCIAL_LINKS.officialWebsite} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/80 transition-colors hover:text-gold">
                  <Globe className="h-4 w-4" /> {tn("officialSite")}
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/80 transition-colors hover:text-gold">
                  <Facebook className="h-4 w-4" /> Facebook
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.map} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/80 transition-colors hover:text-gold">
                  <MapPin className="h-4 w-4" /> Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-primary-foreground/15" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-primary-foreground/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {t("rights")}</p>
        </div>
      </div>
    </footer>
  );
}
