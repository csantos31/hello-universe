import { GeneralContent } from "./GeneralContent";
import { Project } from "./Project";

export interface LanguageContent {
  language: string;
  setLanguage: (param: string) => void;
  projects: Project[] | null;
  generalContent: GeneralContent | null | undefined;
}
