import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';
import tw from 'twin.macro';

import { Section, H1, UL } from '../styles';

const paragraphStyle = css`
  ${tw`mb-4 text-justify`}
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

  return (
    <Section className="bio" id="bio">
      <H1>Bio</H1>

      <p css={paragraphStyle}>
        Dale is a software engineer with over {yearsExperience} years of
        experience in a diverse array of technologies.{' '}
      </p>

      <p css={paragraphStyle}>
        From growing up playing with legos to disassembling parents&apos;
        appliances to graduating in physics, he has cultivated a first principles approach
        that encourages elegant design.
      </p>

      <p css={paragraphStyle}>
        As a multi-faceted software engineer, he enjoys working on many parts of an
        application. Currently he is refining his ability to build elegant and intuitive
        web applications while also demystifying cloud-native applications.
      </p>

      <p css={paragraphStyle}>
        In the wild, you will always find Dale in one the following scenarios:
         with his MacBook, building and enhancing
        his clients&apos; applications
      </p>

      <UL>
        <li>At a cafe with his MacBook, enhancing a clients&apos; or his own application</li>
        <li>Biking around the city exploring new locations</li>
        <li>Camping with a leave-no-trace mentality</li>
      </UL>
    </Section>
  );
}

export default Bio;
