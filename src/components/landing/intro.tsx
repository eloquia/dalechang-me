import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby"

const Intro = () => {
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
    <section id="intro">
      <div id="profile-image-container">
        <StaticImage
          src="../../images/profile-square.png"
          width={220}
          backgroundColor='#EEEEEE'
          alt=""
          imgStyle={{
            borderRadius: '100%',
          }}
          style={{
            borderWidth: '18px',
            borderColor: "black",
          }}
        />
      </div>
      <div id="intro-content">
        <div id="intro-text">
          <h2>Software Engineer</h2>
          <h1>Dale Chang</h1>
          <p>Software Engineer with 6+ years experience deploying and maintaining production applications in the cloud. I love working on all aspects of cloud-based applications, from designing to infrastructure, and from backend to frontend.</p>
        </div>
        <div id="intro-action">
          <a id="download-resume-button" href={pdfQuery.allFile.edges[0].node.publicURL} download>Download Resume</a>
        </div>
      </div>
    </section>
  )
}

export default Intro;
