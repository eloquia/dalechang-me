import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

export default function Header() {
  return (
    <header>
      <div id="logo-container">
        <div id="logo">D</div>
        <span className="bold">dale</span>
        <span>chang.</span>
        <span className="bold">dev</span>
      </div>
      <nav>
        <div onClick={() => scrollTo('#about')}><span className="header-link">About</span></div>
        <div onClick={() => scrollTo('#work')}><span className="header-link">Work</span></div>
        {/* <div onClick={() => scrollTo('#challenges')}><span className="header-link">Challenges</span></div> */}
        {/* <div><span className="header-link">Technologies</span></div> */}
        {/* <div><span className="header-link">Projects</span></div> */}
        <div onClick={() => scrollTo('#resume')}><span className="header-link">Resume</span></div>
        {/* <div><span className="header-link">Contact</span></div> */}
      </nav>
    </header>
  )
}