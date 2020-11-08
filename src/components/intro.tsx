import React from 'react';
import { css } from '@emotion/core';
import tw from 'twin.macro';

import { h1Style, h2Style } from './styles';

const introStyle = css`
  ${tw``}
`;

function Intro(): JSX.Element {
  return (
    <article className="intro" css={introStyle}>
      <h1 css={h1Style}>Hi, my name is Dale Chang</h1>
      <h2 css={h2Style}>I solve problems with software</h2>
    </article>
  );
}

export default Intro;
