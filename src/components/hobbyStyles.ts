import { css } from '@emotion/core';
import tw from 'twin.macro';

export const hobby = css`
  ${tw`flex flex-row`}
`;

export const hobbySection = css`
  ${tw`w-2/4 p-16`}
`;

export const hobbyTitleContainer = css`
  ${tw`flex justify-center items-center w-2/4`}
`;

export const hobbyTitle = css`
  ${tw`text-lg font-bold`}
`;

/*
  Image starts on the right, covering the description.
  On mouseover, move the image to the left and scroll
  if possible
*/
export const hobbyImageContainer = css`
  ${tw`flex w-2/4 absolute`}
`;

export const hobbyImage = css`
  ${tw`object-cover w-full`}
`;
