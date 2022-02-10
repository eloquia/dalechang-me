import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import tw, { css } from 'twin.macro';

import { Section, TextContent } from '../styles';

const aboutContentStyles = css`
  ${tw`flex flex-col md:flex-row gap-4`}
`;

const About = () => {
  const aboutQuery = useStaticQuery(graphql`
    query {
      image: allFile(filter: {name: {eq: "dale-chang-orig"}}) {
        edges {
          node {
            name
            childImageSharp {
              fixed(width: 320) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
      text: allMarkdownRemark(filter: {frontmatter: { section: {eq: "about"}}}) {
        edges {
          node {
            frontmatter {
              title
            }
            html
          }
        }
      }
    }
  `);
  console.log('aboutQuery', aboutQuery);
  const img = aboutQuery.image.edges[0].node;
  const dangerousHtml = { __html: aboutQuery.text.edges[0].node.html }

  return (
    <Section>
      <div css={aboutContentStyles}>
        <TextContent>
          <section dangerouslySetInnerHTML={dangerousHtml} />
        </TextContent>

        <div style={{ width: '100%' }}>
          <Img fixed={img.childImageSharp.fixed} />
        </div>
      </div>
    </Section>
  )
}

export default About;
