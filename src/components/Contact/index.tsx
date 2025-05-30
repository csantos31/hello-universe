import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useLanguageContext } from "../../languageContext";
library.add(fab, fas);

export function ContactComponent() {
  const { generalContent } = useLanguageContext();

  return (
    <>
      <section className="contact">
        <h3>{generalContent?.contact}</h3>

        <div className="social-media">
          {generalContent?.socialMedia?.map((socialMedia) => (
            <a
              href={socialMedia.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-media-item">
                <FontAwesomeIcon
                  icon={socialMedia.icon as IconProp}
                  className={`icon ${socialMedia.class}-icon`}
                />

                <span>{socialMedia.name}</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export const Contact = React.memo(ContactComponent);
