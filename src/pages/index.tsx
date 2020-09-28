import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useStaticQuery, graphql, Link } from 'gatsby';

import { css, Global } from '@emotion/core';
import tw from 'twin.macro';

import SEO from '../components/seo';
import Intro from '../components/intro';
import Bio from '../components/bio';
import WorkHistories from '../components/work';
import Education from '../components/education';
import Hobbies from '../components/hobby';

import { linkStyle } from '../components/styles';
import { globalStyles } from '../components/layoutStyles';

const navBackgroundStyle = css`
  ${tw`absolute fixed inset-y-0 right-0 z-10 flex flex-col justify-around`}
`;

const navStyle = css`
  ${tw``}
`;

const footerStyle = css`
  ${tw``}
`;

function IndexPage(): JSX.Element {
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
      <nav id="nav" css={navBackgroundStyle}>
        <ul css={navStyle}>
          {site.siteMetadata.menuLinks.map(link => (
            <li
              key={link.name}
              style={{
                listStyleType: `none`,
                padding: `1rem`
              }}
            >
              <Link style={{ color: `gray` }} to={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <SEO title="A Look At" />
      <Intro />
      <Bio />
      <WorkHistories />
      <Education />
      <Hobbies />
      <footer css={footerStyle}>
        © {new Date().getFullYear()}{' '}
        <a css={linkStyle} href="https://eloquia.io">
          Eloquia
        </a>
      </footer>
    </>
  );
}

export default IndexPage;
