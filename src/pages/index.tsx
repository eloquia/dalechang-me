import React from 'react';

import SEO from '../components/common/seo';
import Intro from '../components/landing/intro';
import About from '../components/landing/about';
import Interests from '../components/landing/interests/interests';
import CurrentStack from '../components/landing/work/stack/current-stack.component';
import WorkSimple from '../components/landing/work/simple/work-simple.component';
import '../styles/globals.scss';
import Resume from '../components/landing/resume-focus';
import RecentWorks from '../components/landing/recent-work';
import Contact from '../components/landing/contact';
import ResumeSimple from '../components/landing/resume-simple';

/*
  The home page of the web application.
*/
function IndexPage(): JSX.Element {
  return (
    <div id="main-content">
      <SEO title="Software Engineer" />

      <Intro />
      <About />
      <WorkSimple />
      {/* <CurrentStack /> */}
      {/* <RecentWorks /> */}
      <ResumeSimple />
      {/* <Interests /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default IndexPage;
