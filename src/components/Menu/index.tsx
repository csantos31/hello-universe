import React from "react";
import "./styles.scss";

export function MenuComponent() {
  return (
    <>
      <div className="menu">
        <span>CSANTOS31</span>

        <a
          href="https://csantos31.github.io/portifolio/CYNTIA-SANTOS-RESUME.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Download CV ↓ </h3>
        </a>
      </div>
    </>
  );
}

export const Menu = React.memo(MenuComponent);
