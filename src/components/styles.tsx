import { css } from '@emotion/react';
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
  ${tw`flex flex-col min-h-screen w-screen sm:w-auto justify-center`}
`;


/**
 * Describes the common styles for a general "section" on the Landing Page
 */
export const Section = styled.section`
  ${tw`container justify-center items-center`}
`;

export const SectionContent = styled.div`
  ${tw``}
`;

export const TextContent = styled.div`
  ${tw`justify-center items-center`}
`;
