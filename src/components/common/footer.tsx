import React from 'react';
import tw, { css } from 'twin.macro';

import { linkStyle } from '../styles';
import { GitHub } from '../external/github';

const footerStyle = css`
  ${tw`flex flex-row justify-between p-4 w-full bg-black text-white`}
`;

export default function Footer() {
  return (
    <footer css={footerStyle}>
      <div className="footer-section-left">
        © {new Date().getFullYear()}{' '}
        <a css={linkStyle} target="_blank" rel="noreferrer" href="https://eloquia.io">
          Eloquia
        </a>
      </div>

      <div className="footer-section-right">
        <a css={linkStyle} target="_blank" rel="noreferrer" href="https://github.com/eloquia/dalechang-me/">
          <GitHub />
        </a>
      </div>
    </footer>
  )
}
