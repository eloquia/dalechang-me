import React from 'react';

import SEO from '../components/common/seo';
import Intro from '../components/landing/intro';
import About from '../components/landing/about';
import Work from '../components/landing/work/work.component';
import Stack from '../components/landing/stack';
import Interests from '../components/landing/interests/interests';

import '../styles/globals.css';

/*
  The home page of the web application.
*/
function IndexPage(): JSX.Element {
  return (
    <>
      <SEO title="Multi-faceted Software Engineer" />

      <Intro />
      <About />
      <Work />
      <Stack />
      <Interests />
    </>
  );
}

export default IndexPage;
