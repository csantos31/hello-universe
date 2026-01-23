import React from "react";
import "./styles.scss";
import { useLanguageContext } from "../../languageContext";

export const FeaturedCaseStudy: React.FC = () => {
  const { generalContent } = useLanguageContext();

  if (!generalContent?.featuredCaseStudy) {
    return null;
  }

  const {
    badge,
    caseStudyLabel,
    title,
    subtitle,
    description,
    techTags,
    primaryButton,
    secondaryButton,
    diagramTitle,
    dataStages,
    auditReports,
  } = generalContent.featuredCaseStudy;

  return (
    <section className="featured-case-study">
      <div className="featured-container">
        <div className="featured-badge">
          <span className="star-icon">⭐</span>
          <span>{badge}</span>
          <span className="case-study-label">{caseStudyLabel}</span>
        </div>
        
        <div className="featured-content">
          <div className="content-left">
            <h2 className="featured-title">
              {title}
              <br />
              <span className="subtitle">{subtitle}</span>
            </h2>
            
            <p className="featured-description">
              {description}
            </p>
            
            <div className="tech-tags">
              {techTags.map((tag, index) => (
                <React.Fragment key={tag}>
                  <span className="tag">{tag}</span>
                  {index < techTags.length - 1 && (
                    <span className="tag-separator">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
            
            <div className="action-buttons">
              <button className="btn-primary">{primaryButton}</button>
              <button className="btn-secondary">{secondaryButton}</button>
            </div>
          </div>
          
          <div className="content-right">
            <div className="diagram">
              <div className="diagram-header">
                <div className="glue-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M20 5L25 15L20 25L15 15L20 5Z" fill="#8B5CF6"/>
                    <circle cx="20" cy="30" r="3" fill="#8B5CF6"/>
                  </svg>
                </div>
                <span className="diagram-title">{diagramTitle}</span>
              </div>
              
              <div className="data-flow">
                <div className="flow-row">
                  <div className="data-source database-icon">
                    <div className="cylinder"></div>
                    <div className="cylinder"></div>
                  </div>
                  <div className="arrow">→</div>
                  <div className="data-stage raw">
                    <span>{dataStages.raw}</span>
                  </div>
                </div>
                
                <div className="flow-row">
                  <div className="data-source database-icon alt">
                    <div className="cylinder"></div>
                    <div className="cylinder"></div>
                  </div>
                  <div className="arrow">→</div>
                  <div className="data-stage trusted">
                    <span>{dataStages.trusted}</span>
                  </div>
                </div>
                
                <div className="flow-connector">
                  <div className="vertical-arrow">↓</div>
                  <div className="data-stage refined">
                    <span>{dataStages.refined}</span>
                  </div>
                </div>
                
                <div className="output-section">
                  <div className="arrow horizontal">→</div>
                  <div className="outputs">
                    <div className="output-item report">
                      <div className="report-icon">📄</div>
                      <span>{auditReports}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
