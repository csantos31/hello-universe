import React from "react";
import "./styles.scss";
import { useLanguageContext } from "../../languageContext";

export function FooterComponent() {
  const { generalContent } = useLanguageContext();

  return (
    <>
      <footer className="footer">
        <h3>{generalContent?.footer}</h3>
      </footer>
    </>
  );
}

export const Footer = React.memo(FooterComponent);
