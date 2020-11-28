import React from 'react';
import { Global } from '@emotion/core';

import SEO from '../components/common/seo';
import Intro from '../components/landing/intro';
import Bio from '../components/landing/bio';
import Work from '../components/landing/work/work.component';
// import Clients from '../components/landing/clients';
// import Hobbies from '../components/landing/hobby';

import { globalStyles } from '../components/styles';

/*
  The home page of the web application.
*/
function IndexPage(): JSX.Element {
  return (
    <>
      <Global styles={globalStyles} />
      <SEO title="Multi-faceted Software Engineer" />
      <Intro />
      <Bio />
      <Work />
      {/* <Clients /> */}
      {/* <Hobbies /> */}
    </>
  );
}

export default IndexPage;
