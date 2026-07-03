export type ZoneId =
  | "arrival"
  | "international"
  | "greenhouse"
  | "innovation"
  | "thai-garden"
  | "carbon-forest";

export interface ZoneContent {
  id: ZoneId;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
}

export interface TimelineItemContent {
  date: string;
  title: string;
  description: string;
}

export interface StatItemContent {
  value: number;
  suffix: string;
  label: string;
}

export interface NewsItemContent {
  title: string;
  date: string;
  summary: string;
}

export interface FaqItemContent {
  q: string;
  a: string;
}

export interface HighlightItemContent {
  title: string;
  description: string;
}
