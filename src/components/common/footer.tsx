import React from 'react';

import GitHub from '../external/github';
import LinkedIn from '../external/linkedin';
import { SquareIconProps } from '../external/models';
import ExternalLink from './externalLink';

export default function Footer() {
  const squareIconProps: SquareIconProps = {
    dimension: 20,
  };
  return (
    <footer>
      <div className="footer-left">
        <span id="copyright-date">© {new Date().getFullYear()}</span>
        <ExternalLink href="https://eloquia.io" displayText="Eloquia" />
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
