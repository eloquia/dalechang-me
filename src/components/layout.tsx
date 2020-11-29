import React from 'react';
import { Global } from '@emotion/core';
import tw from 'twin.macro';
import styled, { ThemeProvider } from 'styled-components';

import Header from './common/header';
import Footer from './common/footer';
import Theme from '../styles/Theme';
import { globalStyles } from './styles';

/*
  Layout has primary content on the left with a sidebar for navigation on the right
*/

const OverallContainer = styled.div`
  ${tw`flex flex-col`}
`;

const ContentContainer = styled.div`
  ${tw`flex flex-row w-screen justify-between`}

  @media (max-width: ${props => props.theme.sizes.mobile}) {
    ${tw`flex-col`}
  }
`;

const Main = styled.main`
  ${tw`flex flex-col mx-auto`}
`;

export type LayoutProps = { children: JSX.Element[], location: any };

export default function Layout(layoutProps : LayoutProps): JSX.Element {
  return (
    <>
      <Global styles={globalStyles} />
      <ThemeProvider theme={Theme}>
        <OverallContainer>
          <ContentContainer>
            <Main>
              {layoutProps.children}
            </Main>
            <Header />
          </ContentContainer>
          <Footer />
        </OverallContainer>
      </ThemeProvider>
    </>
  );
}
