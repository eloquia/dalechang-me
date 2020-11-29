import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import { css } from '@emotion/core';
import tw from 'twin.macro';

import { Article, H1, H2 } from '../styles';

const containerStyle = css`
  ${tw`flex flex-row`}
`;

const imageContainerStyle = css`
  width: 100%;
  display: inline;
  ${tw`w-1/2`}
`;

const introTextContainerStyles = css`
  ${tw`flex flex-col justify-center justify-items-center w-1/2 pl-4`}
`;

function Intro(): JSX.Element {
  const breakpoints = useBreakpoint();
  const introImageQuery = useStaticQuery(graphql`
    query IntroImageQuery {
      allFile(filter: {name: {eq: "dale-chang-orig"}}) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxHeight: 808) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Article className="intro" id="about">

      {/*
        Unfortunately I'd like two different styles here, one for mobile and one for non-mobile.
        For mobile, words should be displayed on top of the image.
        For non-mobile displays, the words should be in a separate div from the image
      */}

      {breakpoints.xs || breakpoints.sm ? (
        <BackgroundImage
            fluid={introImageQuery.allFile.edges[0].node.childImageSharp.fluid}
            style={{
              height: '808px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div className="mobile-text-container" style={{marginTop: '1rem'}}>
              <H1>Hi, my name is Dale Chang</H1>
              <H2>I solve problems using software</H2>
            </div>
        </BackgroundImage>
      ) : (
        <div className="intro-container" css={containerStyle}>
          <div css={imageContainerStyle}>
            <Img fluid={introImageQuery.allFile.edges[0].node.childImageSharp.fluid} key={introImageQuery.allFile.edges[0].node.name} />
          </div>

          <div className="intro-text-container" css={introTextContainerStyles}>
            <H1>Hi, my name is Dale Chang</H1>
            <H2>I solve problems using software</H2>
          </div>
        </div>
      )}

    </Article>
  );
}

export default Intro;
