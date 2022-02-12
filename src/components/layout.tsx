import React from 'react';

import Footer from './common/footer';
import Header from './common/header';

/*
  Layout has primary content on the left with a sidebar for navigation on the right
*/

export type LayoutProps = { children: JSX.Element[] };

export default function Layout(layoutProps: LayoutProps): JSX.Element {
  return (
    <div id="outer-content">
      {/* <Global styles={globalStyles} /> */}
      <Header />
      <main>
        {layoutProps.children}
      </main>
      <Footer />
    </div>
  );
}
