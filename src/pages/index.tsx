import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

import Layout from '../components/layout';

import SEO from '../components/seo';

const Title = styled.h1`
  ${tw`text-4xl mb-2`}
`;

const Subtitle = styled.h2`
  ${tw`text-3xl`}
`;

const Paragraph = styled.p`
  ${tw`text-xl mb-8`}
`;

function IndexPage(): JSX.Element {
  return (
    <Layout>
      <SEO title="Home" />
      <Title>Hi people</Title>
      <Subtitle>
        This is a quick Typescript, @emotion/styled, TailwindCSS, eslint Gatsby
        starter.
      </Subtitle>
      <Paragraph>Now go build something great.</Paragraph>
    </Layout>
  );
}

export default IndexPage;
