import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

const Intro = () => {
  return (
    <section
      id="intro"
      style={{ display: "grid", width: '100%' }}>
      <StaticImage
        src="../../images/dale-profile-shaded.png"
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
        }}
        layout="fullWidth"
        backgroundColor='gray'
        alt="" // This is a presentational image, so the alt should be an empty string
      />
      <div
        id="intro-text"
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
        }}
      >
        <h1>Dale Chang</h1>
        <h2>Software Engineer</h2>
        {/* <p>I build cloud-based solutions.</p> */}
      </div>
    </section>
  )
}

export default Intro;
