import React from 'react';

export default function Header() {
  return (
    <header>
      <div id="logo-container">
        <div id="logo">D</div>
        <span className="bold">Dale</span>
        <span> Chang</span>
      </div>
      <nav>
        <div><span className="header-link">Work</span></div>
        <div><span className="header-link">Technologies</span></div>
        <div><span className="header-link">Projects</span></div>
        <div><span className="header-link">Resume</span></div>
        <div><span className="header-link">Contact</span></div>
      </nav>
    </header>
  )
}