import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';
import tw from 'twin.macro';

import { h1Style } from './styles';

const bioStyle = css`
  ${tw``}
`;

const paragraphStyle = css`
  ${tw`mb-4`}
`;

const unorderedListItemStyle = css`
  list-style-type: circle;
  margin-left: 1rem;
`;

function Bio(): JSX.Element {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          experienceStart
          currentTechnologies
        }
      }
    }
  `);

  // +1 for the current year
  const yearsExperience: number =
    new Date().getFullYear() - data.site.siteMetadata.experienceStart + 1;
  const interests: string[] = data.site.siteMetadata.currentTechnologies;

  return (
    <article className="bio" css={bioStyle} id="bio">
      <h1 css={h1Style}>Bio</h1>

      <p css={paragraphStyle}>
        I am a software engineer with a total of {yearsExperience} years of
        experience in a diverse array of technologies.{' '}
      </p>

      <p css={paragraphStyle}>My current interests include:</p>

      <ul css={unorderedListItemStyle}>
        {interests.map(interest => (
          <li key={interest}>{interest}</li>
        ))}
      </ul>
    </article>
  );
}

export default Bio;
