import { css } from '@emotion/core';
import tw from 'twin.macro';
import styled from 'styled-components';

export const globalStyles = css``;

/*
  Common styles used through the project
*/

export const linkStyle = css`
  ${tw`text-blue-500 hover:text-red-500`}
`;


export const H1 = styled.h1`
  ${tw`text-3xl`}
`;


export const H2 = styled.h2`
  ${tw`text-2xl`}
`;


export const H3 = styled.h3`
  ${tw`text-xl`}
`;


export const UL = styled.ul`
  ${tw`list-disc list-inside`}
`;


export const Article = styled.article`
  ${tw`flex flex-col min-h-screen justify-center w-screen`}

  @media (min-width: ${props => props.theme.sizes.tablet}) {

  }

  @media (max-width: ${props => props.theme.sizes.mobile}) {
    ${tw`w-screen`}
  }
`;


/**
 * Describes the common styles for a general "section" on the Landing Page
 */
export const Section = styled.section`
  ${tw`p-4`}

  @media (max-width: ${props => props.theme.sizes.mobile}) {
    ${tw`pt-24`}
  }
`;
