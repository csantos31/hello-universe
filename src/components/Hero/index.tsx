import React, { useContext } from "react";
import "./styles.scss";
import profileImage from "../../images/profile-new.jpg";
import { useLanguageContext } from "../../languageContext";

export function HeroComponent() {
  const { generalContent } = useLanguageContext();
  return (
    <>
      <header>
        <div className="image">
          <img src={profileImage} alt="Profile image" />
        </div>
        <div className="headline">
          <h1>{generalContent?.hero?.name}</h1>
          <h2>{generalContent?.hero?.position}</h2>
          <span>{generalContent?.hero?.headline}</span>
        </div>
      </header>
    </>
  );
}

export const Hero = React.memo(HeroComponent);
