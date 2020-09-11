import React from 'react';
import { articleStyle, h1Style } from './styles';

function Bio(): JSX.Element {
  return (
    <article className="bio" css={articleStyle}>
      <h1 css={h1Style}>Bio</h1>
    </article>
  );
}

export default Bio;
