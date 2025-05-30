import React from "react";
import "./styles.scss";
import brIcon from "../../images/brazil.svg";
import usaIcon from "../../images/united-states.svg";
import { useLanguageContext } from "../../languageContext";

export function MenuComponent() {
  const { language, setLanguage, generalContent } = useLanguageContext();
  return (
    <>
      <div className="menu">
        <div className="available-languages">
          <img
            src={usaIcon}
            alt="EN-US"
            title="Set language to english"
            className={language == "en" ? "selected" : ""}
            onClick={() => {
              setLanguage("en");
            }}
          />
          <img
            src={brIcon}
            alt="PT-BR"
            title="Definir linguagem para português"
            className={language == "pt" ? "selected" : ""}
            onClick={() => {
              setLanguage("pt");
            }}
          />
        </div>

        <a
          href="https://csantos31.github.io/portifolio/CYNTIA-SANTOS-RESUME.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3> {generalContent?.resumeCta} </h3>
        </a>
      </div>
    </>
  );
}

export const Menu = React.memo(MenuComponent);
