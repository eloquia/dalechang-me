import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { Global } from '@emotion/react';

import { globalStyles } from './styles';
import Footer from './common/footer';
import Header from './common/header';

/*
  Layout has primary content on the left with a sidebar for navigation on the right
*/

const Main = styled.main`
  ${tw`flex flex-col justify-center items-center`}
`;

export type LayoutProps = { children: JSX.Element[] };

export default function Layout(layoutProps: LayoutProps): JSX.Element {
  return (
    <>
      <Global styles={globalStyles} />
      <Header />
      <Main>
        {layoutProps.children}
      </Main>
      <Footer />
    </>
  );
}
