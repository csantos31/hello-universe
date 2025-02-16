import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import mailIcon from "../../images/mailicon.svg";

export function ContactComponent() {
  return (
    <>
      <section className="contact">
        <h3>You can find me at:</h3>

        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/cyntia-santos-518666137/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-media-item">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="icon linkedin-icon"
              />
              <span>Linkedin</span>
            </div>
          </a>

          <a
            href="https://github.com/csantos31"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-media-item">
              <FontAwesomeIcon icon={faGithub} className="icon github-icon" />
              <span>Github</span>
            </div>
          </a>

          <a
            href="https://wa.me/5511983257263"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-media-item">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="icon whatsapp-icon"
              />
              <span>Whatsapp</span>
            </div>
          </a>

          <a
            href="https://www.youtube.com/@csantos31"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-media-item">
              <FontAwesomeIcon icon={faYoutube} className="icon youtube-icon" />
              <span>Youtube</span>
            </div>
          </a>

          <a
            href="mailto:cyntia.aparecida@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-media-item">
              <img src={mailIcon} alt="mail icon" className="icon mail-icon" />
              <span>E-mail</span>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}

export const Contact = React.memo(ContactComponent);
