import { css } from '@emotion/react';
import tw from 'twin.macro';

export const interest = css`
  ${tw`flex flex-row`}
`;

export const interestSection = css`
  ${tw`w-2/4 p-16`}
`;

export const interestTitleContainer = css`
  ${tw`flex justify-center items-center w-2/4`}
`;

export const interestTitle = css`
  ${tw`text-lg font-bold`}
`;

/*
  Image starts on the right, covering the description.
  On mouseover, move the image to the left and scroll
  if possible
*/
export const interestImageContainer = css`
  ${tw`flex w-2/4 absolute`}
`;

export const interestImage = css`
  ${tw`object-cover w-full`}
`;
