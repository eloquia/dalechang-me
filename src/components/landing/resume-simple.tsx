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
    <section id="resume">
      <h2>Resume</h2>
      <p>Have you liked what you have seen so far and want to learn more? Download my resume and reach out using the contact details provided within.</p>
      <a id="resume-resume-button" className="download-resume-button" href={pdfQuery.allFile.edges[0].node.publicURL} download>Download Resume</a>
    </section>
  )
};

export default Resume;
