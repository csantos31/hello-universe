import React, { useEffect, useState } from "react";
import "./styles.scss";
import { ProjectItem } from "../ProjectItem";
import externalDataSample from "../../data/projects.json";
import { Project } from "../../types/Project";

export function ProjectsComponent() {
  const [projects, setProjects] = useState<Project[] | null>([]);

  useEffect(() => {
    setProjects(externalDataSample.data);
  }, []);

  return (
    <section className="projects">
      <h2>Some of my Personal Projects</h2>
      <span>
        Some projects I carried out because I needed to use the skill in some
        job I was assigned to, or because I studied something new, or even
        updated myself on something
      </span>

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
