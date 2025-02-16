import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";

export function ContactComponent() {
  return (
    <>
      <section className="contact">
        <h3>You can find me at:</h3>
        <div className="social-media">
          <div className="social-media-item">
            <FontAwesomeIcon icon={faLinkedin} className="icon linkedin-icon" />
            <span>Linkedin</span>
          </div>

          <div className="social-media-item">
            <FontAwesomeIcon icon={faGithub} className="icon github-icon" />
            <span>Github</span>
          </div>
          
          <div className="social-media-item">
            <FontAwesomeIcon icon={faWhatsapp} className="icon whatsapp-icon" />
            <span>Whatsapp</span>
          </div>
          
          <div className="social-media-item">
            <FontAwesomeIcon icon={faYoutube} className="icon youtube-icon" />
            <span>Youtube</span>
          </div>

        </div>
      </section>
    </>
  );
}

export const Contact = React.memo(ContactComponent);
