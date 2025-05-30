import { IconName } from "@fortawesome/fontawesome-svg-core";

interface SocialMediaItem {
  name: string;
  icon: IconName[];
  link: string;
  class: string;
}

interface HeroInfo {
  name: string;
  position: string;
  headline: string;
}

export interface GeneralContent {
  hero: HeroInfo;
  contact: string;
  socialMedia: SocialMediaItem[];
  smallIntro: string;
  introHeadline: string;
  footer: string;
  projectCta: string;
  resumeCta: string;
}
