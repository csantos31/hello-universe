import React from "react";
import './styles.scss'
import { ProjectItem } from "../ProjectItem";

export function ProjectsComponent(){
    return(
        <section className="projects">
            <h2>Personal Projects</h2>
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
        </section>
    )
}

export const Projects = React.memo(ProjectsComponent)