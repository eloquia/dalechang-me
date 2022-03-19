import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import ExternalLink from '../common/externalLink';

const About = () => {
  const aboutContent = [
    <div className="titled-section">
      <h2>About Me</h2>

      <div id="about-content">
        <div id="about-text">
          <p>I like to say that I graduated with a degree in <strong className="text-sky-600">first principles thinking</strong>. In college I changed majors three times in order to satisfy my need to understand how things work at a fundamental level. From biomedical engineering to materials science and eventually physics, I am glad to say that my <ExternalLink href="https://www.youtube.com/watch?v=BQ2_BwqcFsc" displayText='meandering journey' /> left me with proof that I can tackle convoluted problems.</p>
          <p>Up to today I've enjoyed working in a variety of domains, from <strong className="text-sky-600">architecting</strong> <strong className="text-sky-600">NLP solutions</strong> in a <strong className="text-sky-600">legal</strong> <strong className="text-sky-600">start-up</strong> to <strong className="text-sky-600">healthcare and financial analytics</strong> in a <strong className="text-sky-600">gigantic Fortune 20 corporation</strong>, I look forward to what the future has in store.</p>
        </div>
        <div id="about-image-container">
          <StaticImage src={"../../images/enthousiasm.png"} width={300} alt="A picture of my enthousiasm for trying new things" />
          <span className="text-sm"><em>Always excited to try new things</em></span>
        </div>
      </div>
    </div>
  ]
  return (
    <div id="about" className="content bg-sky-200">
      {aboutContent}
    </div>
  )
}

export default About;
