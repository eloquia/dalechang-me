import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

function Bio(): JSX.Element {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          experienceStart
        }
      }
    }
  `);

  // +1 for the current year
  const yearsExperience: number =
    new Date().getFullYear() - data.site.siteMetadata.experienceStart + 1;

  return (
    <section className="bio" id="bio">
      <h1>Bio</h1>

      <p>
        Dale is a software engineer with over {yearsExperience} years of
        experience in a diverse array of technologies.{' '}
      </p>

      <p>
        From growing up playing with legos to disassembling parents&apos;
        appliances to graduating in physics, he has cultivated a first principles approach
        that encourages elegant design.
      </p>

      <p>
        As a multi-faceted software engineer, he enjoys working on many parts of an
        application. Currently he is refining his ability to build elegant and intuitive
        web applications while also demystifying cloud-native applications.
      </p>

      <p>
        In the wild, you will always find Dale in one the following scenarios:
        with his MacBook, building and enhancing
        his clients&apos; applications
      </p>

      <ul>
        <li>At a cafe with his MacBook, enhancing a clients&apos; or his own application</li>
        <li>Biking around the city exploring new locations</li>
        <li>Camping with a leave-no-trace mentality</li>
      </ul>
    </section>
  );
}

export default Bio;
