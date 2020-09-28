import React from 'react';
import { css } from '@emotion/core';
import tw from 'twin.macro';

import { h1Style } from './styles';

const workStyle = css`
  ${tw`my-16 px-64`}
`;

const paragraphStyle = css`
  ${tw`mb-4`}
`;

function WorkHistories(): JSX.Element {
  return (
    <article className="work" css={workStyle}>
      <h1 css={h1Style}>Work</h1>

      <p css={paragraphStyle}>I do it</p>
    </article>
  );
}

export default WorkHistories;
