import React from 'react';
import { h1Style, h2Style, articleStyle } from './styles';

function Intro(): JSX.Element {
  return (
    <article className="intro" css={articleStyle}>
      <h1 css={h1Style}>Hi, my name is Dale Chang</h1>
      <h2 css={h2Style}>I solve problems using software</h2>
      <p>From an idea to a design to tangible results, I make it all happen.</p>
    </article>
  );
}

export default Intro;
