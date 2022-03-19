import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

const Resume = () => {
  const pdfQuery = useStaticQuery(graphql`
    query ResumeSimpleQuery {
      allFile(filter: {extension: {eq: "pdf"}}) {
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `);

  return (
    <div id="resume">
      <div className="titled-section-narrow">
        <h2>Resume</h2>

        <div className="resume-content">
          <p>Liked what you have seen so far and want to learn more? Download my resume and reach out using the contact details provided within.</p>
          <a className="bg-claret py-4 px-6 border-radius-4 text-slate-100 no-underline self-center" href="https://cdn-dalechang-dev.sfo3.digitaloceanspaces.com/dale_chang_resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
        </div>
      </div>
    </div>
  )
};

export default Resume;
