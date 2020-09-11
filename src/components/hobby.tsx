import React from 'react';

import { h1Style, articleStyle } from './styles';

function Hobbies(): JSX.Element {
  return (
    <article className="hobbies" css={articleStyle}>
      <h1 css={h1Style}>Hobbies</h1>
      <ul>
        <li>Bouldering</li>
        <li>Skydiving</li>
      </ul>
    </article>
  );
}

export default Hobbies;
