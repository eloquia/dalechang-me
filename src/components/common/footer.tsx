import React from 'react';

import { GitHub } from '../external/github';
import ExternalLink from './externalLink';

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-left">
          <span id="copyright-date">© {new Date().getFullYear()}</span>
          <ExternalLink href="https://eloquia.io" displayText="Eloquia" />
        </div>

        {/* <div className="footer-right">
          <span>Built with <ExternalLink href="https://gatsbyjs.com" displayText="Gatsby" /></span>
          <a target="_blank" rel="noreferrer" href="https://github.com/eloquia/dalechang-me/">
            <GitHub />
          </a>
        </div> */}
      </div>
    </footer>
  )
}
