import React from 'react';
import { css } from '@emotion/core';
import tw from 'twin.macro';

import Layout from '../components/layout';

const notFoundStyle = css`
  ${tw`p-64`}
`;

function NotFound(): JSX.Element {
  return (
    <Layout>
      <article css={notFoundStyle}>
        <h1>Page Not Found</h1>
        <p>Oops, we could not find the page you are looking for!</p>
      </article>
      <div></div>
    </Layout>
  );
}

export default NotFound;
