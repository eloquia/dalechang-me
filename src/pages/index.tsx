import React from 'react';

import SEO from '../components/common/seo';
import Intro from '../components/landing/intro';
import About from '../components/landing/about';
import WorkList from '../components/landing/work/work-list.component';
import ResumeSimple from '../components/landing/resume-simple';
import '../styles/globals.scss';

/*
  The home page of the web application.
*/
function IndexPage(): JSX.Element {
  return (
    <>
      <SEO title="Software Engineer" />

      <Intro />
      <WorkList />
      <About />
      <ResumeSimple />
    </>
  );
}

export default IndexPage;
