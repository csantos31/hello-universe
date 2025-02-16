import React from "react";
import "./styles.scss";

import logo from "../../images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython } from "@fortawesome/free-brands-svg-icons";

export function ProjectItemComponent() {
  return (
    <>
      <div className="projectItem">
        <div className="image">
          <img src={logo} alt="Project Image" />
        </div>
        <div className="description">
          <h1>JOKENPO</h1>
          <span>
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s
          </span>
          <div className="plus">
            <button>See project</button>
            <FontAwesomeIcon icon={faPython} className="icon python-icon" />
          </div>
        </div>
      </div>
    </>
  );
}

export const ProjectItem = React.memo(ProjectItemComponent);
