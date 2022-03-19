import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import scrollTo from 'gatsby-plugin-smoothscroll';

const Intro = () => {
  return (
    <div id="intro" className="content">
      <div id="intro-content">
        <div id="intro-text">
          <h1>Dale Chang</h1>
          <h2>Software Engineer</h2>
          <p>I have 6+ years experience deploying and maintaining <strong className="text-sky-500">production applications in the cloud</strong>. I love working on all aspects of cloud-based applications, from <strong className="text-sky-500">designing</strong> to <strong className="text-sky-500">infrastructure</strong>, and from <strong className="text-sky-500">backend APIs</strong> to <strong className="text-sky-500">UI/UX</strong>.</p>
        </div>
        <div id="intro-action">
          <span className="download-resume-button" onClick={() => scrollTo("#resume")}>Download Resume</span>
        </div>
      </div>
      <div id="profile-image-container">
        <StaticImage
          src="../../images/profile-square.png"
          width={220}
          backgroundColor='#f0f9ff'
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
    </div>
  )
}

export default Intro;
