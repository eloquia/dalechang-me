import React from 'react';
import { articleStyle, h1Style } from './styles';

function Projects(): JSX.Element {
  return (
    <article className="projects-work" css={articleStyle}>
      <h1 css={h1Style}>Work</h1>
    </article>
  );
}

export default Projects;
