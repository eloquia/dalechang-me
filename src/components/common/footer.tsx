import React from 'react';

import GitHub from '../external/github';
import LinkedIn from '../external/linkedin';
import { SquareIconProps } from '../external/models';

export default function Footer() {
  const squareIconProps: SquareIconProps = {
    dimension: 20,
  };
  return (
    <footer className="bg-zinc-800">
      <div className="footer-left">
        <span id="copyright-date" className="text-slate-100">© {new Date().getFullYear()}</span>
        {/* <ExternalLink href="https://eloquia.io" displayText="Eloquia" /> */}
        <span className="text-slate-100">Eloquia</span>
      </div>

      <div className="footer-right">
        {/* <span>Built with <ExternalLink href="https://gatsbyjs.com" displayText="Gatsby" /></span> */}
        <a target="_blank" rel="noreferrer" href="https://github.com/eloquia/dalechang-me/">
          <GitHub {...squareIconProps} />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dale-chang-112827157">
          <LinkedIn {...squareIconProps} />
        </a>
      </div>
    </footer>
  )
}
