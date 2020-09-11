import { css } from '@emotion/core';
import tw from 'twin.macro';

/*
  Common styles used through the project
*/

export const linkStyle = css`
  ${tw`text-blue-500 hover:text-red-500`}
`;

export const h1Style = css`
  ${tw`text-3xl`}
`;

export const h2Style = css`
  ${tw`text-2xl`}
`;

export const h3Style = css`
  ${tw`text-xl`}
`;

/*
  Section Style

  This style is applied to HTML section tags which describe an
  aggregation of similar content
*/
export const articleStyle = css`
  ${tw`p-12`}
`;
