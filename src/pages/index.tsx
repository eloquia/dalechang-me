import React from 'react';

import { Global } from '@emotion/core';

import SEO from '../components/seo';
import Intro from '../components/intro';
import Bio from '../components/bio';
import WorkHistories from '../components/work';
import Education from '../components/education';

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
      <WorkHistories />
      <Education />
    </>
  );
}

export default IndexPage;
