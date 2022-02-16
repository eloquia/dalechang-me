import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

const Resume = () => {
  const pdfQuery = useStaticQuery(graphql`
    query ResumeQuery {
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
    <section id="resume">
      <div className="resume-content">
        <h2>Resume</h2>
        <p>If you see anything that interests you or if you have any questions, please send me an email.</p>
      </div>
      <div className="resume-content resume-button-container">
        <a className="download-resume-button" href={pdfQuery.allFile.edges[0].node.publicURL} download>Download Resume</a>
      </div>
    </section>
  )
}

export default Resume;