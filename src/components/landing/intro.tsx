import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import scrollTo from 'gatsby-plugin-smoothscroll';

const Intro = () => {
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
          <p>Software Engineer with 6+ years experience deploying and maintaining <strong>production applications in the cloud</strong>. I love working on all aspects of cloud-based applications, from <strong>designing</strong> to <strong>infrastructure</strong>, and from <strong>backend APIs</strong> to <strong>UI/UX</strong>.</p>
        </div>
        <div id="intro-action">
          <span className="download-resume-button" onClick={() => scrollTo("#resume")}>Download Resume</span>
        </div>
      </div>
    </section>
  )
}

export default Intro;
