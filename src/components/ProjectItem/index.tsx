import React, { useEffect, useState } from "react";
import "./styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faJs,
  faHtml5,
  faCss3,
  faDev,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { Project } from "../../types/Project";
import { StackItemEnum } from "../../types/StackItemEnum";
import { useClassIconName } from "../../hooks/useClassIconName";
import { useLanguageContext } from "../../languageContext";

export function ProjectItemComponent({
  name,
  github_url,
  image,
  description,
  stack,
}: Project) {
  const [icons, setIcons] = useState<IconDefinition[]>([]);

  const { getIconClasses } = useClassIconName();
  const { generalContent } = useLanguageContext();

  useEffect(() => {
    setIcons(
      stack.map((stackItem) => {
        if (stackItem === StackItemEnum.python) return faPython;
        if (stackItem === StackItemEnum.javascript) return faJs;
        if (stackItem === StackItemEnum.html) return faHtml5;
        if (stackItem === StackItemEnum.css) return faCss3;
        return faDev;
      })
    );
  }, []);

  return (
    <>
      <div className="projectItem">
        <div className="image">
          <img src={image} alt="Project Image" />
        </div>
        <div className="description">
          <h1>{name}</h1>
          <span>{description}</span>
          <div className="plus">
            <a href={github_url} target="_blank" rel="noopener noreferrer">
              <button>{generalContent?.projectCta}</button>
            </a>

            <div>
              {icons.map((icon, index) => {
                return (
                  <FontAwesomeIcon
                    key={index}
                    icon={icon}
                    className={getIconClasses(icon.iconName)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const ProjectItem = React.memo(ProjectItemComponent);
