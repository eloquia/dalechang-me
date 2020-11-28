import React from 'react';
import { css } from '@emotion/core';
import tw from 'twin.macro';

const notFoundStyle = css`
  ${tw`p-64`}
`;

export default function NotFound() {
  return (
    <article css={notFoundStyle}>
      <h1>Page Not Found</h1>
      <p>Oops, we could not find the page you are looking for!</p>
    </article>
  );
}
