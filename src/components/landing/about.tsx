import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import ExternalLink from '../common/externalLink';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div id="about-content">
        <div id="about-text">
          <p>I like to say that I graduated with a degree in first principles thinking. In college I changed majors three times in order to satisfy my need to understand how things work at a fundamental level. From biomedical engineering to materials science and eventually physics, I am glad to say that my <ExternalLink href="https://www.youtube.com/watch?v=BQ2_BwqcFsc" displayText='meandering journey' /> left me with proof that I can tackle some convoluted problems.</p>
          <p>Up to today I've enjoyed working in a variety of domains, from architecting <span className="emphasis">NLP solutions</span> in a <span className="emphasis">legal</span> <span className="emphasis">start-up</span> to <span className="emphasis">healthcare and financial analytics</span> in a <span className="emphasis">gigantic Fortune 20 corporation</span>, I look forward to what the future has in store.</p>
        </div>
        <div id="about-image-container">
          <StaticImage src={"../../images/enthousiasm.png"} width={300} alt="A picture of my enthousiasm for trying new things" />
          <span className="text-sm"><em>My first time trying karahi (kadai).</em></span>
        </div>
      </div>
    </section>
  )
}

export default About;
