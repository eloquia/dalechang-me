import styled from '@emotion/styled';
import { css } from '@emotion/core';
import tw from 'twin.macro';

export const globalStyles = css`
  body {
    ${tw`antialiased text-gray-900 h-screen`}
  }
`;

export const Container = styled.div`
  ${tw``}
`;

export const Link = styled.a`
  ${tw`text-blue-500 hover:text-red-500`}
`;
