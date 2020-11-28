import React from 'react';
import { Global } from '@emotion/core';
import styled, { ThemeProvider } from 'styled-components';

import Header from './common/header';
import Footer from './common/footer';
import Theme from '../styles/Theme';
import { globalStyles } from './styles';

/*
  Layout has primary content on the left with a sidebar for navigation on the right
*/

const ContentContainer = styled.div`
  display: flex;

  @media (max-width: ${props => props.theme.sizes.mobile}) {
    flex-direction: column;
  }
`;

const Main = styled.main`
  display: flex;
  flex-diretion: column;
`;

export type LayoutProps = { children: JSX.Element[], location: any };

export default function Layout(layoutProps : LayoutProps): JSX.Element {
  return (
    <>
      <Global styles={globalStyles} />
      <ThemeProvider theme={Theme}>
        <ContentContainer id="content-container">
          <Main>
            {layoutProps.children}
            <Footer />
          </Main>
          <Header location={layoutProps.location} />
        </ContentContainer>
      </ThemeProvider>
    </>
  );
}
