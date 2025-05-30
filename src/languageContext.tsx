import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { LanguageContent } from "./types/LanguageContent";
import { Project } from "./types/Project";
import { GeneralContent } from "./types/GeneralContent";

const LanguageContext = createContext<LanguageContent | undefined>(undefined);

const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguageContext must be used within a LanguageProvider"
    );
  }
  return context;
};

interface Props {
  children?: ReactNode;
}

const LanguageProvider = ({ children }: Props) => {
  const [language, setLanguage] = useState("en");
  const [projects, setProjects] = useState<Project[] | null>([]);
  const [generalContent, setGeneralContent] = useState<GeneralContent | null>();

  useEffect(() => {
    const loadProjects = async () => {
      const result = await import(`./data/content/${language}/projects.json`);

      setProjects(result.data || []);
    };

    const loadGeneralContent = async () => {
      const result = await import(
        `./data/content/${language}/generalContent.json`
      );

      setGeneralContent(result.data || []);
    };

    loadProjects();
    loadGeneralContent();
  }, [language]);

  const context: LanguageContent = {
    language,
    setLanguage,
    projects,
    generalContent,
  };

  return (
    <LanguageContext.Provider value={context}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider, useLanguageContext };
