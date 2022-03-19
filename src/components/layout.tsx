import React from 'react';

import Footer from './common/footer';
import Header from './common/header';

export type LayoutProps = { children: JSX.Element[] };

export default function Layout(layoutProps: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
      <main>
        {layoutProps.children}
      </main>
      <Footer />
    </>
  );
}
