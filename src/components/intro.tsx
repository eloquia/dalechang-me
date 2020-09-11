import React from 'react';

import styled from '@emotion/styled';
import tw from 'twin.macro';

const Title = styled.h1`
  ${tw`text-4xl mb-2`}
`;

const Subtitle = styled.h2`
  ${tw`text-3xl`}
`;

const Paragraph = styled.p`
  ${tw`text-xl mb-8`}
`;

function Intro(): JSX.Element {
  return (
    <div className="intro">
      <Title>Hi, my name is Dale Chang</Title>
      <Subtitle>I solve problems using software</Subtitle>
      <Paragraph>
        From an idea to a design to tangible results, I make it all happen.
      </Paragraph>
    </div>
  );
}

export default Intro;
