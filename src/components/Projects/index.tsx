import React from "react";
import './styles.scss'

export function ProjectsComponent(){
    return(
        <section className="projects">
            <h2>Personal Projects</h2>
            {/* 
                @TODO: create new component project and list it here
            */}
        </section>
    )
}

export const Projects = React.memo(ProjectsComponent)