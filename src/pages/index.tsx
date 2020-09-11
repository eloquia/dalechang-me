import React from 'react';

import Layout from '../components/layout';

import SEO from '../components/seo';
import Intro from '../components/intro';
import Bio from '../components/bio';
import Projects from '../components/projects';
import Education from '../components/education';
import Hobbies from '../components/hobby';

function IndexPage(): JSX.Element {
  return (
    <Layout>
      <SEO title="Home" />
      <Intro />
      <Bio />
      <Projects />
      <Education />
      <Hobbies />
    </Layout>
  );
}

export default IndexPage;
