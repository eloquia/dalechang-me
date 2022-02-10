import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

import { linkStyle } from '../styles';
import { GitHub } from '../external/github';
import ExternalLink from './externalLink';

const Footy = styled.footer`
  ${tw`flex flex-row justify-center items-center p-4 bg-black text-white w-screen`}
`;

const FooterContent = styled.div`
  ${tw`flex flex-row justify-between sm:w-full md:w-full lg:w-full xl:w-full`}
`;

const FooterSection = styled.div`
  ${tw`flex flex-row gap-1`}
`;

export default function Footer() {
  return (
    <Footy>
      <FooterContent>
        <FooterSection>
          <span>© {new Date().getFullYear()}</span>
          <ExternalLink href="https://eloquia.io" displayText="Eloquia" />
        </FooterSection>

        <FooterSection>
          <span>Built with <ExternalLink href="https://gatsbyjs.com" displayText="Gatsby" /></span>
          <a css={linkStyle} target="_blank" rel="noreferrer" href="https://github.com/eloquia/dalechang-me/">
            <GitHub />
          </a>
        </FooterSection>
      </FooterContent>
    </Footy>
  )
}
