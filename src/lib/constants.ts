import type { ZoneId } from "@/types";
import hero_image from "@/images/hero.webp";
import about_image from "@/images/hero.webp";
import gallery_image_1 from "@/images/gallery_image_1.webp";
import gallery_image_2 from "@/images/gallery_image_2.webp";
import gallery_image_3 from "@/images/gallery_image_3.webp";
import gallery_image_4 from "@/images/gallery_image_4.jpg";
import gallery_image_5 from "@/images/gallery_image_5.webp";
import gallery_image_6 from "@/images/gallery_image_6.webp";
import gallery_image_7 from "@/images/gallery_image_7.webp";
import gallery_image_8 from "@/images/gallery_image_8.webp";
import gallery_image_9 from "@/images/gallery_image_9.webp";
import gallery_image_10 from "@/images/gallery_image_10.webp";
import gallery_image_11 from "@/images/gallery_image_11.webp";

import {
  FlaskConical,
  type LucideIcon,
  Users,
  Gift,
  Leaf,
  House,
  PlaneLanding,
} from "lucide-react";

/** Maps each zone id to a signature icon used across the Zones and nav UI. */
export const ZONE_ICONS: Record<ZoneId, LucideIcon> = {
  arrival: Users,
  international: Gift,
  greenhouse: Leaf,
  innovation: FlaskConical,
  "thai-garden": House,
  "carbon-forest": PlaneLanding,
};
/** Curated nature/garden photography used across hero, zones and gallery. */
export const GALLERY_IMAGES = [
  {
    src: gallery_image_1,
    alt: "Wetland reflections at golden hour",
  },
  {
    src: gallery_image_2,
    alt: "Tropical botanical garden pathway",
  },
  {
    src: gallery_image_3,
    alt: "Rare orchid in bloom",
  },
  {
    src: gallery_image_4,
    alt: "Lotus flowers on still water",
  },
  {
    src: gallery_image_5,
    alt: "Glasshouse conservatory interior",
  },
  {
    src: gallery_image_6,
    alt: "Green rice terraces of Isan",
  },
  {
    src: gallery_image_7,
    alt: "Wetland reflections at golden hour",
  },
  {
    src: gallery_image_8,
    alt: "Wetland reflections at golden hour",
  },
  {
    src: gallery_image_9,
    alt: "Wetland reflections at golden hour",
  },
  {
    src: gallery_image_10,
    alt: "Wetland reflections at golden hour",
  },
  {
    src: gallery_image_11,
    alt: "Wetland reflections at golden hour",
  },
];

export const HERO_IMAGE = hero_image;

export const ABOUT_IMAGE = about_image;

export const SOCIAL_LINKS = {
  officialWebsite: "https://udonthaniexpo2026.com/",
  facebook:
    "https://www.facebook.com/UdonThaniInternationalHorticulturalExpo2026/",
  map: "https://www.google.com/maps/place/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%A1%E0%B8%AB%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%9E%E0%B8%B7%E0%B8%8A%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B9%82%E0%B8%A5%E0%B8%81%E0%B8%AD%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5+%E0%B8%9B%E0%B8%B5+2569/@17.4088752,102.7400811,13z/data=!4m10!1m2!2m1!1z4Lie4Li34LiK4Liq4Lin4LiZ4LmC4Lil4LiBIOC4reC4uOC4lOC4o-C4mOC4suC4meC4tQ!3m6!1s0x312383007a493f17:0xcd392a69f92858d3!8m2!3d17.458516!4d102.7997287!15sCjTguJ7guLfguIrguKrguKfguJnguYLguKXguIEg4Lit4Li44LiU4Lij4LiY4Liy4LiZ4Li1WjgiNuC4nuC4t-C4iiDguKrguKfguJkg4LmC4Lil4LiBIOC4reC4uOC4lOC4o-C4mOC4suC4meC4tZIBEnRvdXJpc3RfYXR0cmFjdGlvbpoBRENpOURRVWxSUVVOdlpFTm9kSGxqUmpsdlQyNUpORnBITVRSUFYwWkdUV3c1YWxsWVJYZFRhMmh4VTBSc2EyVnVZeEFC4AEA-gEECAAQPw!16s%2Fg%2F11mrd49z80?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",
  phone: "tel:+6642000000",
  email: "mailto:info@udonthaniexpo2026.com",
};
