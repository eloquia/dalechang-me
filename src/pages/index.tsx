import React from 'react';

import SEO from '../components/common/seo';
import Intro from '../components/landing/intro';
import About from '../components/landing/about';
import WorkInteractive from '../components/landing/work/interactive/work-interactive.component';
import Interests from '../components/landing/interests/interests';

import '../styles/globals.scss';
import CurrentStack from '../components/landing/work/stack/current-stack.component';
import WorkSimple from '../components/landing/work/simple/work-simple.component';

/*
  The home page of the web application.
*/
function IndexPage(): JSX.Element {
  return (
    <div id="main-content">
      <SEO title="Dale Chang" />

      <Intro />
      {/* <WorkInteractive /> */}
      <WorkSimple />
      <CurrentStack />
      <About />
      <Interests />
    </div>
  );
}

export default IndexPage;
