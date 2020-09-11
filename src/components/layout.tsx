import React from 'react';
import { Global } from '@emotion/core';

import { linkStyle } from './styles';

import { globalStyles, Container } from './layoutStyles';

type Props = { children: JSX.Element[] };

function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <Global styles={globalStyles} />
      <Container>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}{' '}
          <a css={linkStyle} href="https://eloquia.io">
            Eloquia
          </a>
        </footer>
      </Container>
    </>
  );
}

export default Layout;
