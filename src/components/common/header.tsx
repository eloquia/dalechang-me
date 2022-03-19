import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

export default function Header() {
  return (
    <header>
      <div id="logo-container">
        <div id="logo">D</div>
        <span className="bold">dalechang.dev</span>
      </div>
      <nav>
        <div onClick={() => scrollTo('#work')}><span className="header-link">Work</span></div>
        <div onClick={() => scrollTo('#about')}><span className="header-link">About</span></div>
        <div onClick={() => scrollTo('#resume')}><span className="header-link">Resume</span></div>
      </nav>
    </header>
  )
}