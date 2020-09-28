import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { css, Global } from '@emotion/core';
import tw from 'twin.macro';

import Navigation from './common/navigation';
import { linkStyle } from './styles';

import { globalStyles, Container } from './layoutStyles';

const mainContentStyle = css`
  ${tw`flex flex-row static`}
`;

const footerStyle = css`
  ${tw``}
`;

type Props = { children: JSX.Element[] };

function Layout({ children }: Props): JSX.Element {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `
  );

  return (
    <>
      <Global styles={globalStyles} />
      <Container>
        <div className="main-content" css={mainContentStyle}>
          <main>{children}</main>
          <Navigation
            menuLinks={site.siteMetadata.menuLinks}
            siteTitle={site.siteMetadata.title}
          />
        </div>
        <footer css={footerStyle}>
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
