import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";

import { Section, TextContent } from '../styles';

const About = () => {
  const aboutQuery = useStaticQuery(graphql`
    query AboutQuery {
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
  const dangerousHtml = { __html: aboutQuery.text.edges[0].node.html }

  return (
    <Section>
      <div>
        <TextContent>
          <section dangerouslySetInnerHTML={dangerousHtml} />
        </TextContent>

        <StaticImage src="../../images/dale-chang-orig.png" alt="Dale Chang" />
      </div>
    </Section>
  )
}

export default About;
