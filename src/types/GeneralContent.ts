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

interface FeaturedCaseStudy {
  badge: string;
  caseStudyLabel: string;
  title: string;
  subtitle: string;
  description: string;
  techTags: string[];
  primaryButton: string;
  secondaryButton: string;
  diagramTitle: string;
  dataStages: {
    raw: string;
    trusted: string;
    refined: string;
  };
  auditReports: string;
}

export interface GeneralContent {
  hero: HeroInfo;
  contact: string;
  socialMedia: SocialMediaItem[];
  featuredCaseStudy: FeaturedCaseStudy;
  smallIntro: string;
  introHeadline: string;
  footer: string;
  projectCta: string;
  resumeCta: string;
  resumeLink: string;
}
