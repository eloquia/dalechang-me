import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import tw from 'twin.macro';
import styled from 'styled-components';
import { H1, Section } from '../../../styles';

const CurrentStack = () => {
  // const stackQuery = useStaticQuery(graphql`
  //   query stackQuery {
  //     stackItemsJson {
  //       name
  //       children {
  //         id
  //       }
  //     }
  //   }
  // `);
  return (
    <Section>
      <H1>Current Stack</H1>
    </Section>
  );
};

export default CurrentStack;
