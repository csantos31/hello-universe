import React from "react";
import "./styles.scss";
import { ProjectItem } from "../ProjectItem";
import { useLanguageContext } from "../../languageContext";

export function ProjectsComponent() {
  const { projects, generalContent } = useLanguageContext();

  return (
    <section className="projects">
      <h2>{generalContent?.smallIntro}</h2>
      <span>{generalContent?.introHeadline}</span>

      <div className="project-items">
        {projects?.map((project) => {
          return (
            <ProjectItem
              key={project.github_url}
              description={project.description}
              github_url={project.github_url}
              image={project.image}
              name={project.name}
              stack={project.stack}
            />
          );
        })}
      </div>
    </section>
  );
}

export const Projects = React.memo(ProjectsComponent);
