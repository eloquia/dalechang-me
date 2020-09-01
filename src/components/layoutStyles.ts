import styled from '@emotion/styled';
import { css } from '@emotion/core';
import tw from 'twin.macro';

export const globalStyles = css`
  body {
    ${tw`antialiased text-gray-900 flex flex-col justify-center items-center h-screen`}
  }
`;

export const Container = styled.div`
  ${tw``}
`;
