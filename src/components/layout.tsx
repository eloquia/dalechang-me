import React from 'react';
import { Global } from '@emotion/core';

import { globalStyles, Container } from './layoutStyles';

type Props = { children: JSX.Element[] };

function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <Global styles={globalStyles} />
      <Container>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}, Gatsby</footer>
      </Container>
    </>
  );
}

export default Layout;
