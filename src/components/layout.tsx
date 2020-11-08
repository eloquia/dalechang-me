import React from 'react';
import { Global } from '@emotion/core';
import tw, { css } from 'twin.macro';
import { ThemeProvider } from 'styled-components';

import Header from './header';

import Theme from '../styles/Theme';
import { globalStyles, linkStyle } from './styles';

/*
  Layout has primary content on the left with a sidebar for navigation on the right
*/

const footerStyle = css`
  ${tw``}
`;

const contentContainerStyles = css`
  ${tw`flex flex-row-reverse`}
`;

const mainStyles = css`
  ${tw`flex flex-col`}
`;

export type LayoutProps = { children: JSX.Element[], location: any };

export default function Layout(layoutProps : LayoutProps): JSX.Element {
  return (
    <>
      <Global styles={globalStyles} />
      <ThemeProvider theme={Theme}>
        <div id="content-container" css={contentContainerStyles}>
          <Header location={layoutProps.location} />

          <main css={mainStyles}>
            {layoutProps.children}
            <footer css={footerStyle}>
              © {new Date().getFullYear()}{' '}
              <a css={linkStyle} target="_blank" rel="noreferrer" href="https://eloquia.io">
                Eloquia
              </a>
            </footer>
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}
