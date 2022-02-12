import React from 'react';

import SEO from '../components/common/seo';
import Intro from '../components/landing/intro';
import About from '../components/landing/about';
import Work from '../components/landing/work/work.component';
import Interests from '../components/landing/interests/interests';

import '../styles/globals.css';
import CurrentStack from '../components/landing/work/stack/current-stack.component';

/*
  The home page of the web application.
*/
function IndexPage(): JSX.Element {
  return (
    <div id="main-content">
      <SEO title="Software Engineer" />

      <Intro />
      <Work />
      <About />
      <CurrentStack />
      <Interests />
    </div>
  );
}

export default IndexPage;
