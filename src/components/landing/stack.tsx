import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { TextContent } from '../styles';

const Stack = () => {

  const query = useStaticQuery(graphql`
    query stackQuery {
      allMarkdownRemark(filter: {frontmatter: {section: {eq: "stack"}}}) {
        edges {
          node {
            id
            html
          }
        }
      }
    }
  `);

  const html = {
    "__html": query.allMarkdownRemark.edges[0].node.html
  };

  return (
    <TextContent>
      <section dangerouslySetInnerHTML={html} />
    </TextContent>
  )
}

export default Stack;
