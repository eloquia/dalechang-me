import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';

const Resume = () => {
  const pdfQuery = useStaticQuery(graphql`
    query ResumeFocusQuery {
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
    // <section id="resume">
    <div id="resume">
      {/* <StaticImage src={"../../images/attention-focus.png"} alt="Presenting my resume" /> */}
      <StaticImage
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
        }}
        layout="constrained"
        // You can optionally force an aspect ratio for the generated image
        aspectRatio={3 / 1}
        // This is a presentational image, so the alt should be an empty string
        alt=""
        // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
        src={
          "../../images/attention.png"
        }
        formats={["auto", "webp", "avif"]}
      />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          justifyContent: "start",
          alignItems: "center",
          display: "grid",
        }}
      >
        {/* Any content here will be centered in the component */}
        {/* <a className="download-resume-button" href={pdfQuery.allFile.edges[0].node.publicURL} download>Resume</a> */}
        {/* <h1>Resume</h1> */}
        <div id="resume-content">
          <p id="resume-text">If you see anything that interests you or if you have any questions, send me an email.</p>
          <a id="resume-resume-button" className="download-resume-button" href={pdfQuery.allFile.edges[0].node.publicURL} download>Resume</a>
        </div>
      </div>
      {/* <div className="resume-content">
        <h2>Resume</h2>
        <p>If you see anything that interests you or if you have any questions, please send me an email.</p>
      </div>
      <div className="resume-content resume-button-container">
        <a className="download-resume-button" href={pdfQuery.allFile.edges[0].node.publicURL} download>Resume</a>
      </div> */}
      {/* </section> */}
    </div>
  )
}

export default Resume;