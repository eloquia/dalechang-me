import React from 'react';
import tw, { css } from 'twin.macro';

import { linkStyle } from '../styles';

const footerStyle = css`
  ${tw`p-4 w-full bg-black text-white`}
`;

export default function Footer() {
  return (
    <footer css={footerStyle}>
      © {new Date().getFullYear()}{' '}
      <a css={linkStyle} target="_blank" rel="noreferrer" href="https://eloquia.io">
        Eloquia
      </a>
    </footer>
  )
}
