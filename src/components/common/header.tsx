import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import tw from 'twin.macro';
import styled from 'styled-components';

/*
  "Header" stylings (it's in quotes because it's not generally at the top)
  For mobile:
    * Sticky to the right with several dots
    * Don't expect people to be accurate with clicking on dots--when they click on the div with the dots, open the menu on the right
    * Dark gray overlay behind the menu when opened
  For larger-than-mobile:
    * Stick to the right, centered
*/

const HeaderWrapper = styled('nav')`
  position: fixed;
  width: 120px;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: height 0.3s ease;
  .nav-d {
    display: flex;
    flex-direction: column;
    justify-content: center;
    a {
      color: ${props => props.theme.colors.black};
      text-decoration: none;
      transition: all 0.3s ease;
      padding: 0.2rem 0.4rem;
      ${tw`hover:text-gray-300 hover:underline`}
    }
  }
  @media (max-width: ${props => props.theme.sizes.mobile}) {
    display: none;
  }
`;

export default function Header(): JSX.Element {

  function renderLinks() {
    return (
      <>
        <AnchorLink to="/#bio">Bio</AnchorLink>
        <AnchorLink to="/#work">Work</AnchorLink>
        <AnchorLink to="/#clients">Clients</AnchorLink>
        <AnchorLink to="/#hobbies">Hobbies</AnchorLink>
      </>
    );
  }

  return (
    <HeaderWrapper>
      <div id="route-container">
        <div className="nav-d">{renderLinks()}</div>
      </div>
    </HeaderWrapper>
  );

}
