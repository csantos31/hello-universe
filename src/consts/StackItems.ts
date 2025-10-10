import {
  faPython,
  faJs,
  faHtml5,
  faCss3,
  faDev,
  faDocker,
  faReact
} from "@fortawesome/free-brands-svg-icons";

export const StackItems = {
  react : {
    name: "react",
    icon: faReact,
    classes: "icon react-icon"
  },
  js : {
    name: "js",
    icon: faJs,
    classes: "icon javascript-icon"
  },
  dev : {
    name: "dev",
    icon: faDev,
    classes: "icon dev-icon"
  },
  python : {
    name: "python",
    icon: faPython,
    classes: "icon python-icon"
  },
  html5 : {
    name: "html",
    icon: faHtml5,
    classes: "icon html-icon"
  },
  css3 : {
    name: "CSS 3",
    icon: faCss3,
    classes: "icon css-icon"
  },
  docker: {
    name: "Docker",
    icon: faDocker,
    classes: "icon docker-icon"
  }
} as const;


export type StackKey = keyof typeof StackItems;
